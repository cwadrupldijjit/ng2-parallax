// ng2-parallax

import { Directive, 
		 ElementRef, 
		 Host, 
		 Input,
		 Optional, 
		 OnInit } from '@angular/core';
import {ParallaxConfig} from './parallax.interface';

@Directive({
    selector: '[parallax]'
})

export class ParallaxDirective implements OnInit {
	name: string = 'parallaxDirective';
	
    @Input() config: ParallaxConfig;
	// the following @Inputs are all part of the config object, which for 
	// brevity's sake, you can do a bunch of operations in bulk by passing 
	// in the config object; caveat for this is that angular 2 won't permit 
	// more than 9 keys being passed in an object via the template
    @Input() cssKey: string = 'backgroundPosition';
	@Input() cssProperty: string = 'backgroundPositionY';
	@Input() axis: 'X'|'Y' = 'Y';
    @Input() ratio: number = -.7;
    @Input() initialValue: number = 0;
	@Input() canMove: any = true;
	@Input() scrollerId: string;
	@Input() maxValue: number;
	@Input() minValue: number;
	@Input() cssUnit: string = 'px';
	@Input() cb;
	@Input() cb_context: any = null;
	@Input() cb_args: any[] = [];
	@Input() scrollElement: any;
	@Input() parallaxElement: HTMLElement;
	
	parallaxStyles: {} = {};
	
    private cssValue: string;
    private isSpecialVal: boolean = false;
	
	private hostElement: HTMLElement;
	
	private evaluateScroll = () => {
		if (this.canMove) {
			let resultVal: string;
			let calcVal: number;
			
			if (this.scrollElement instanceof Window)
				calcVal = this.scrollElement.scrollY * this.ratio + this.initialValue;
			else
				calcVal = this.scrollElement.scrollTop * this.ratio + this.initialValue;
			
			if (this.maxValue !== undefined && calcVal >= this.maxValue)
				calcVal = this.maxValue;
			else if (this.minValue !== undefined && calcVal <= this.minValue)
				calcVal = this.minValue;
			
			// added after realizing original setup wasn't compatible in Firefox
			// debugger;
			if (this.cssKey === 'backgroundPosition') {
				if (this.axis === 'X') {
				  resultVal = 'calc(50% + ' + calcVal + this.cssUnit + ') center';
				} else {
				  resultVal = 'center calc(50% + ' + calcVal + this.cssUnit + ')';
				}
			} else if (this.isSpecialVal) {
				resultVal = this.cssValue + '(' + calcVal + this.cssUnit + ')';
			} else { 
				resultVal = calcVal + this.cssUnit;
			}
			
			if (this.cb) {
				// console.log('this should be running')
				this.cb.apply(this.cb_context, this.cb_args);
			}
			
			this.parallaxElement.style[this.cssKey] = resultVal;
		}
	}
	
	public ngOnInit() {
		let cssValArray: string[];
		
		// console.log('%s initialized on element', this.name, this.hostElement);
		// console.log(this);
		
		for (let prop in this.config) { this[prop] = this.config[prop]; }
		this.cssProperty = this.cssProperty ? this.cssProperty : 'backgroundPositionY';
		if (this.cssProperty.match(/backgroundPosition/i)) {
			if (this.cssProperty.split('backgroundPosition')[1].toUpperCase() === 'X') {
				this.axis = 'X';
			}
			
			this.cssProperty = 'backgroundPosition';
		}
		
        cssValArray = this.cssProperty.split(':');
        this.cssKey = cssValArray[0];
        this.cssValue = cssValArray[1];
		
        this.isSpecialVal = this.cssValue ? true : false;
        if (!this.cssValue) this.cssValue = this.cssKey;
		
        this.ratio = +this.ratio;
        this.initialValue = +this.initialValue;
		
		this.parallaxElement = this.parallaxElement || this.hostElement;
		if (!this.scrollElement) {
			if (document.getElementById('parallaxScroll'))
				this.scrollElement = document.getElementById('parallaxScroll');
			else if (this.scrollerId) {
				try {
					this.scrollElement = document.getElementById(this.scrollerId);
					if (!this.scrollElement)
						throw(`The ID passed through the parallaxConfig ('${this.scrollerId}') object was not found in the document.  Defaulting to tracking the scrolling of the window.`);
				} catch(e) {
					console.warn(e);
					this.scrollElement = window;
				}
			} else this.scrollElement = window;
		}
		
		this.evaluateScroll();
		
		this.scrollElement.addEventListener('scroll', this.evaluateScroll.bind(this));
	}
	
    constructor(element: ElementRef) {
		this.hostElement = element.nativeElement;
    }
}
