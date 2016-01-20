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
	parallaxFn(color: string, maxVal: number = 250, minVal: number = 0, otherValue: number = 0) {
		let defaultVals: string[] = ['r', 'g', 'b', 'all'],
			result = 'rgb(';
		if (defaultVals.indexOf(color.toLowerCase()) !== -1) {
			if (minVal < 0)
				minVal = 0;
			if (maxVal > 250)
				maxVal = 250;
			
			let newValue = Math.round(Math.random() * maxVal);
			
			if (newValue < minVal)
				newValue = minVal;
			else if (newValue > maxVal)
				newValue = maxVal;
			
			if (color.toLowerCase() == 'r') {
				result += newValue + ',' + otherValue + ',' + otherValue + ')';
			} else if (color.toLowerCase() == 'g') {
				result += otherValue + ',' + newValue + ',' + otherValue + ')';
			} else if (color.toLowerCase() == 'b') {
				result += otherValue + ',' + otherValue + ',' + newValue + ')';
			} else {
				result += newValue + ',' + newValue + ',' + newValue + ')'
			}
			
			this.style.backgroundColor = result;
			
			if (newValue < 70)
				this.style.color = 'white';
			else this.style.color = 'black';
		} else {
			try {
				throw ('The color entered as a cb argument is incorrect it must be a value found in defaultVals')
			} catch(e) {
				console.warn(e);
			}
		}
	};
	
	constructor() {};
}

export { AppComponent };