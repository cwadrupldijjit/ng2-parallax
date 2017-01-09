// ng2-parallax

import { Directive, 
		 ElementRef, 
		 Host, 
		 Input,
		 Optional, 
		 OnInit } from '@angular/core';

/* 
These are optional values you can include in the config object you can pass into the 
directive for custom properties you want to use this with.  This tool can be used for 
more than just the parallax effect, and it is able to transform anything about the 
[parallaxElement] that you want to have bound to the scrolling of the nested element.  

*/
interface ParallaxConfig {
	// the css property (converted to camelCase) that you want changed along with the
	// value you want to assign to the css key; you should use cssProperty if you're 
	// just defining one property without special values
	cssKey?: string;
	
	// this is used to define the css property you'd like to modify as you scroll
	// default is backgroundPositionY
	cssProperty?: string;
	
	// ratio defining how fast, slow, or the direction of the changes on scrolling
	ratio?: number;
	
	// this is the initial value in pixels for the cssProperty property you defined
	// before or, if you didn't define one, it defaults to 0
	initialValue?: number;
	
	// use this if you want the parallax effect only if the passed in statement is 
	// truthy; default is boolean true
	canMove?: any;
	
	// the id for the element on the page you'd like to track the scrolling of in the 
	// case where the element is not available in the current component; 
	// if no id is defined along with no scrollElement below, 
	// it defaults to the scrolling of the body
	scrollerId?: string;
	
	// the upper constraint for the css transformation
	maxValue?: number;
	
	// the lower constraint for the css transformation
	minValue?: number;
	
	// the unit (e.g. 'px', 'em', '%', 'vh', etc.) you want for the parallax effect to use 
	cssUnit?: string;
	
	// the element in the current component that you'd like the directive to track its 
	// position as it scrolls;  gets assigned to the body if nothing is defined
	scrollElement?: HTMLElement;
	
	// the element that you'd like the effects from scrolling the scrollElement applied 
	// to; essentially the element that moves as you scroll
	parallaxElement?: HTMLElement;
	
	// what you want to call it to find the particular instance of it if you need to debug
	name?: string;
	
	// optional callback function for additional actions during scaling
	cb?(): void;
	
	// arguments for optional callback entered into an array; for context-specific 
	cb_args?: any[];
	
	// callback context in the case where the callback is context-specific
	cb_context?: any;
}

@Directive({
    selector: '[parallax]'
})

class Parallax implements OnInit {
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


export { Parallax, ParallaxConfig };
