import { Component,
		 View } from 'angular2/core';
import { Parallax,
		 ParallaxConfig } from './parallax.directive';

@Component({
	selector: 'app',
})
@View({
	template: '<div parallax></div>',
	directives: [
		Parallax
	]
})
class AppComponent {
	constructor() {}
}

export { AppComponent };