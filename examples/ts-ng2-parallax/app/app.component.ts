import { Component,
		 View } from 'angular2/core';
import { Parallax,
		 ParallaxConfig } from './parallax.directive';

@Component({
	selector: 'app',
})
@View({
	template: `
		<div>This is working, right?</div>
		<div parallax></div>
	`,
	directives: [
		Parallax
	]
})
class AppComponent {
	constructor() {}
}

export { AppComponent };