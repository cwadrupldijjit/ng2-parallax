/**
 * @class Parallax
 * 
 * Declaring Parallax class so that it's importable in the local code
 */
declare class Parallax { }

/**
 * @var {Object} ParallaxConfig
 * 
 * This is useful in defining the parallax configuration from the component itself
 */
declare interface ParallaxConfig {
	/**
	 * @prop {string} cssKey
	 * 
	 * The camelCase css property (that is used on the parallaxElement's style property)
	 * that you want changed along with the value you want to change it to.  This is a more
	 * advanced version of the cssProperty key, and generally isn't used unless there are
	 * special values you need to use it with.
	 */
	cssKey?: string;
	
	/**
	 * @prop {string} cssProperty
	 * 
	 * this is used to define the css property you'd like to modify as you scroll
	 * default is backgroundPositionY
	 */
	cssProperty?: string;
	
	/**
	 * @prop {number} ratio
	 * 
	 * ratio describing the magnitude of changes made upon scrolling
	 */
	ratio?: number;
	
	/**
	 * @prop {string} axis
	 * 
	 * This is used to determine whether or not the parallax movement will be horizontal
	 * or vertical.  Defaults to 'Y'.
	 */
	axis?: 'X'|'Y';
	
	// this is the initial value in pixels for the parallaxCss property you defined
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

export { Parallax, ParallaxConfig };