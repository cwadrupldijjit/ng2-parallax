declare class Parallax {
	name: string;
	
    config: ParallaxConfig;
	// the following properties are all part of the config object, which for 
	// brevity's sake, you can do a bunch of operations in bulk by passing 
	// in the config object; caveat for this is that angular 2 won't permit 
	// more than 9 keys being passed in an object via the template
    cssKey: string;
	parallaxCss: string;
	parallaxAxis: string;
    parallaxRatio: number;
    parallaxInitVal: number;
	parallaxIf: any;
	scrollerId: string;
	maxValue: number;
	minValue: number;
	cssUnit: string;
	cb():void;
	cb_context: any;
	cb_args: any[];
	
	parallaxStyles: {};
	
    private cssValue: string;
    private isSpecialVal: boolean;
	
	private hostElement: HTMLElement;
	scrollElement: any;
	parallaxElement: HTMLElement;
	
	private evaluateScroll(): void;
}

declare interface ParallaxConfig {
	// the css property (converted to camelCase) that you want changed along with the
	// value you want to assign to the css key; you should use ParallaxCss if you're 
	// just defining one property without special values
	cssKey?: string;
	
	// this is used to define the css property you'd like to modify as you scroll
	// default is backgroundPositionY
	parallaxCss?: string;
	
	// ratio defining how fast, slow, or the direction of the changes on scrolling
	parallaxRatio?: number;
	
	// this is the initial value in pixels for the parallaxCss property you defined
	// before or, if you didn't define one, it defaults to 0
	parallaxInitVal?: number;
	
	// use this if you want the parallax effect only if the passed in statement is 
	// truthy; default is boolean true
	parallaxIf?: any;
	
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

export { Parallax, ParallaxConfig };