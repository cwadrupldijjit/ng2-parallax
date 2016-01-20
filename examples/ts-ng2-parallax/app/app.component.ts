import { Component,
		 View } from 'angular2/core';
import { Parallax,
		 ParallaxConfig } from './parallax.directive';

@Component({
	selector: 'app',
})
@View({
	templateUrl: 'app/app.html',
	directives: [
		Parallax
	]
})
class AppComponent {
	constructor() {}
}

export { AppComponent };