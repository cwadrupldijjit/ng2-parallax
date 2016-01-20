// ng2-parallax
System.register(['angular2/core'], function(exports_1) {
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
                            var resultVal;
                            var calcVal;
                            // debugger;
                            typeof window;
                            if (_this.scrollElement instanceof Window)
                                calcVal = _this.scrollElement.scrollY * _this.parallaxRatio + _this.parallaxInitVal;
                            else
                                calcVal = _this.scrollElement.scrollTop * _this.parallaxRatio + _this.parallaxInitVal;
                            if (_this.maxValue !== undefined && calcVal >= _this.maxValue)
                                calcVal = _this.maxValue;
                            else if (_this.minValue !== undefined && calcVal <= _this.minValue)
                                calcVal = _this.minValue;
                            // added after realizing original setup wasn't compatible in Firefox
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
                        // debugger;
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
                    cssValArray = this.parallaxCss.split(':');
                    this.cssKey = cssValArray[0];
                    this.cssValue = cssValArray[1];
                    this.parallaxCss = this.parallaxCss ? this.parallaxCss : 'backgroundPositionY';
                    if (this.parallaxCss.match(/backgroundPosition/i)) {
                        if (this.parallaxCss.split('backgroundPosition')[1].toUpperCase() === 'X') {
                            this.parallaxAxis = 'X';
                        }
                        this.parallaxCss = 'backgroundPosition';
                    }
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
                    debugger;
                    this.evaluateScroll();
                    this.scrollElement.addEventListener('scroll', this.evaluateScroll);
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
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
                ], Parallax);
                return Parallax;
                var _a;
            })();
            exports_1("Parallax", Parallax);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmFsbGF4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6WyJQYXJhbGxheCIsIlBhcmFsbGF4LmNvbnN0cnVjdG9yIiwiUGFyYWxsYXgubmdPbkluaXQiXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5RWY7Z0JBOEhJQSxrQkFBWUEsT0FBbUJBO29CQTlIbkNDLGlCQWlJQ0E7b0JBNUhBQSxTQUFJQSxHQUFXQSxtQkFBbUJBLENBQUNBO29CQUduQ0Esc0VBQXNFQTtvQkFDdEVBLHVFQUF1RUE7b0JBQ3ZFQSx3RUFBd0VBO29CQUN4RUEsOERBQThEQTtvQkFDbERBLFdBQU1BLEdBQVdBLG9CQUFvQkEsQ0FBQ0E7b0JBQ3pDQSxnQkFBV0EsR0FBV0EscUJBQXFCQSxDQUFDQTtvQkFDNUNBLGlCQUFZQSxHQUFXQSxHQUFHQSxDQUFDQTtvQkFDeEJBLGtCQUFhQSxHQUFXQSxDQUFDQSxFQUFFQSxDQUFDQTtvQkFDNUJBLG9CQUFlQSxHQUFXQSxDQUFDQSxDQUFDQTtvQkFDL0JBLGVBQVVBLEdBQVFBLElBQUlBLENBQUNBO29CQUl2QkEsWUFBT0EsR0FBV0EsSUFBSUEsQ0FBQ0E7b0JBRXZCQSxlQUFVQSxHQUFRQSxJQUFJQSxDQUFDQTtvQkFDdkJBLFlBQU9BLEdBQVVBLEVBQUVBLENBQUNBO29CQUU3QkEsbUJBQWNBLEdBQU9BLEVBQUVBLENBQUNBO29CQUdiQSxpQkFBWUEsR0FBWUEsS0FBS0EsQ0FBQ0E7b0JBTWpDQSxtQkFBY0EsR0FBR0E7d0JBQ3hCQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDckJBLElBQUlBLFNBQWlCQSxDQUFDQTs0QkFDdEJBLElBQUlBLE9BQWVBLENBQUNBOzRCQUNwQkEsWUFBWUE7NEJBRVpBLE9BQU9BLE1BQU1BLENBQUFBOzRCQUViQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFJQSxDQUFDQSxhQUFhQSxZQUFZQSxNQUFNQSxDQUFDQTtn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QTtnQkFDNUJBO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLHFDQUFlQSxVQUFjQTtnQkFqQ3ZDQTtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxZQUFZQTtxQkFDekJBLENBQUNBOzs2QkErSERBO2dCQUFEQSxlQUFDQTs7WUFBREEsQ0FqSUEsQUFpSUNBLElBQUE7WUFHUSwrQkFBUSIsImZpbGUiOiJwYXJhbGxheC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuZzItcGFyYWxsYXhcclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgXHJcblx0XHQgRWxlbWVudFJlZiwgXHJcblx0XHQgSG9zdCwgXHJcblx0XHQgSW5wdXQsXHJcblx0XHQgT3B0aW9uYWwsIFxyXG5cdFx0IE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuLyogXHJcblRoZXNlIGFyZSBvcHRpb25hbCB2YWx1ZXMgeW91IGNhbiBpbmNsdWRlIGluIHRoZSBjb25maWcgb2JqZWN0IHlvdSBjYW4gcGFzcyBpbnRvIHRoZSBcclxuZGlyZWN0aXZlIGZvciBjdXN0b20gcHJvcGVydGllcyB5b3Ugd2FudCB0byB1c2UgdGhpcyB3aXRoLiAgVGhpcyB0b29sIGNhbiBiZSB1c2VkIGZvciBcclxubW9yZSB0aGFuIGp1c3QgdGhlIHBhcmFsbGF4IGVmZmVjdCwgYW5kIGl0IGlzIGFibGUgdG8gdHJhbnNmb3JtIGFueXRoaW5nIGFib3V0IHRoZSBcclxuW3BhcmFsbGF4RWxlbWVudF0gdGhhdCB5b3Ugd2FudCB0byBoYXZlIGJvdW5kIHRvIHRoZSBzY3JvbGxpbmcgb2YgdGhlIG5lc3RlZCBlbGVtZW50LiAgXHJcblxyXG4qL1xyXG5pbnRlcmZhY2UgUGFyYWxsYXhDb25maWcge1xyXG5cdC8vIHRoZSBjc3MgcHJvcGVydHkgKGNvbnZlcnRlZCB0byBjYW1lbENhc2UpIHRoYXQgeW91IHdhbnQgY2hhbmdlZCBhbG9uZyB3aXRoIHRoZVxyXG5cdC8vIHZhbHVlIHlvdSB3YW50IHRvIGFzc2lnbiB0byB0aGUgY3NzIGtleTsgeW91IHNob3VsZCB1c2UgUGFyYWxsYXhDc3MgaWYgeW91J3JlIFxyXG5cdC8vIGp1c3QgZGVmaW5pbmcgb25lIHByb3BlcnR5IHdpdGhvdXQgc3BlY2lhbCB2YWx1ZXNcclxuXHRjc3NLZXk/OiBzdHJpbmc7XHJcblx0XHJcblx0Ly8gdGhpcyBpcyB1c2VkIHRvIGRlZmluZSB0aGUgY3NzIHByb3BlcnR5IHlvdSdkIGxpa2UgdG8gbW9kaWZ5IGFzIHlvdSBzY3JvbGxcclxuXHQvLyBkZWZhdWx0IGlzIGJhY2tncm91bmRQb3NpdGlvbllcclxuXHRwYXJhbGxheENzcz86IHN0cmluZztcclxuXHRcclxuXHQvLyByYXRpbyBkZWZpbmluZyBob3cgZmFzdCwgc2xvdywgb3IgdGhlIGRpcmVjdGlvbiBvZiB0aGUgY2hhbmdlcyBvbiBzY3JvbGxpbmdcclxuXHRwYXJhbGxheFJhdGlvPzogbnVtYmVyO1xyXG5cdFxyXG5cdC8vIHRoaXMgaXMgdGhlIGluaXRpYWwgdmFsdWUgaW4gcGl4ZWxzIGZvciB0aGUgcGFyYWxsYXhDc3MgcHJvcGVydHkgeW91IGRlZmluZWRcclxuXHQvLyBiZWZvcmUgb3IsIGlmIHlvdSBkaWRuJ3QgZGVmaW5lIG9uZSwgaXQgZGVmYXVsdHMgdG8gMFxyXG5cdHBhcmFsbGF4SW5pdFZhbD86IG51bWJlcjtcclxuXHRcclxuXHQvLyB1c2UgdGhpcyBpZiB5b3Ugd2FudCB0aGUgcGFyYWxsYXggZWZmZWN0IG9ubHkgaWYgdGhlIHBhc3NlZCBpbiBzdGF0ZW1lbnQgaXMgXHJcblx0Ly8gdHJ1dGh5OyBkZWZhdWx0IGlzIGJvb2xlYW4gdHJ1ZVxyXG5cdHBhcmFsbGF4SWY/OiBhbnk7XHJcblx0XHJcblx0Ly8gdGhlIGlkIGZvciB0aGUgZWxlbWVudCBvbiB0aGUgcGFnZSB5b3UnZCBsaWtlIHRvIHRyYWNrIHRoZSBzY3JvbGxpbmcgb2YgaW4gdGhlIFxyXG5cdC8vIGNhc2Ugd2hlcmUgdGhlIGVsZW1lbnQgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgY3VycmVudCBjb21wb25lbnQ7IFxyXG5cdC8vIGlmIG5vIGlkIGlzIGRlZmluZWQgYWxvbmcgd2l0aCBubyBzY3JvbGxFbGVtZW50IGJlbG93LCBcclxuXHQvLyBpdCBkZWZhdWx0cyB0byB0aGUgc2Nyb2xsaW5nIG9mIHRoZSBib2R5XHJcblx0c2Nyb2xsZXJJZD86IHN0cmluZztcclxuXHRcclxuXHQvLyB0aGUgdXBwZXIgY29uc3RyYWludCBmb3IgdGhlIGNzcyB0cmFuc2Zvcm1hdGlvblxyXG5cdG1heFZhbHVlPzogbnVtYmVyO1xyXG5cdFxyXG5cdC8vIHRoZSBsb3dlciBjb25zdHJhaW50IGZvciB0aGUgY3NzIHRyYW5zZm9ybWF0aW9uXHJcblx0bWluVmFsdWU/OiBudW1iZXI7XHJcblx0XHJcblx0Ly8gdGhlIHVuaXQgKGUuZy4gJ3B4JywgJ2VtJywgJyUnLCAndmgnLCBldGMuKSB5b3Ugd2FudCBmb3IgdGhlIHBhcmFsbGF4IGVmZmVjdCB0byB1c2UgXHJcblx0Y3NzVW5pdD86IHN0cmluZztcclxuXHRcclxuXHQvLyB0aGUgZWxlbWVudCBpbiB0aGUgY3VycmVudCBjb21wb25lbnQgdGhhdCB5b3UnZCBsaWtlIHRoZSBkaXJlY3RpdmUgdG8gdHJhY2sgaXRzIFxyXG5cdC8vIHBvc2l0aW9uIGFzIGl0IHNjcm9sbHM7ICBnZXRzIGFzc2lnbmVkIHRvIHRoZSBib2R5IGlmIG5vdGhpbmcgaXMgZGVmaW5lZFxyXG5cdHNjcm9sbEVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcclxuXHRcclxuXHQvLyB0aGUgZWxlbWVudCB0aGF0IHlvdSdkIGxpa2UgdGhlIGVmZmVjdHMgZnJvbSBzY3JvbGxpbmcgdGhlIHNjcm9sbEVsZW1lbnQgYXBwbGllZCBcclxuXHQvLyB0bzsgZXNzZW50aWFsbHkgdGhlIGVsZW1lbnQgdGhhdCBtb3ZlcyBhcyB5b3Ugc2Nyb2xsXHJcblx0cGFyYWxsYXhFbGVtZW50PzogSFRNTEVsZW1lbnQ7XHJcblx0XHJcblx0Ly8gd2hhdCB5b3Ugd2FudCB0byBjYWxsIGl0IHRvIGZpbmQgdGhlIHBhcnRpY3VsYXIgaW5zdGFuY2Ugb2YgaXQgaWYgeW91IG5lZWQgdG8gZGVidWdcclxuXHRuYW1lPzogc3RyaW5nO1xyXG5cdFxyXG5cdC8vIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGFjdGlvbnMgZHVyaW5nIHNjYWxpbmdcclxuXHRjYj8oKTogdm9pZDtcclxuXHRcclxuXHQvLyBhcmd1bWVudHMgZm9yIG9wdGlvbmFsIGNhbGxiYWNrIGVudGVyZWQgaW50byBhbiBhcnJheTsgZm9yIGNvbnRleHQtc3BlY2lmaWMgXHJcblx0Y2JfYXJncz86IGFueVtdO1xyXG5cdFxyXG5cdC8vIGNhbGxiYWNrIGNvbnRleHQgaW4gdGhlIGNhc2Ugd2hlcmUgdGhlIGNhbGxiYWNrIGlzIGNvbnRleHQtc3BlY2lmaWNcclxuXHRjYl9jb250ZXh0PzogYW55O1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3BhcmFsbGF4XSdcclxufSlcclxuXHJcbmNsYXNzIFBhcmFsbGF4IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRuYW1lOiBzdHJpbmcgPSAncGFyYWxsYXhEaXJlY3RpdmUnO1xyXG5cdFxyXG4gICAgQElucHV0KCkgY29uZmlnOiBQYXJhbGxheENvbmZpZztcclxuXHQvLyB0aGUgZm9sbG93aW5nIEBJbnB1dHMgYXJlIGFsbCBwYXJ0IG9mIHRoZSBjb25maWcgb2JqZWN0LCB3aGljaCBmb3IgXHJcblx0Ly8gYnJldml0eSdzIHNha2UsIHlvdSBjYW4gZG8gYSBidW5jaCBvZiBvcGVyYXRpb25zIGluIGJ1bGsgYnkgcGFzc2luZyBcclxuXHQvLyBpbiB0aGUgY29uZmlnIG9iamVjdDsgY2F2ZWF0IGZvciB0aGlzIGlzIHRoYXQgYW5ndWxhciAyIHdvbid0IHBlcm1pdCBcclxuXHQvLyBtb3JlIHRoYW4gOSBrZXlzIGJlaW5nIHBhc3NlZCBpbiBhbiBvYmplY3QgdmlhIHRoZSB0ZW1wbGF0ZVxyXG4gICAgQElucHV0KCkgY3NzS2V5OiBzdHJpbmcgPSAnYmFja2dyb3VuZFBvc2l0aW9uJztcclxuXHRASW5wdXQoKSBwYXJhbGxheENzczogc3RyaW5nID0gJ2JhY2tncm91bmRQb3NpdGlvblknO1xyXG5cdEBJbnB1dCgpIHBhcmFsbGF4QXhpczogc3RyaW5nID0gJ1knO1xyXG4gICAgQElucHV0KCkgcGFyYWxsYXhSYXRpbzogbnVtYmVyID0gLS43O1xyXG4gICAgQElucHV0KCkgcGFyYWxsYXhJbml0VmFsOiBudW1iZXIgPSAwO1xyXG5cdEBJbnB1dCgpIHBhcmFsbGF4SWY6IGFueSA9IHRydWU7XHJcblx0QElucHV0KCkgc2Nyb2xsZXJJZDogc3RyaW5nO1xyXG5cdEBJbnB1dCgpIG1heFZhbHVlOiBudW1iZXI7XHJcblx0QElucHV0KCkgbWluVmFsdWU6IG51bWJlcjtcclxuXHRASW5wdXQoKSBjc3NVbml0OiBzdHJpbmcgPSAncHgnO1xyXG5cdEBJbnB1dCgpIGNiO1xyXG5cdEBJbnB1dCgpIGNiX2NvbnRleHQ6IGFueSA9IG51bGw7XHJcblx0QElucHV0KCkgY2JfYXJnczogYW55W10gPSBbXTtcclxuXHRcclxuXHRwYXJhbGxheFN0eWxlczoge30gPSB7fTtcclxuXHRcclxuICAgIHByaXZhdGUgY3NzVmFsdWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgaXNTcGVjaWFsVmFsOiBib29sZWFuID0gZmFsc2U7XHJcblx0XHJcblx0cHJpdmF0ZSBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblx0QElucHV0KCkgc2Nyb2xsRWxlbWVudDogYW55O1xyXG5cdEBJbnB1dCgpIHBhcmFsbGF4RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblx0XHJcblx0cHJpdmF0ZSBldmFsdWF0ZVNjcm9sbCA9ICgpID0+IHtcclxuXHRcdGlmICh0aGlzLnBhcmFsbGF4SWYpIHtcclxuXHRcdFx0bGV0IHJlc3VsdFZhbDogc3RyaW5nO1xyXG5cdFx0XHRsZXQgY2FsY1ZhbDogbnVtYmVyO1xyXG5cdFx0XHQvLyBkZWJ1Z2dlcjtcclxuXHRcdFx0XHJcblx0XHRcdHR5cGVvZiB3aW5kb3dcclxuXHRcdFx0XHJcblx0XHRcdGlmICh0aGlzLnNjcm9sbEVsZW1lbnQgaW5zdGFuY2VvZiBXaW5kb3cpXHJcblx0XHRcdFx0Y2FsY1ZhbCA9IHRoaXMuc2Nyb2xsRWxlbWVudC5zY3JvbGxZICogdGhpcy5wYXJhbGxheFJhdGlvICsgdGhpcy5wYXJhbGxheEluaXRWYWw7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRjYWxjVmFsID0gdGhpcy5zY3JvbGxFbGVtZW50LnNjcm9sbFRvcCAqIHRoaXMucGFyYWxsYXhSYXRpbyArIHRoaXMucGFyYWxsYXhJbml0VmFsO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHRoaXMubWF4VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBjYWxjVmFsID49IHRoaXMubWF4VmFsdWUpXHJcblx0XHRcdFx0Y2FsY1ZhbCA9IHRoaXMubWF4VmFsdWU7XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMubWluVmFsdWUgIT09IHVuZGVmaW5lZCAmJiBjYWxjVmFsIDw9IHRoaXMubWluVmFsdWUpXHJcblx0XHRcdFx0Y2FsY1ZhbCA9IHRoaXMubWluVmFsdWU7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBhZGRlZCBhZnRlciByZWFsaXppbmcgb3JpZ2luYWwgc2V0dXAgd2Fzbid0IGNvbXBhdGlibGUgaW4gRmlyZWZveFxyXG5cdFx0XHRpZiAodGhpcy5jc3NLZXkgPT09ICdiYWNrZ3JvdW5kUG9zaXRpb24nKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMucGFyYWxsYXhBeGlzID09PSAnWCcpIHtcclxuXHRcdFx0XHRcdHJlc3VsdFZhbCA9IGNhbGNWYWwgKyB0aGlzLmNzc1VuaXQgKyAnIDAnO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXN1bHRWYWwgPSAnMCAnICsgY2FsY1ZhbCArIHRoaXMuY3NzVW5pdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5pc1NwZWNpYWxWYWwpIHtcclxuXHRcdFx0XHRyZXN1bHRWYWwgPSB0aGlzLmNzc1ZhbHVlICsgJygnICsgY2FsY1ZhbCArIHRoaXMuY3NzVW5pdCArICcpJztcclxuXHRcdFx0fSBlbHNlIHsgXHJcblx0XHRcdFx0cmVzdWx0VmFsID0gY2FsY1ZhbCArIHRoaXMuY3NzVW5pdDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHRoaXMuY2IpIHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygndGhpcyBzaG91bGQgYmUgcnVubmluZycpXHJcblx0XHRcdFx0dGhpcy5jYi5hcHBseSh0aGlzLmNiX2NvbnRleHQsIHRoaXMuY2JfYXJncyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRoaXMucGFyYWxsYXhFbGVtZW50LnN0eWxlW3RoaXMuY3NzS2V5XSA9IHJlc3VsdFZhbDtcclxuXHRcdH1cclxuXHRcdC8vIGRlYnVnZ2VyO1xyXG5cdH1cclxuXHRcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGxldCBjc3NWYWxBcnJheTogc3RyaW5nW107XHJcblx0XHRcclxuXHRcdC8vIGNvbnNvbGUubG9nKCclcyBpbml0aWFsaXplZCBvbiBlbGVtZW50JywgdGhpcy5uYW1lLCB0aGlzLmhvc3RFbGVtZW50KTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMpO1xyXG5cdFx0XHJcblx0XHRmb3IgKGxldCBwcm9wIGluIHRoaXMuY29uZmlnKSB7IHRoaXNbcHJvcF0gPSB0aGlzLmNvbmZpZ1twcm9wXTsgfVxyXG5cdFx0XHJcbiAgICAgICAgY3NzVmFsQXJyYXkgPSB0aGlzLnBhcmFsbGF4Q3NzLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgdGhpcy5jc3NLZXkgPSBjc3NWYWxBcnJheVswXTtcclxuICAgICAgICB0aGlzLmNzc1ZhbHVlID0gY3NzVmFsQXJyYXlbMV07XHJcblx0XHRcclxuXHRcdHRoaXMucGFyYWxsYXhDc3MgPSB0aGlzLnBhcmFsbGF4Q3NzID8gdGhpcy5wYXJhbGxheENzcyA6ICdiYWNrZ3JvdW5kUG9zaXRpb25ZJztcclxuXHRcdGlmICh0aGlzLnBhcmFsbGF4Q3NzLm1hdGNoKC9iYWNrZ3JvdW5kUG9zaXRpb24vaSkpIHtcclxuXHRcdFx0aWYgKHRoaXMucGFyYWxsYXhDc3Muc3BsaXQoJ2JhY2tncm91bmRQb3NpdGlvbicpWzFdLnRvVXBwZXJDYXNlKCkgPT09ICdYJykge1xyXG5cdFx0XHRcdHRoaXMucGFyYWxsYXhBeGlzID0gJ1gnO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnBhcmFsbGF4Q3NzID0gJ2JhY2tncm91bmRQb3NpdGlvbic7XHJcblx0XHR9XHJcblx0XHRcclxuICAgICAgICB0aGlzLmlzU3BlY2lhbFZhbCA9IHRoaXMuY3NzVmFsdWUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNzc1ZhbHVlKSB0aGlzLmNzc1ZhbHVlID0gdGhpcy5jc3NLZXk7XHJcblx0XHRcclxuICAgICAgICB0aGlzLnBhcmFsbGF4UmF0aW8gPSArdGhpcy5wYXJhbGxheFJhdGlvO1xyXG4gICAgICAgIHRoaXMucGFyYWxsYXhJbml0VmFsID0gK3RoaXMucGFyYWxsYXhJbml0VmFsO1xyXG5cdFx0XHJcblx0XHR0aGlzLnBhcmFsbGF4RWxlbWVudCA9IHRoaXMucGFyYWxsYXhFbGVtZW50IHx8IHRoaXMuaG9zdEVsZW1lbnQ7XHJcblx0XHRpZiAoIXRoaXMuc2Nyb2xsRWxlbWVudCkge1xyXG5cdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsbGF4U2Nyb2xsJykpXHJcblx0XHRcdFx0dGhpcy5zY3JvbGxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsbGF4U2Nyb2xsJyk7XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuc2Nyb2xsZXJJZCkge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnNjcm9sbGVySWQpO1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLnNjcm9sbEVsZW1lbnQpXHJcblx0XHRcdFx0XHRcdHRocm93KGBUaGUgSUQgcGFzc2VkIHRocm91Z2ggdGhlIHBhcmFsbGF4Q29uZmlnICgnJHt0aGlzLnNjcm9sbGVySWR9Jykgb2JqZWN0IHdhcyBub3QgZm91bmQgaW4gdGhlIGRvY3VtZW50LiAgRGVmYXVsdGluZyB0byB0cmFja2luZyB0aGUgc2Nyb2xsaW5nIG9mIHRoZSB3aW5kb3cuYCk7XHJcblx0XHRcdFx0fSBjYXRjaChlKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oZSk7XHJcblx0XHRcdFx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSB3aW5kb3c7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgdGhpcy5zY3JvbGxFbGVtZW50ID0gd2luZG93O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRkZWJ1Z2dlcjtcclxuXHRcdFxyXG5cdFx0dGhpcy5ldmFsdWF0ZVNjcm9sbCgpO1xyXG5cdFx0XHJcblx0XHR0aGlzLnNjcm9sbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5ldmFsdWF0ZVNjcm9sbCk7XHJcblx0fVxyXG5cdFxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xyXG5cdFx0dGhpcy5ob3N0RWxlbWVudCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IFBhcmFsbGF4LCBQYXJhbGxheENvbmZpZyB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
