/* global ng */
// ng2-parallax

/* 
These are optional values you can include in the config object you can pass into the 
directive for custom properties you want to use this with.  This tool can be used for 
more than just the parallax effect, and it is able to transform anything about the 
[parallaxElement] that you want to have bound to the scrolling of the nested element.  


cssKey: string;
  - the css property (converted to camelCase) that you want changed along with the
  - value you want to assign to the css key; you should use ParallaxCss if you're 
  - just defining one property without special values

parallaxCss: string;
  - this is used to define the css property you'd like to modify as you scroll
  - default is backgroundPositionY

parallaxRatio: number;
  - ratio defining how fast, slow, or the direction of the changes on scrolling

parallaxInitVal: number;
  - this is the initial value in pixels for the parallaxCss property you defined
  - before or, if you didn't define one, it defaults to 0

parallaxIf: any;
  - use this if you want the parallax effect only if the passed in statement is 
  - truthy; default is boolean true

scrollerId: string;
  - the id for the element on the page you'd like to track the scrolling of in the 
  - case where the element is not available in the current component; 
  - if no id is defined along with no scrollElement below, 
  - it defaults to the scrolling of the body

maxValue: number;
  - the upper constraint for the css transformation

minValue: number;
  - the lower constraint for the css transformation

cssUnit: string;
  - the unit (e.g. 'px', 'em', '%', 'vh', etc.) you want for the parallax effect to use 

scrollElement: HTMLElement;
  - the element in the current component that you'd like the directive to track its 
  - position as it scrolls;  gets assigned to the body if nothing is defined

parallaxElement: HTMLElement;
  - the element that you'd like the effects from scrolling the scrollElement applied 
  - to; essentially the element that moves as you scroll

instanceName: string;
  - what you want to call it to find the particular instance of it if you need to debug
  - more verbose as Angular has reserved the key 'name'

cb: void;
  - optional callback function for additional actions during scaling

cb_args: any[];
  - arguments for optional callback entered into an array; for context-specific 

cb_context: any;
  - callback context in the case where the callback is context-specific
*/


(function(app) {
	app.Parallax = new ng.core.Class({
		constructor: function Parallax() {
			// console.log(ng.core.Inject(new ng.core.ElementRef()))
			
			this.instanceName = 'parallaxDirective';
			
			this.config = {};
			
				this.parallaxStyles = {};
				this.cssKey = 'backgroundPosition';
				this.parallaxCss = 'backgroundPositionY';
				this.parallaxAxis = 'Y';
				this.parallaxRatio = -.7;
				this.parallaxInitVal = 0;
				this.parallaxIf = true;
				this.scrollerId = '';
				this.maxValue = undefined;
				this.minValue = undefined;
				this.cssUnit = 'px';
				this.cb = null;
				this.cb_context = null;
				this.cb_args = [];
				
				// this.hostElement = new ng.core.ElementRef(); 
				// // This ^^^ shouldn't be modified; it is here so 
				// // I can initialize parallaxElement
				// this.hostElement = this.hostElement.nativeElement;
				// debugger;
				// this.parallaxElement = this.hostElement;
				this.scrollElement = [];
			
			this.cssValue = '';
			this.isSpecialValue = false;
			
			// console.log(this.hostElement);
		},
		
		ngOnInit: function ngOnInit() {
			var cssValArray;
			
			// console.log('%s initialized on element', this.instanceName, this.hostElement);
			console.log(this);
			
			for (var prop in this.config) { this[prop] = this.config[prop]; }
			this.parallaxCss = this.parallaxCss ? this.parallaxCss : 'backgroundPositionY';
			if (this.parallaxCss.match(/backgroundPosition/i)) {
				if (this.parallaxCss.split('backgroundPosition')[1].toUpperCase() === 'X') {
					this.parallaxAxis = 'X';
				}
				
				this.parallaxCss = 'backgroundPosition';
			}
			
			cssValArray = this.parallaxCss.split(':');
			this.cssKey = cssValArray[0];
			this.cssValue = cssValArray[1];
			
			this.isSpecialVal = this.cssValue ? true : false;
			if (!this.cssValue) this.cssValue = this.cssKey;
			
			this.parallaxRatio = +this.parallaxRatio;
			this.parallaxInitVal = +this.parallaxInitVal;
			
			this.parallaxElement = this.parallaxElement || this.hostElement;
			if (!this.scrollElement) {
				if (document.getElementById('parallaxScroll'))
					this.scrollElement = document.getElementById('parallaxScroll');
				else if (this.scrollerId) {
					try {
						this.scrollElement = document.getElementById(this.scrollerId);
						if (!this.scrollElement)
							throw(`The ID passed through the parallaxConfig ('${this.scrollerId}') object was not found in the document.  Defaulting to watch scrolling of the body.`);
					} catch(e) {
						console.warn(e);
						this.scrollElement = document.getElementsByTagName('body')[0];
					}
				} else this.scrollElement = document.getElementsByTagName('body')[0];
			}
			
			this.evaluateScroll();
			
			this.scrollElement.addEventListener('scroll', this.evaluateScroll);
		},
		
		evaluateScroll: function evaluateScroll() {
			if (this.parallaxIf) {
				var resultVal = '';
				var calcVal;
				
				calcVal = this.scrollElement.scrollTop * this.parallaxRatio + this.parallaxInitVal;
				
				if (this.maxValue !== undefined && calcVal >= this.maxValue)
					calcVal = this.maxValue;
				else if (this.minValue !== undefined && calcVal <= this.minValue)
					calcVal = this.minValue;
				
				// added after realizing original setup wasn't compatible in Firefox
				if (this.cssKey === 'backgroundPosition') {
					if (this.parallaxAxis === 'X') {
						resultVal = calcVal + this.cssUnit + ' 0';
					} else {
						resultVal = '0 ' + calcVal + this.cssUnit;
					}
				} else if (this.isSpecialVal) {
					resultVal = this.cssValue + '(' + calcVal + this.cssUnit + ')';
				} else { 
					resultVal = calcVal + this.cssUnit;
				}
				
				if (this.cb) {
					this.cb.apply(this.cb_context, this.cb_args);
				}
				
				this.parallaxElement.style[this.cssKey] = resultVal;
			}
		}
	})
	
	app.Parallax.annotations = [
		new ng.core.Directive({
			selector: '[parallax]',
			inputs: [
				'config',
				'cssKey',
				'parallaxCss',
				'parallaxAxis',
				'parallaxRatio',
				'parallaxInitVal',
				'parallaxIf',
				'scrollerId',
				'maxValue',
				'minValue',
				'cssUnit',
				'cb',
				'cb_context',
				'cb_args',
				'scrollElement',
				'parallaxElement'
			],
			providers: [
				
			]
		})
	];
})(window.app || (window.app = {}));