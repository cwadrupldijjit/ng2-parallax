import { NgModule } from '@angular/core'
import { ParallaxDirective } from './parallax.directive'

@NgModule({
	declarations: [ParallaxDirective],
	exports: [ParallaxDirective]
})
export class ParallaxModule { }