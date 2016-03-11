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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmFsbGF4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2RWY7Z0JBb0hJLGtCQUFZLE9BQW1CO29CQXBIbkMsaUJBdUhDO29CQXRIQSxTQUFJLEdBQVcsbUJBQW1CLENBQUM7b0JBR25DLHNFQUFzRTtvQkFDdEUsdUVBQXVFO29CQUN2RSx3RUFBd0U7b0JBQ3hFLDhEQUE4RDtvQkFDbEQsV0FBTSxHQUFXLG9CQUFvQixDQUFDO29CQUN6QyxnQkFBVyxHQUFXLHFCQUFxQixDQUFDO29CQUM1QyxpQkFBWSxHQUFXLEdBQUcsQ0FBQztvQkFDeEIsa0JBQWEsR0FBVyxDQUFDLEVBQUUsQ0FBQztvQkFDNUIsb0JBQWUsR0FBVyxDQUFDLENBQUM7b0JBQy9CLGVBQVUsR0FBUSxJQUFJLENBQUM7b0JBSXZCLFlBQU8sR0FBVyxJQUFJLENBQUM7b0JBRXZCLGVBQVUsR0FBUSxJQUFJLENBQUM7b0JBQ3ZCLFlBQU8sR0FBVSxFQUFFLENBQUM7b0JBRTdCLG1CQUFjLEdBQU8sRUFBRSxDQUFDO29CQUdiLGlCQUFZLEdBQVksS0FBSyxDQUFDO29CQU1qQyxtQkFBYyxHQUFHO3dCQUN4QixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs0QkFDckIsSUFBSSxTQUFTLFNBQVEsQ0FBQzs0QkFDdEIsSUFBSSxPQUFPLFNBQVEsQ0FBQzs0QkFFcEIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGFBQWEsWUFBWSxNQUFNLENBQUM7Z0NBQ3hDLE9BQU8sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUM7NEJBQ2xGLElBQUk7Z0NBQ0gsT0FBTyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQzs0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InNvdXJjZXNDb250ZW50IjpbIi8vIG5nMi1wYXJhbGxheFxyXG5cclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBcclxuXHRcdCBFbGVtZW50UmVmLCBcclxuXHRcdCBIb3N0LCBcclxuXHRcdCBJbnB1dCxcclxuXHRcdCBPcHRpb25hbCwgXHJcblx0XHQgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG4vKiBcclxuVGhlc2UgYXJlIG9wdGlvbmFsIHZhbHVlcyB5b3UgY2FuIGluY2x1ZGUgaW4gdGhlIGNvbmZpZyBvYmplY3QgeW91IGNhbiBwYXNzIGludG8gdGhlIFxyXG5kaXJlY3RpdmUgZm9yIGN1c3RvbSBwcm9wZXJ0aWVzIHlvdSB3YW50IHRvIHVzZSB0aGlzIHdpdGguICBUaGlzIHRvb2wgY2FuIGJlIHVzZWQgZm9yIFxyXG5tb3JlIHRoYW4ganVzdCB0aGUgcGFyYWxsYXggZWZmZWN0LCBhbmQgaXQgaXMgYWJsZSB0byB0cmFuc2Zvcm0gYW55dGhpbmcgYWJvdXQgdGhlIFxyXG5bcGFyYWxsYXhFbGVtZW50XSB0aGF0IHlvdSB3YW50IHRvIGhhdmUgYm91bmQgdG8gdGhlIHNjcm9sbGluZyBvZiB0aGUgbmVzdGVkIGVsZW1lbnQuICBcclxuXHJcbiovXHJcbmludGVyZmFjZSBQYXJhbGxheENvbmZpZyB7XHJcblx0Ly8gdGhlIGNzcyBwcm9wZXJ0eSAoY29udmVydGVkIHRvIGNhbWVsQ2FzZSkgdGhhdCB5b3Ugd2FudCBjaGFuZ2VkIGFsb25nIHdpdGggdGhlXHJcblx0Ly8gdmFsdWUgeW91IHdhbnQgdG8gYXNzaWduIHRvIHRoZSBjc3Mga2V5OyB5b3Ugc2hvdWxkIHVzZSBQYXJhbGxheENzcyBpZiB5b3UncmUgXHJcblx0Ly8ganVzdCBkZWZpbmluZyBvbmUgcHJvcGVydHkgd2l0aG91dCBzcGVjaWFsIHZhbHVlc1xyXG5cdGNzc0tleT86IHN0cmluZztcclxuXHRcclxuXHQvLyB0aGlzIGlzIHVzZWQgdG8gZGVmaW5lIHRoZSBjc3MgcHJvcGVydHkgeW91J2QgbGlrZSB0byBtb2RpZnkgYXMgeW91IHNjcm9sbFxyXG5cdC8vIGRlZmF1bHQgaXMgYmFja2dyb3VuZFBvc2l0aW9uWVxyXG5cdHBhcmFsbGF4Q3NzPzogc3RyaW5nO1xyXG5cdFxyXG5cdC8vIHJhdGlvIGRlZmluaW5nIGhvdyBmYXN0LCBzbG93LCBvciB0aGUgZGlyZWN0aW9uIG9mIHRoZSBjaGFuZ2VzIG9uIHNjcm9sbGluZ1xyXG5cdHBhcmFsbGF4UmF0aW8/OiBudW1iZXI7XHJcblx0XHJcblx0Ly8gdGhpcyBpcyB0aGUgaW5pdGlhbCB2YWx1ZSBpbiBwaXhlbHMgZm9yIHRoZSBwYXJhbGxheENzcyBwcm9wZXJ0eSB5b3UgZGVmaW5lZFxyXG5cdC8vIGJlZm9yZSBvciwgaWYgeW91IGRpZG4ndCBkZWZpbmUgb25lLCBpdCBkZWZhdWx0cyB0byAwXHJcblx0cGFyYWxsYXhJbml0VmFsPzogbnVtYmVyO1xyXG5cdFxyXG5cdC8vIHVzZSB0aGlzIGlmIHlvdSB3YW50IHRoZSBwYXJhbGxheCBlZmZlY3Qgb25seSBpZiB0aGUgcGFzc2VkIGluIHN0YXRlbWVudCBpcyBcclxuXHQvLyB0cnV0aHk7IGRlZmF1bHQgaXMgYm9vbGVhbiB0cnVlXHJcblx0cGFyYWxsYXhJZj86IGFueTtcclxuXHRcclxuXHQvLyB0aGUgaWQgZm9yIHRoZSBlbGVtZW50IG9uIHRoZSBwYWdlIHlvdSdkIGxpa2UgdG8gdHJhY2sgdGhlIHNjcm9sbGluZyBvZiBpbiB0aGUgXHJcblx0Ly8gY2FzZSB3aGVyZSB0aGUgZWxlbWVudCBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBjdXJyZW50IGNvbXBvbmVudDsgXHJcblx0Ly8gaWYgbm8gaWQgaXMgZGVmaW5lZCBhbG9uZyB3aXRoIG5vIHNjcm9sbEVsZW1lbnQgYmVsb3csIFxyXG5cdC8vIGl0IGRlZmF1bHRzIHRvIHRoZSBzY3JvbGxpbmcgb2YgdGhlIGJvZHlcclxuXHRzY3JvbGxlcklkPzogc3RyaW5nO1xyXG5cdFxyXG5cdC8vIHRoZSB1cHBlciBjb25zdHJhaW50IGZvciB0aGUgY3NzIHRyYW5zZm9ybWF0aW9uXHJcblx0bWF4VmFsdWU/OiBudW1iZXI7XHJcblx0XHJcblx0Ly8gdGhlIGxvd2VyIGNvbnN0cmFpbnQgZm9yIHRoZSBjc3MgdHJhbnNmb3JtYXRpb25cclxuXHRtaW5WYWx1ZT86IG51bWJlcjtcclxuXHRcclxuXHQvLyB0aGUgdW5pdCAoZS5nLiAncHgnLCAnZW0nLCAnJScsICd2aCcsIGV0Yy4pIHlvdSB3YW50IGZvciB0aGUgcGFyYWxsYXggZWZmZWN0IHRvIHVzZSBcclxuXHRjc3NVbml0Pzogc3RyaW5nO1xyXG5cdFxyXG5cdC8vIHRoZSBlbGVtZW50IGluIHRoZSBjdXJyZW50IGNvbXBvbmVudCB0aGF0IHlvdSdkIGxpa2UgdGhlIGRpcmVjdGl2ZSB0byB0cmFjayBpdHMgXHJcblx0Ly8gcG9zaXRpb24gYXMgaXQgc2Nyb2xsczsgIGdldHMgYXNzaWduZWQgdG8gdGhlIGJvZHkgaWYgbm90aGluZyBpcyBkZWZpbmVkXHJcblx0c2Nyb2xsRWxlbWVudD86IEhUTUxFbGVtZW50O1xyXG5cdFxyXG5cdC8vIHRoZSBlbGVtZW50IHRoYXQgeW91J2QgbGlrZSB0aGUgZWZmZWN0cyBmcm9tIHNjcm9sbGluZyB0aGUgc2Nyb2xsRWxlbWVudCBhcHBsaWVkIFxyXG5cdC8vIHRvOyBlc3NlbnRpYWxseSB0aGUgZWxlbWVudCB0aGF0IG1vdmVzIGFzIHlvdSBzY3JvbGxcclxuXHRwYXJhbGxheEVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcclxuXHRcclxuXHQvLyB3aGF0IHlvdSB3YW50IHRvIGNhbGwgaXQgdG8gZmluZCB0aGUgcGFydGljdWxhciBpbnN0YW5jZSBvZiBpdCBpZiB5b3UgbmVlZCB0byBkZWJ1Z1xyXG5cdG5hbWU/OiBzdHJpbmc7XHJcblx0XHJcblx0Ly8gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgYWN0aW9ucyBkdXJpbmcgc2NhbGluZ1xyXG5cdGNiPygpOiB2b2lkO1xyXG5cdFxyXG5cdC8vIGFyZ3VtZW50cyBmb3Igb3B0aW9uYWwgY2FsbGJhY2sgZW50ZXJlZCBpbnRvIGFuIGFycmF5OyBmb3IgY29udGV4dC1zcGVjaWZpYyBcclxuXHRjYl9hcmdzPzogYW55W107XHJcblx0XHJcblx0Ly8gY2FsbGJhY2sgY29udGV4dCBpbiB0aGUgY2FzZSB3aGVyZSB0aGUgY2FsbGJhY2sgaXMgY29udGV4dC1zcGVjaWZpY1xyXG5cdGNiX2NvbnRleHQ/OiBhbnk7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbcGFyYWxsYXhdJ1xyXG59KVxyXG5cclxuY2xhc3MgUGFyYWxsYXggaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdG5hbWU6IHN0cmluZyA9ICdwYXJhbGxheERpcmVjdGl2ZSc7XHJcblx0XHJcbiAgICBASW5wdXQoKSBjb25maWc6IFBhcmFsbGF4Q29uZmlnO1xyXG5cdC8vIHRoZSBmb2xsb3dpbmcgQElucHV0cyBhcmUgYWxsIHBhcnQgb2YgdGhlIGNvbmZpZyBvYmplY3QsIHdoaWNoIGZvciBcclxuXHQvLyBicmV2aXR5J3Mgc2FrZSwgeW91IGNhbiBkbyBhIGJ1bmNoIG9mIG9wZXJhdGlvbnMgaW4gYnVsayBieSBwYXNzaW5nIFxyXG5cdC8vIGluIHRoZSBjb25maWcgb2JqZWN0OyBjYXZlYXQgZm9yIHRoaXMgaXMgdGhhdCBhbmd1bGFyIDIgd29uJ3QgcGVybWl0IFxyXG5cdC8vIG1vcmUgdGhhbiA5IGtleXMgYmVpbmcgcGFzc2VkIGluIGFuIG9iamVjdCB2aWEgdGhlIHRlbXBsYXRlXHJcbiAgICBASW5wdXQoKSBjc3NLZXk6IHN0cmluZyA9ICdiYWNrZ3JvdW5kUG9zaXRpb24nO1xyXG5cdEBJbnB1dCgpIHBhcmFsbGF4Q3NzOiBzdHJpbmcgPSAnYmFja2dyb3VuZFBvc2l0aW9uWSc7XHJcblx0QElucHV0KCkgcGFyYWxsYXhBeGlzOiBzdHJpbmcgPSAnWSc7XHJcbiAgICBASW5wdXQoKSBwYXJhbGxheFJhdGlvOiBudW1iZXIgPSAtLjc7XHJcbiAgICBASW5wdXQoKSBwYXJhbGxheEluaXRWYWw6IG51bWJlciA9IDA7XHJcblx0QElucHV0KCkgcGFyYWxsYXhJZjogYW55ID0gdHJ1ZTtcclxuXHRASW5wdXQoKSBzY3JvbGxlcklkOiBzdHJpbmc7XHJcblx0QElucHV0KCkgbWF4VmFsdWU6IG51bWJlcjtcclxuXHRASW5wdXQoKSBtaW5WYWx1ZTogbnVtYmVyO1xyXG5cdEBJbnB1dCgpIGNzc1VuaXQ6IHN0cmluZyA9ICdweCc7XHJcblx0QElucHV0KCkgY2I7XHJcblx0QElucHV0KCkgY2JfY29udGV4dDogYW55ID0gbnVsbDtcclxuXHRASW5wdXQoKSBjYl9hcmdzOiBhbnlbXSA9IFtdO1xyXG5cdFxyXG5cdHBhcmFsbGF4U3R5bGVzOiB7fSA9IHt9O1xyXG5cdFxyXG4gICAgcHJpdmF0ZSBjc3NWYWx1ZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBpc1NwZWNpYWxWYWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRcclxuXHRwcml2YXRlIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHRASW5wdXQoKSBzY3JvbGxFbGVtZW50OiBhbnk7XHJcblx0QElucHV0KCkgcGFyYWxsYXhFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHRcclxuXHRwcml2YXRlIGV2YWx1YXRlU2Nyb2xsID0gKCkgPT4ge1xyXG5cdFx0aWYgKHRoaXMucGFyYWxsYXhJZikge1xyXG5cdFx0XHRsZXQgcmVzdWx0VmFsOiBzdHJpbmc7XHJcblx0XHRcdGxldCBjYWxjVmFsOiBudW1iZXI7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAodGhpcy5zY3JvbGxFbGVtZW50IGluc3RhbmNlb2YgV2luZG93KVxyXG5cdFx0XHRcdGNhbGNWYWwgPSB0aGlzLnNjcm9sbEVsZW1lbnQuc2Nyb2xsWSAqIHRoaXMucGFyYWxsYXhSYXRpbyArIHRoaXMucGFyYWxsYXhJbml0VmFsO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0Y2FsY1ZhbCA9IHRoaXMuc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AgKiB0aGlzLnBhcmFsbGF4UmF0aW8gKyB0aGlzLnBhcmFsbGF4SW5pdFZhbDtcclxuXHRcdFx0XHJcblx0XHRcdGlmICh0aGlzLm1heFZhbHVlICE9PSB1bmRlZmluZWQgJiYgY2FsY1ZhbCA+PSB0aGlzLm1heFZhbHVlKVxyXG5cdFx0XHRcdGNhbGNWYWwgPSB0aGlzLm1heFZhbHVlO1xyXG5cdFx0XHRlbHNlIGlmICh0aGlzLm1pblZhbHVlICE9PSB1bmRlZmluZWQgJiYgY2FsY1ZhbCA8PSB0aGlzLm1pblZhbHVlKVxyXG5cdFx0XHRcdGNhbGNWYWwgPSB0aGlzLm1pblZhbHVlO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gYWRkZWQgYWZ0ZXIgcmVhbGl6aW5nIG9yaWdpbmFsIHNldHVwIHdhc24ndCBjb21wYXRpYmxlIGluIEZpcmVmb3hcclxuXHRcdFx0Ly8gZGVidWdnZXI7XHJcblx0XHRcdGlmICh0aGlzLmNzc0tleSA9PT0gJ2JhY2tncm91bmRQb3NpdGlvbicpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5wYXJhbGxheEF4aXMgPT09ICdYJykge1xyXG5cdFx0XHRcdFx0cmVzdWx0VmFsID0gY2FsY1ZhbCArIHRoaXMuY3NzVW5pdCArICcgMCc7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJlc3VsdFZhbCA9ICcwICcgKyBjYWxjVmFsICsgdGhpcy5jc3NVbml0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmlzU3BlY2lhbFZhbCkge1xyXG5cdFx0XHRcdHJlc3VsdFZhbCA9IHRoaXMuY3NzVmFsdWUgKyAnKCcgKyBjYWxjVmFsICsgdGhpcy5jc3NVbml0ICsgJyknO1xyXG5cdFx0XHR9IGVsc2UgeyBcclxuXHRcdFx0XHRyZXN1bHRWYWwgPSBjYWxjVmFsICsgdGhpcy5jc3NVbml0O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAodGhpcy5jYikge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCd0aGlzIHNob3VsZCBiZSBydW5uaW5nJylcclxuXHRcdFx0XHR0aGlzLmNiLmFwcGx5KHRoaXMuY2JfY29udGV4dCwgdGhpcy5jYl9hcmdzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5wYXJhbGxheEVsZW1lbnQuc3R5bGVbdGhpcy5jc3NLZXldID0gcmVzdWx0VmFsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGxldCBjc3NWYWxBcnJheTogc3RyaW5nW107XHJcblx0XHRcclxuXHRcdC8vIGNvbnNvbGUubG9nKCclcyBpbml0aWFsaXplZCBvbiBlbGVtZW50JywgdGhpcy5uYW1lLCB0aGlzLmhvc3RFbGVtZW50KTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMpO1xyXG5cdFx0XHJcblx0XHRmb3IgKGxldCBwcm9wIGluIHRoaXMuY29uZmlnKSB7IHRoaXNbcHJvcF0gPSB0aGlzLmNvbmZpZ1twcm9wXTsgfVxyXG5cdFx0dGhpcy5wYXJhbGxheENzcyA9IHRoaXMucGFyYWxsYXhDc3MgPyB0aGlzLnBhcmFsbGF4Q3NzIDogJ2JhY2tncm91bmRQb3NpdGlvblknO1xyXG5cdFx0aWYgKHRoaXMucGFyYWxsYXhDc3MubWF0Y2goL2JhY2tncm91bmRQb3NpdGlvbi9pKSkge1xyXG5cdFx0XHRpZiAodGhpcy5wYXJhbGxheENzcy5zcGxpdCgnYmFja2dyb3VuZFBvc2l0aW9uJylbMV0udG9VcHBlckNhc2UoKSA9PT0gJ1gnKSB7XHJcblx0XHRcdFx0dGhpcy5wYXJhbGxheEF4aXMgPSAnWCc7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRoaXMucGFyYWxsYXhDc3MgPSAnYmFja2dyb3VuZFBvc2l0aW9uJztcclxuXHRcdH1cclxuXHRcdFxyXG4gICAgICAgIGNzc1ZhbEFycmF5ID0gdGhpcy5wYXJhbGxheENzcy5zcGxpdCgnOicpO1xyXG4gICAgICAgIHRoaXMuY3NzS2V5ID0gY3NzVmFsQXJyYXlbMF07XHJcbiAgICAgICAgdGhpcy5jc3NWYWx1ZSA9IGNzc1ZhbEFycmF5WzFdO1xyXG5cdFx0XHJcbiAgICAgICAgdGhpcy5pc1NwZWNpYWxWYWwgPSB0aGlzLmNzc1ZhbHVlID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5jc3NWYWx1ZSkgdGhpcy5jc3NWYWx1ZSA9IHRoaXMuY3NzS2V5O1xyXG5cdFx0XHJcbiAgICAgICAgdGhpcy5wYXJhbGxheFJhdGlvID0gK3RoaXMucGFyYWxsYXhSYXRpbztcclxuICAgICAgICB0aGlzLnBhcmFsbGF4SW5pdFZhbCA9ICt0aGlzLnBhcmFsbGF4SW5pdFZhbDtcclxuXHRcdFxyXG5cdFx0dGhpcy5wYXJhbGxheEVsZW1lbnQgPSB0aGlzLnBhcmFsbGF4RWxlbWVudCB8fCB0aGlzLmhvc3RFbGVtZW50O1xyXG5cdFx0aWYgKCF0aGlzLnNjcm9sbEVsZW1lbnQpIHtcclxuXHRcdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJhbGxheFNjcm9sbCcpKVxyXG5cdFx0XHRcdHRoaXMuc2Nyb2xsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJhbGxheFNjcm9sbCcpO1xyXG5cdFx0XHRlbHNlIGlmICh0aGlzLnNjcm9sbGVySWQpIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zY3JvbGxlcklkKTtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5zY3JvbGxFbGVtZW50KVxyXG5cdFx0XHRcdFx0XHR0aHJvdyhgVGhlIElEIHBhc3NlZCB0aHJvdWdoIHRoZSBwYXJhbGxheENvbmZpZyAoJyR7dGhpcy5zY3JvbGxlcklkfScpIG9iamVjdCB3YXMgbm90IGZvdW5kIGluIHRoZSBkb2N1bWVudC4gIERlZmF1bHRpbmcgdG8gdHJhY2tpbmcgdGhlIHNjcm9sbGluZyBvZiB0aGUgd2luZG93LmApO1xyXG5cdFx0XHRcdH0gY2F0Y2goZSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKGUpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxFbGVtZW50ID0gd2luZG93O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHRoaXMuc2Nyb2xsRWxlbWVudCA9IHdpbmRvdztcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dGhpcy5ldmFsdWF0ZVNjcm9sbCgpO1xyXG5cdFx0XHJcblx0XHR0aGlzLnNjcm9sbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5ldmFsdWF0ZVNjcm9sbC5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblx0XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XHJcblx0XHR0aGlzLmhvc3RFbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgUGFyYWxsYXgsIFBhcmFsbGF4Q29uZmlnIH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
