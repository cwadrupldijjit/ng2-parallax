# ng2-parallax
A parallax plugin/directive for Angular 2

You can use this directive right now if you write Angular 2 code using SystemJS to import/export files, or at the very least you write it in Typescript.  ES5 and Dart versions are not yet complete/started, but as demand grows for those as well as the documentation gets updated, those versions will be made available.


### Installation of files
In order to install this plugin, you can do one of a few things:

 - Install from npm:
```
npm install --save ng2-parallax
```

  - clone it from the project GitHub repository:
```
git clone https://github.com/cwadrupldijjit/ng2-parallax
```
**If you'd like to contribute, feel free to fork it.**

  - [Download the zip](http://github.com/cwadrupldijjit/ng2-parallax/zipball/master)
  
  - [Download the .tar.gz](http://github.com/cwadrupldijjit/ng2-parallax/tarball/master)
  
  - Copy code from [the file itself](https://raw.githubusercontent.com/cwadrupldijjit/ng2-parallax/master/examples/ts-ng2-parallax/app/parallax.directive.ts) (ts version)

If you have copied/created a version of the directive file (either `parallax.directive.ts` or `parallax.directive.js`), place the copy of the file in a convenient place to reference it in your working directory, and reference however you need to have it be available in the rest of your application.  

To reference it in your application, you can import it just like the rest of the Angular files and components.

#### Using the npm package:
**_For_ `System.js` _Users:_**

First, you have to register where the ng2-parallax is:
```html
<!-- index.html -->
<script>
    System.config({
        paths: {
            '/*': '/app/*',
            'ng2-parallax/*': '/node_modules/ng2-parallax/*' // <--- add this
        },
        packages: {
            app: {
                format: 'register',
                defaultExtension: 'js'
            },
            '/node_modules/ng2-parallax': { // <--- and this
                format: 'register',
                defaultExtension: js
            }
        }
    });
    
    System.import('/app/boot')
        .then(null, console.error.bind(console));
</script>
```

**_For_ `webpack` _Users_**:

_NOTE: Webpack isn't as straightforward as I'd assume with requiring node_modules such as the ng2-parallax, and as such, despite my efforts in figuring out what is preventing it from reading from node_modules, I've been unable to locate the source of the problem.  The direction below is just a temporary fix before we can get the situation straight with that one.  Any help to get that working fine with webpack would be greatly appreciated._

_If you have_ `npm install`_-ed the parallax directive, you will have to either figure out how to reference it without problems, or you could simply copy it into a subdirectory of your `app` or `src` folder where it's easily accessible, then follow the import directions in the "Using a local copy" section below._

And then you can import it just like the Angular 2 components:

```typescript
import { Component,
         View } from 'angular2/core';
import { Parallax,
        // either (for Systemjs)
         ParallaxConfig } from 'ng2-parallax/system';
        // or, if webpack is finding it fine:
         ParallaxConfig } from 'ng2-parallax/commonjs';
```

#### Using a local copy:
```typescript
import { Component,
         View } from 'angular2/core';
import { Parallax,
         ParallaxConfig } from './path/to/directives/parallax.directive';
```

If you import both Parallax and ParallaxConfig, you can get some IntelliSense or type verification help for the parallaxConfig object you can define in your component's class.  You'll see how to implement that shortly.

In order to get your component to recognize it, you need to add it to your component's annotations like so:

```typescript
@Component({
    selector: 'my-app',
    templateUrl: `./path/to/template.html`,
    directives: [
        Parallax  // <----- Right here
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
        Parallax  // <----- Right here
    ]
})
class MyComponent {}
```

You can then use the directive anywhere within that component itself by sticking it on any element you've put in your template like so:
```html
<h1>Welcome to my website!</h1>

<div parallax></div>
<!-- ^ here ^ -->
```

This plugin assumes you've added styling to the element you've put the "parallax" attribute onto, like height, width, and background-image.  If you'd like to override any of the default settings for the parallax directive when you'd like to customize the functionality.  One way you can do that is by passing in a `[config]` object through the HTML.

```html
<div parallax [config]="{parallaxInitVal: -100, parallaxRatio: .7}"></div>
```

For more specific information, refer to the examples found at the [project page](http://cwadrupldijjit.com/ng2-parallax/ts-examples), or in the examples folder for the version of the plugin you'd like to use, which you can access when you've cloned or downloaded the project. **Currently, only the TypeScript version works.  The JS version is under development and the Dart version will happen later, when demand is up for it** (or when it's requested and I have time to learn Dart or someone helps to contribute to that version... :P).

Any feedback is much appreciated.  Log issues, send pull requests, you know the drill.

Thanks for showing interest in this project and hope you enjoy it!
