// ng2-parallax
System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Parallax;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Parallax = (function () {
                function Parallax(element) {
                    var _this = this;
                    this.name = 'parallaxDirective';
                    // the following @Inputs are all part of the config object, which for 
                    // brevity's sake, you can do a bunch of operations in bulk by passing 
                    // in the config object; caveat for this is that angular 2 won't permit 
                    // more than 9 keys being passed in an object via the template
                    this.cssKey = 'backgroundPosition';
                    this.parallaxCss = 'backgroundPositionY';
                    this.parallaxAxis = 'Y';
                    this.parallaxRatio = -.7;
                    this.parallaxInitVal = 0;
                    this.parallaxIf = true;
                    this.cssUnit = 'px';
                    this.cb_context = null;
                    this.cb_args = [];
                    this.parallaxStyles = {};
                    this.isSpecialVal = false;
                    this.evaluateScroll = function () {
                        if (_this.parallaxIf) {
                            var resultVal = void 0;
                            var calcVal = void 0;
                            if (_this.scrollElement instanceof Window)
                                calcVal = _this.scrollElement.scrollY * _this.parallaxRatio + _this.parallaxInitVal;
                            else
                                calcVal = _this.scrollElement.scrollTop * _this.parallaxRatio + _this.parallaxInitVal;
                            if (_this.maxValue !== undefined && calcVal >= _this.maxValue)
                                calcVal = _this.maxValue;
                            else if (_this.minValue !== undefined && calcVal <= _this.minValue)
                                calcVal = _this.minValue;
                            // added after realizing original setup wasn't compatible in Firefox
                            // debugger;
                            if (_this.cssKey === 'backgroundPosition') {
                                if (_this.parallaxAxis === 'X') {
                                    resultVal = calcVal + _this.cssUnit + ' 0';
                                }
                                else {
                                    resultVal = '0 ' + calcVal + _this.cssUnit;
                                }
                            }
                            else if (_this.isSpecialVal) {
                                resultVal = _this.cssValue + '(' + calcVal + _this.cssUnit + ')';
                            }
                            else {
                                resultVal = calcVal + _this.cssUnit;
                            }
                            if (_this.cb) {
                                // console.log('this should be running')
                                _this.cb.apply(_this.cb_context, _this.cb_args);
                            }
                            _this.parallaxElement.style[_this.cssKey] = resultVal;
                        }
                    };
                    this.hostElement = element.nativeElement;
                }
                Parallax.prototype.ngOnInit = function () {
                    var cssValArray;
                    // console.log('%s initialized on element', this.name, this.hostElement);
                    // console.log(this);
                    for (var prop in this.config) {
                        this[prop] = this.config[prop];
                    }
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
                    if (!this.cssValue)
                        this.cssValue = this.cssKey;
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
                                    throw ("The ID passed through the parallaxConfig ('" + this.scrollerId + "') object was not found in the document.  Defaulting to tracking the scrolling of the window.");
                            }
                            catch (e) {
                                console.warn(e);
                                this.scrollElement = window;
                            }
                        }
                        else
                            this.scrollElement = window;
                    }
                    this.evaluateScroll();
                    this.scrollElement.addEventListener('scroll', this.evaluateScroll.bind(this));
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "config", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "cssKey", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "parallaxCss", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "parallaxAxis", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Parallax.prototype, "parallaxRatio", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Parallax.prototype, "parallaxInitVal", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "parallaxIf", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "scrollerId", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Parallax.prototype, "maxValue", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Parallax.prototype, "minValue", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "cssUnit", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "cb", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "cb_context", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], Parallax.prototype, "cb_args", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "scrollElement", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', HTMLElement)
                ], Parallax.prototype, "parallaxElement", void 0);
                Parallax = __decorate([
                    core_1.Directive({
                        selector: '[parallax]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Parallax);
                return Parallax;
            }());
            exports_1("Parallax", Parallax);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL3BhcmFsbGF4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2RWY7Z0JBb0hJLGtCQUFZLE9BQW1CO29CQXBIbkMsaUJBdUhDO29CQXRIQSxTQUFJLEdBQVcsbUJBQW1CLENBQUM7b0JBR25DLHNFQUFzRTtvQkFDdEUsdUVBQXVFO29CQUN2RSx3RUFBd0U7b0JBQ3hFLDhEQUE4RDtvQkFDbEQsV0FBTSxHQUFXLG9CQUFvQixDQUFDO29CQUN6QyxnQkFBVyxHQUFXLHFCQUFxQixDQUFDO29CQUM1QyxpQkFBWSxHQUFXLEdBQUcsQ0FBQztvQkFDeEIsa0JBQWEsR0FBVyxDQUFDLEVBQUUsQ0FBQztvQkFDNUIsb0JBQWUsR0FBVyxDQUFDLENBQUM7b0JBQy9CLGVBQVUsR0FBUSxJQUFJLENBQUM7b0JBSXZCLFlBQU8sR0FBVyxJQUFJLENBQUM7b0JBRXZCLGVBQVUsR0FBUSxJQUFJLENBQUM7b0JBQ3ZCLFlBQU8sR0FBVSxFQUFFLENBQUM7b0JBRTdCLG1CQUFjLEdBQU8sRUFBRSxDQUFDO29CQUdiLGlCQUFZLEdBQVksS0FBSyxDQUFDO29CQU1qQyxtQkFBYyxHQUFHO3dCQUN4QixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs0QkFDckIsSUFBSSxTQUFTLFNBQVEsQ0FBQzs0QkFDdEIsSUFBSSxPQUFPLFNBQVEsQ0FBQzs0QkFFcEIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGFBQWEsWUFBWSxNQUFNLENBQUM7Z0NBQ3hDLE9BQU8sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUM7NEJBQ2xGLElBQUk7Z0NBQ0gsT0FBTyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FB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ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG5nMi1wYXJhbGxheFxuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIFxuXHRcdCBFbGVtZW50UmVmLCBcblx0XHQgSG9zdCwgXG5cdFx0IElucHV0LFxuXHRcdCBPcHRpb25hbCwgXG5cdFx0IE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG4vKiBcblRoZXNlIGFyZSBvcHRpb25hbCB2YWx1ZXMgeW91IGNhbiBpbmNsdWRlIGluIHRoZSBjb25maWcgb2JqZWN0IHlvdSBjYW4gcGFzcyBpbnRvIHRoZSBcbmRpcmVjdGl2ZSBmb3IgY3VzdG9tIHByb3BlcnRpZXMgeW91IHdhbnQgdG8gdXNlIHRoaXMgd2l0aC4gIFRoaXMgdG9vbCBjYW4gYmUgdXNlZCBmb3IgXG5tb3JlIHRoYW4ganVzdCB0aGUgcGFyYWxsYXggZWZmZWN0LCBhbmQgaXQgaXMgYWJsZSB0byB0cmFuc2Zvcm0gYW55dGhpbmcgYWJvdXQgdGhlIFxuW3BhcmFsbGF4RWxlbWVudF0gdGhhdCB5b3Ugd2FudCB0byBoYXZlIGJvdW5kIHRvIHRoZSBzY3JvbGxpbmcgb2YgdGhlIG5lc3RlZCBlbGVtZW50LiAgXG5cbiovXG5pbnRlcmZhY2UgUGFyYWxsYXhDb25maWcge1xuXHQvLyB0aGUgY3NzIHByb3BlcnR5IChjb252ZXJ0ZWQgdG8gY2FtZWxDYXNlKSB0aGF0IHlvdSB3YW50IGNoYW5nZWQgYWxvbmcgd2l0aCB0aGVcblx0Ly8gdmFsdWUgeW91IHdhbnQgdG8gYXNzaWduIHRvIHRoZSBjc3Mga2V5OyB5b3Ugc2hvdWxkIHVzZSBQYXJhbGxheENzcyBpZiB5b3UncmUgXG5cdC8vIGp1c3QgZGVmaW5pbmcgb25lIHByb3BlcnR5IHdpdGhvdXQgc3BlY2lhbCB2YWx1ZXNcblx0Y3NzS2V5Pzogc3RyaW5nO1xuXHRcblx0Ly8gdGhpcyBpcyB1c2VkIHRvIGRlZmluZSB0aGUgY3NzIHByb3BlcnR5IHlvdSdkIGxpa2UgdG8gbW9kaWZ5IGFzIHlvdSBzY3JvbGxcblx0Ly8gZGVmYXVsdCBpcyBiYWNrZ3JvdW5kUG9zaXRpb25ZXG5cdHBhcmFsbGF4Q3NzPzogc3RyaW5nO1xuXHRcblx0Ly8gcmF0aW8gZGVmaW5pbmcgaG93IGZhc3QsIHNsb3csIG9yIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGNoYW5nZXMgb24gc2Nyb2xsaW5nXG5cdHBhcmFsbGF4UmF0aW8/OiBudW1iZXI7XG5cdFxuXHQvLyB0aGlzIGlzIHRoZSBpbml0aWFsIHZhbHVlIGluIHBpeGVscyBmb3IgdGhlIHBhcmFsbGF4Q3NzIHByb3BlcnR5IHlvdSBkZWZpbmVkXG5cdC8vIGJlZm9yZSBvciwgaWYgeW91IGRpZG4ndCBkZWZpbmUgb25lLCBpdCBkZWZhdWx0cyB0byAwXG5cdHBhcmFsbGF4SW5pdFZhbD86IG51bWJlcjtcblx0XG5cdC8vIHVzZSB0aGlzIGlmIHlvdSB3YW50IHRoZSBwYXJhbGxheCBlZmZlY3Qgb25seSBpZiB0aGUgcGFzc2VkIGluIHN0YXRlbWVudCBpcyBcblx0Ly8gdHJ1dGh5OyBkZWZhdWx0IGlzIGJvb2xlYW4gdHJ1ZVxuXHRwYXJhbGxheElmPzogYW55O1xuXHRcblx0Ly8gdGhlIGlkIGZvciB0aGUgZWxlbWVudCBvbiB0aGUgcGFnZSB5b3UnZCBsaWtlIHRvIHRyYWNrIHRoZSBzY3JvbGxpbmcgb2YgaW4gdGhlIFxuXHQvLyBjYXNlIHdoZXJlIHRoZSBlbGVtZW50IGlzIG5vdCBhdmFpbGFibGUgaW4gdGhlIGN1cnJlbnQgY29tcG9uZW50OyBcblx0Ly8gaWYgbm8gaWQgaXMgZGVmaW5lZCBhbG9uZyB3aXRoIG5vIHNjcm9sbEVsZW1lbnQgYmVsb3csIFxuXHQvLyBpdCBkZWZhdWx0cyB0byB0aGUgc2Nyb2xsaW5nIG9mIHRoZSBib2R5XG5cdHNjcm9sbGVySWQ/OiBzdHJpbmc7XG5cdFxuXHQvLyB0aGUgdXBwZXIgY29uc3RyYWludCBmb3IgdGhlIGNzcyB0cmFuc2Zvcm1hdGlvblxuXHRtYXhWYWx1ZT86IG51bWJlcjtcblx0XG5cdC8vIHRoZSBsb3dlciBjb25zdHJhaW50IGZvciB0aGUgY3NzIHRyYW5zZm9ybWF0aW9uXG5cdG1pblZhbHVlPzogbnVtYmVyO1xuXHRcblx0Ly8gdGhlIHVuaXQgKGUuZy4gJ3B4JywgJ2VtJywgJyUnLCAndmgnLCBldGMuKSB5b3Ugd2FudCBmb3IgdGhlIHBhcmFsbGF4IGVmZmVjdCB0byB1c2UgXG5cdGNzc1VuaXQ/OiBzdHJpbmc7XG5cdFxuXHQvLyB0aGUgZWxlbWVudCBpbiB0aGUgY3VycmVudCBjb21wb25lbnQgdGhhdCB5b3UnZCBsaWtlIHRoZSBkaXJlY3RpdmUgdG8gdHJhY2sgaXRzIFxuXHQvLyBwb3NpdGlvbiBhcyBpdCBzY3JvbGxzOyAgZ2V0cyBhc3NpZ25lZCB0byB0aGUgYm9keSBpZiBub3RoaW5nIGlzIGRlZmluZWRcblx0c2Nyb2xsRWxlbWVudD86IEhUTUxFbGVtZW50O1xuXHRcblx0Ly8gdGhlIGVsZW1lbnQgdGhhdCB5b3UnZCBsaWtlIHRoZSBlZmZlY3RzIGZyb20gc2Nyb2xsaW5nIHRoZSBzY3JvbGxFbGVtZW50IGFwcGxpZWQgXG5cdC8vIHRvOyBlc3NlbnRpYWxseSB0aGUgZWxlbWVudCB0aGF0IG1vdmVzIGFzIHlvdSBzY3JvbGxcblx0cGFyYWxsYXhFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG5cdFxuXHQvLyB3aGF0IHlvdSB3YW50IHRvIGNhbGwgaXQgdG8gZmluZCB0aGUgcGFydGljdWxhciBpbnN0YW5jZSBvZiBpdCBpZiB5b3UgbmVlZCB0byBkZWJ1Z1xuXHRuYW1lPzogc3RyaW5nO1xuXHRcblx0Ly8gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgYWN0aW9ucyBkdXJpbmcgc2NhbGluZ1xuXHRjYj8oKTogdm9pZDtcblx0XG5cdC8vIGFyZ3VtZW50cyBmb3Igb3B0aW9uYWwgY2FsbGJhY2sgZW50ZXJlZCBpbnRvIGFuIGFycmF5OyBmb3IgY29udGV4dC1zcGVjaWZpYyBcblx0Y2JfYXJncz86IGFueVtdO1xuXHRcblx0Ly8gY2FsbGJhY2sgY29udGV4dCBpbiB0aGUgY2FzZSB3aGVyZSB0aGUgY2FsbGJhY2sgaXMgY29udGV4dC1zcGVjaWZpY1xuXHRjYl9jb250ZXh0PzogYW55O1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twYXJhbGxheF0nXG59KVxuXG5jbGFzcyBQYXJhbGxheCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdG5hbWU6IHN0cmluZyA9ICdwYXJhbGxheERpcmVjdGl2ZSc7XG5cdFxuICAgIEBJbnB1dCgpIGNvbmZpZzogUGFyYWxsYXhDb25maWc7XG5cdC8vIHRoZSBmb2xsb3dpbmcgQElucHV0cyBhcmUgYWxsIHBhcnQgb2YgdGhlIGNvbmZpZyBvYmplY3QsIHdoaWNoIGZvciBcblx0Ly8gYnJldml0eSdzIHNha2UsIHlvdSBjYW4gZG8gYSBidW5jaCBvZiBvcGVyYXRpb25zIGluIGJ1bGsgYnkgcGFzc2luZyBcblx0Ly8gaW4gdGhlIGNvbmZpZyBvYmplY3Q7IGNhdmVhdCBmb3IgdGhpcyBpcyB0aGF0IGFuZ3VsYXIgMiB3b24ndCBwZXJtaXQgXG5cdC8vIG1vcmUgdGhhbiA5IGtleXMgYmVpbmcgcGFzc2VkIGluIGFuIG9iamVjdCB2aWEgdGhlIHRlbXBsYXRlXG4gICAgQElucHV0KCkgY3NzS2V5OiBzdHJpbmcgPSAnYmFja2dyb3VuZFBvc2l0aW9uJztcblx0QElucHV0KCkgcGFyYWxsYXhDc3M6IHN0cmluZyA9ICdiYWNrZ3JvdW5kUG9zaXRpb25ZJztcblx0QElucHV0KCkgcGFyYWxsYXhBeGlzOiBzdHJpbmcgPSAnWSc7XG4gICAgQElucHV0KCkgcGFyYWxsYXhSYXRpbzogbnVtYmVyID0gLS43O1xuICAgIEBJbnB1dCgpIHBhcmFsbGF4SW5pdFZhbDogbnVtYmVyID0gMDtcblx0QElucHV0KCkgcGFyYWxsYXhJZjogYW55ID0gdHJ1ZTtcblx0QElucHV0KCkgc2Nyb2xsZXJJZDogc3RyaW5nO1xuXHRASW5wdXQoKSBtYXhWYWx1ZTogbnVtYmVyO1xuXHRASW5wdXQoKSBtaW5WYWx1ZTogbnVtYmVyO1xuXHRASW5wdXQoKSBjc3NVbml0OiBzdHJpbmcgPSAncHgnO1xuXHRASW5wdXQoKSBjYjtcblx0QElucHV0KCkgY2JfY29udGV4dDogYW55ID0gbnVsbDtcblx0QElucHV0KCkgY2JfYXJnczogYW55W10gPSBbXTtcblx0XG5cdHBhcmFsbGF4U3R5bGVzOiB7fSA9IHt9O1xuXHRcbiAgICBwcml2YXRlIGNzc1ZhbHVlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBpc1NwZWNpYWxWYWw6IGJvb2xlYW4gPSBmYWxzZTtcblx0XG5cdHByaXZhdGUgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXHRASW5wdXQoKSBzY3JvbGxFbGVtZW50OiBhbnk7XG5cdEBJbnB1dCgpIHBhcmFsbGF4RWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cdFxuXHRwcml2YXRlIGV2YWx1YXRlU2Nyb2xsID0gKCkgPT4ge1xuXHRcdGlmICh0aGlzLnBhcmFsbGF4SWYpIHtcblx0XHRcdGxldCByZXN1bHRWYWw6IHN0cmluZztcblx0XHRcdGxldCBjYWxjVmFsOiBudW1iZXI7XG5cdFx0XHRcblx0XHRcdGlmICh0aGlzLnNjcm9sbEVsZW1lbnQgaW5zdGFuY2VvZiBXaW5kb3cpXG5cdFx0XHRcdGNhbGNWYWwgPSB0aGlzLnNjcm9sbEVsZW1lbnQuc2Nyb2xsWSAqIHRoaXMucGFyYWxsYXhSYXRpbyArIHRoaXMucGFyYWxsYXhJbml0VmFsO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRjYWxjVmFsID0gdGhpcy5zY3JvbGxFbGVtZW50LnNjcm9sbFRvcCAqIHRoaXMucGFyYWxsYXhSYXRpbyArIHRoaXMucGFyYWxsYXhJbml0VmFsO1xuXHRcdFx0XG5cdFx0XHRpZiAodGhpcy5tYXhWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGNhbGNWYWwgPj0gdGhpcy5tYXhWYWx1ZSlcblx0XHRcdFx0Y2FsY1ZhbCA9IHRoaXMubWF4VmFsdWU7XG5cdFx0XHRlbHNlIGlmICh0aGlzLm1pblZhbHVlICE9PSB1bmRlZmluZWQgJiYgY2FsY1ZhbCA8PSB0aGlzLm1pblZhbHVlKVxuXHRcdFx0XHRjYWxjVmFsID0gdGhpcy5taW5WYWx1ZTtcblx0XHRcdFxuXHRcdFx0Ly8gYWRkZWQgYWZ0ZXIgcmVhbGl6aW5nIG9yaWdpbmFsIHNldHVwIHdhc24ndCBjb21wYXRpYmxlIGluIEZpcmVmb3hcblx0XHRcdC8vIGRlYnVnZ2VyO1xuXHRcdFx0aWYgKHRoaXMuY3NzS2V5ID09PSAnYmFja2dyb3VuZFBvc2l0aW9uJykge1xuXHRcdFx0XHRpZiAodGhpcy5wYXJhbGxheEF4aXMgPT09ICdYJykge1xuXHRcdFx0XHRcdHJlc3VsdFZhbCA9IGNhbGNWYWwgKyB0aGlzLmNzc1VuaXQgKyAnIDAnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc3VsdFZhbCA9ICcwICcgKyBjYWxjVmFsICsgdGhpcy5jc3NVbml0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuaXNTcGVjaWFsVmFsKSB7XG5cdFx0XHRcdHJlc3VsdFZhbCA9IHRoaXMuY3NzVmFsdWUgKyAnKCcgKyBjYWxjVmFsICsgdGhpcy5jc3NVbml0ICsgJyknO1xuXHRcdFx0fSBlbHNlIHsgXG5cdFx0XHRcdHJlc3VsdFZhbCA9IGNhbGNWYWwgKyB0aGlzLmNzc1VuaXQ7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmICh0aGlzLmNiKSB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCd0aGlzIHNob3VsZCBiZSBydW5uaW5nJylcblx0XHRcdFx0dGhpcy5jYi5hcHBseSh0aGlzLmNiX2NvbnRleHQsIHRoaXMuY2JfYXJncyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRoaXMucGFyYWxsYXhFbGVtZW50LnN0eWxlW3RoaXMuY3NzS2V5XSA9IHJlc3VsdFZhbDtcblx0XHR9XG5cdH1cblx0XG5cdG5nT25Jbml0KCkge1xuXHRcdGxldCBjc3NWYWxBcnJheTogc3RyaW5nW107XG5cdFx0XG5cdFx0Ly8gY29uc29sZS5sb2coJyVzIGluaXRpYWxpemVkIG9uIGVsZW1lbnQnLCB0aGlzLm5hbWUsIHRoaXMuaG9zdEVsZW1lbnQpO1xuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuXHRcdFxuXHRcdGZvciAobGV0IHByb3AgaW4gdGhpcy5jb25maWcpIHsgdGhpc1twcm9wXSA9IHRoaXMuY29uZmlnW3Byb3BdOyB9XG5cdFx0dGhpcy5wYXJhbGxheENzcyA9IHRoaXMucGFyYWxsYXhDc3MgPyB0aGlzLnBhcmFsbGF4Q3NzIDogJ2JhY2tncm91bmRQb3NpdGlvblknO1xuXHRcdGlmICh0aGlzLnBhcmFsbGF4Q3NzLm1hdGNoKC9iYWNrZ3JvdW5kUG9zaXRpb24vaSkpIHtcblx0XHRcdGlmICh0aGlzLnBhcmFsbGF4Q3NzLnNwbGl0KCdiYWNrZ3JvdW5kUG9zaXRpb24nKVsxXS50b1VwcGVyQ2FzZSgpID09PSAnWCcpIHtcblx0XHRcdFx0dGhpcy5wYXJhbGxheEF4aXMgPSAnWCc7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRoaXMucGFyYWxsYXhDc3MgPSAnYmFja2dyb3VuZFBvc2l0aW9uJztcblx0XHR9XG5cdFx0XG4gICAgICAgIGNzc1ZhbEFycmF5ID0gdGhpcy5wYXJhbGxheENzcy5zcGxpdCgnOicpO1xuICAgICAgICB0aGlzLmNzc0tleSA9IGNzc1ZhbEFycmF5WzBdO1xuICAgICAgICB0aGlzLmNzc1ZhbHVlID0gY3NzVmFsQXJyYXlbMV07XG5cdFx0XG4gICAgICAgIHRoaXMuaXNTcGVjaWFsVmFsID0gdGhpcy5jc3NWYWx1ZSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLmNzc1ZhbHVlKSB0aGlzLmNzc1ZhbHVlID0gdGhpcy5jc3NLZXk7XG5cdFx0XG4gICAgICAgIHRoaXMucGFyYWxsYXhSYXRpbyA9ICt0aGlzLnBhcmFsbGF4UmF0aW87XG4gICAgICAgIHRoaXMucGFyYWxsYXhJbml0VmFsID0gK3RoaXMucGFyYWxsYXhJbml0VmFsO1xuXHRcdFxuXHRcdHRoaXMucGFyYWxsYXhFbGVtZW50ID0gdGhpcy5wYXJhbGxheEVsZW1lbnQgfHwgdGhpcy5ob3N0RWxlbWVudDtcblx0XHRpZiAoIXRoaXMuc2Nyb2xsRWxlbWVudCkge1xuXHRcdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJhbGxheFNjcm9sbCcpKVxuXHRcdFx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyYWxsYXhTY3JvbGwnKTtcblx0XHRcdGVsc2UgaWYgKHRoaXMuc2Nyb2xsZXJJZCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc2Nyb2xsZXJJZCk7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLnNjcm9sbEVsZW1lbnQpXG5cdFx0XHRcdFx0XHR0aHJvdyhgVGhlIElEIHBhc3NlZCB0aHJvdWdoIHRoZSBwYXJhbGxheENvbmZpZyAoJyR7dGhpcy5zY3JvbGxlcklkfScpIG9iamVjdCB3YXMgbm90IGZvdW5kIGluIHRoZSBkb2N1bWVudC4gIERlZmF1bHRpbmcgdG8gdHJhY2tpbmcgdGhlIHNjcm9sbGluZyBvZiB0aGUgd2luZG93LmApO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oZSk7XG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxFbGVtZW50ID0gd2luZG93O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgdGhpcy5zY3JvbGxFbGVtZW50ID0gd2luZG93O1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmV2YWx1YXRlU2Nyb2xsKCk7XG5cdFx0XG5cdFx0dGhpcy5zY3JvbGxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZXZhbHVhdGVTY3JvbGwuYmluZCh0aGlzKSk7XG5cdH1cblx0XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuXHRcdHRoaXMuaG9zdEVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7IFBhcmFsbGF4LCBQYXJhbGxheENvbmZpZyB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
