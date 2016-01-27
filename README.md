# ng2-parallax
A parallax plugin/directive for Angular 2

You can use this directive right now if you write Angular 2 code using SystemJS to import/export files, or at the very least you write it in Typescript.  ES5 and Dart versions are not yet complete/started, but as demand grows for those as well as the documentation gets updated, those versions will be made available.


### Installation of files
In order to install this plugin, you can do one of a few things:

1. From your command line, type:
```
git clone https://github.com/cwadrupldijjit/ng2-parallax
```

2. Copy code from [the file itself](https://raw.githubusercontent.com/cwadrupldijjit/ng2-parallax/master/examples/ts-ng2-parallax/app/parallax.directive.ts)

The plan is to publish this component on npm as ng2-parallax, but it's undergoing some testing and feedback before that happens.

In any case, copy/create the file in a convenient place to reference your ng2 directives in your working file system, and reference however you need to have it be available in the rest of your application.  For TypeScript, you can import it like so:

```typescript
import { Component,
		 View } from 'angular2/core';
import { Parallax,
		 ParallaxConfig } from './path/to/directives/parallax.directive';
```

If you import both Parallax and ParallaxConfig, you can get some typings for the parallaxConfig object you can define in your component's class so that error checking is available for that object.  You'll see how to implement that shortly.

In order to get your component to recognize it, you need to add it to your component's annotations like so:

```typescript
@Component({
	selector: 'my-app',
	templateUrl: `./path/to/template.html`,
	directives: [
		Parallax
	]
})
```
Or:
```typescript
@Component({
	selector: 'my-app'
})
@View({
	templateUrl: `./path/to/template.html`,
	directives: [
		Parallax
	]
})
class MyComponent {}
```

You can then use the directive anywhere within that component itself by sticking it on any element you've put in your template like so:
```html
<h1>Welcome to my website!</h1>

<div parallax></div>
```

This plugin assumes you've added styling to the element you've put the "parallax" attribute onto, like height, width, and background-image.  If you'd like to override any of the default settings for the parallax directive when you'd like to customize the functionality.  One way you can do that is by passing in a `[config]` object through the HTML.

```html
<div parallax [config]="{parallaxInitVal: -100, parallaxRatio: .7}"></div>
```

For more specific information, refer to the examples found at the [project page](http://cwadrupldijjit.com/ng2-parallax), or in the examples folder for the version of the plugin you'd like to use, which you can access when you've cloned or downloaded the project. **Currently, only the TypeScript version works.  The JS version is under development and the Dart version will happen later, when demand is up for it** (or when it's requested and I have time to learn Dart or someone helps to contribute to that version... :P).

Any feedback is much appreciated.  Log issues, send pull requests, you know the drill.

Thanks for showing interest in this project and hope you enjoy it!
