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
                    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
                ], Parallax);
                return Parallax;
                var _a;
            }());
            exports_1("Parallax", Parallax);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL3BhcmFsbGF4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2RWY7Z0JBb0hJLGtCQUFZLE9BQW1CO29CQXBIbkMsaUJBdUhDO29CQXRIQSxTQUFJLEdBQVcsbUJBQW1CLENBQUM7b0JBR25DLHNFQUFzRTtvQkFDdEUsdUVBQXVFO29CQUN2RSx3RUFBd0U7b0JBQ3hFLDhEQUE4RDtvQkFDbEQsV0FBTSxHQUFXLG9CQUFvQixDQUFDO29CQUN6QyxnQkFBVyxHQUFXLHFCQUFxQixDQUFDO29CQUM1QyxpQkFBWSxHQUFXLEdBQUcsQ0FBQztvQkFDeEIsa0JBQWEsR0FBVyxDQUFDLEVBQUUsQ0FBQztvQkFDNUIsb0JBQWUsR0FBVyxDQUFDLENBQUM7b0JBQy9CLGVBQVUsR0FBUSxJQUFJLENBQUM7b0JBSXZCLFlBQU8sR0FBVyxJQUFJLENBQUM7b0JBRXZCLGVBQVUsR0FBUSxJQUFJLENBQUM7b0JBQ3ZCLFlBQU8sR0FBVSxFQUFFLENBQUM7b0JBRTdCLG1CQUFjLEdBQU8sRUFBRSxDQUFDO29CQUdiLGlCQUFZLEdBQVksS0FBSyxDQUFDO29CQU1qQyxtQkFBYyxHQUFHO3dCQUN4QixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzs0QkFDckIsSUFBSSxTQUFTLFNBQVEsQ0FBQzs0QkFDdEIsSUFBSSxPQUFPLFNBQVEsQ0FBQzs0QkFFcEIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGFBQWEsWUFBWSxNQUFNLENBQUM7Z0NBQ3hDLE9BQU8sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUM7NEJBQ2xGLElBQUk7Z0NBQ0gsT0FBTyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FB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dmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuZzItcGFyYWxsYXhcblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBcblx0XHQgRWxlbWVudFJlZiwgXG5cdFx0IEhvc3QsIFxuXHRcdCBJbnB1dCxcblx0XHQgT3B0aW9uYWwsIFxuXHRcdCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuLyogXG5UaGVzZSBhcmUgb3B0aW9uYWwgdmFsdWVzIHlvdSBjYW4gaW5jbHVkZSBpbiB0aGUgY29uZmlnIG9iamVjdCB5b3UgY2FuIHBhc3MgaW50byB0aGUgXG5kaXJlY3RpdmUgZm9yIGN1c3RvbSBwcm9wZXJ0aWVzIHlvdSB3YW50IHRvIHVzZSB0aGlzIHdpdGguICBUaGlzIHRvb2wgY2FuIGJlIHVzZWQgZm9yIFxubW9yZSB0aGFuIGp1c3QgdGhlIHBhcmFsbGF4IGVmZmVjdCwgYW5kIGl0IGlzIGFibGUgdG8gdHJhbnNmb3JtIGFueXRoaW5nIGFib3V0IHRoZSBcbltwYXJhbGxheEVsZW1lbnRdIHRoYXQgeW91IHdhbnQgdG8gaGF2ZSBib3VuZCB0byB0aGUgc2Nyb2xsaW5nIG9mIHRoZSBuZXN0ZWQgZWxlbWVudC4gIFxuXG4qL1xuaW50ZXJmYWNlIFBhcmFsbGF4Q29uZmlnIHtcblx0Ly8gdGhlIGNzcyBwcm9wZXJ0eSAoY29udmVydGVkIHRvIGNhbWVsQ2FzZSkgdGhhdCB5b3Ugd2FudCBjaGFuZ2VkIGFsb25nIHdpdGggdGhlXG5cdC8vIHZhbHVlIHlvdSB3YW50IHRvIGFzc2lnbiB0byB0aGUgY3NzIGtleTsgeW91IHNob3VsZCB1c2UgUGFyYWxsYXhDc3MgaWYgeW91J3JlIFxuXHQvLyBqdXN0IGRlZmluaW5nIG9uZSBwcm9wZXJ0eSB3aXRob3V0IHNwZWNpYWwgdmFsdWVzXG5cdGNzc0tleT86IHN0cmluZztcblx0XG5cdC8vIHRoaXMgaXMgdXNlZCB0byBkZWZpbmUgdGhlIGNzcyBwcm9wZXJ0eSB5b3UnZCBsaWtlIHRvIG1vZGlmeSBhcyB5b3Ugc2Nyb2xsXG5cdC8vIGRlZmF1bHQgaXMgYmFja2dyb3VuZFBvc2l0aW9uWVxuXHRwYXJhbGxheENzcz86IHN0cmluZztcblx0XG5cdC8vIHJhdGlvIGRlZmluaW5nIGhvdyBmYXN0LCBzbG93LCBvciB0aGUgZGlyZWN0aW9uIG9mIHRoZSBjaGFuZ2VzIG9uIHNjcm9sbGluZ1xuXHRwYXJhbGxheFJhdGlvPzogbnVtYmVyO1xuXHRcblx0Ly8gdGhpcyBpcyB0aGUgaW5pdGlhbCB2YWx1ZSBpbiBwaXhlbHMgZm9yIHRoZSBwYXJhbGxheENzcyBwcm9wZXJ0eSB5b3UgZGVmaW5lZFxuXHQvLyBiZWZvcmUgb3IsIGlmIHlvdSBkaWRuJ3QgZGVmaW5lIG9uZSwgaXQgZGVmYXVsdHMgdG8gMFxuXHRwYXJhbGxheEluaXRWYWw/OiBudW1iZXI7XG5cdFxuXHQvLyB1c2UgdGhpcyBpZiB5b3Ugd2FudCB0aGUgcGFyYWxsYXggZWZmZWN0IG9ubHkgaWYgdGhlIHBhc3NlZCBpbiBzdGF0ZW1lbnQgaXMgXG5cdC8vIHRydXRoeTsgZGVmYXVsdCBpcyBib29sZWFuIHRydWVcblx0cGFyYWxsYXhJZj86IGFueTtcblx0XG5cdC8vIHRoZSBpZCBmb3IgdGhlIGVsZW1lbnQgb24gdGhlIHBhZ2UgeW91J2QgbGlrZSB0byB0cmFjayB0aGUgc2Nyb2xsaW5nIG9mIGluIHRoZSBcblx0Ly8gY2FzZSB3aGVyZSB0aGUgZWxlbWVudCBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBjdXJyZW50IGNvbXBvbmVudDsgXG5cdC8vIGlmIG5vIGlkIGlzIGRlZmluZWQgYWxvbmcgd2l0aCBubyBzY3JvbGxFbGVtZW50IGJlbG93LCBcblx0Ly8gaXQgZGVmYXVsdHMgdG8gdGhlIHNjcm9sbGluZyBvZiB0aGUgYm9keVxuXHRzY3JvbGxlcklkPzogc3RyaW5nO1xuXHRcblx0Ly8gdGhlIHVwcGVyIGNvbnN0cmFpbnQgZm9yIHRoZSBjc3MgdHJhbnNmb3JtYXRpb25cblx0bWF4VmFsdWU/OiBudW1iZXI7XG5cdFxuXHQvLyB0aGUgbG93ZXIgY29uc3RyYWludCBmb3IgdGhlIGNzcyB0cmFuc2Zvcm1hdGlvblxuXHRtaW5WYWx1ZT86IG51bWJlcjtcblx0XG5cdC8vIHRoZSB1bml0IChlLmcuICdweCcsICdlbScsICclJywgJ3ZoJywgZXRjLikgeW91IHdhbnQgZm9yIHRoZSBwYXJhbGxheCBlZmZlY3QgdG8gdXNlIFxuXHRjc3NVbml0Pzogc3RyaW5nO1xuXHRcblx0Ly8gdGhlIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnQgY29tcG9uZW50IHRoYXQgeW91J2QgbGlrZSB0aGUgZGlyZWN0aXZlIHRvIHRyYWNrIGl0cyBcblx0Ly8gcG9zaXRpb24gYXMgaXQgc2Nyb2xsczsgIGdldHMgYXNzaWduZWQgdG8gdGhlIGJvZHkgaWYgbm90aGluZyBpcyBkZWZpbmVkXG5cdHNjcm9sbEVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcblx0XG5cdC8vIHRoZSBlbGVtZW50IHRoYXQgeW91J2QgbGlrZSB0aGUgZWZmZWN0cyBmcm9tIHNjcm9sbGluZyB0aGUgc2Nyb2xsRWxlbWVudCBhcHBsaWVkIFxuXHQvLyB0bzsgZXNzZW50aWFsbHkgdGhlIGVsZW1lbnQgdGhhdCBtb3ZlcyBhcyB5b3Ugc2Nyb2xsXG5cdHBhcmFsbGF4RWxlbWVudD86IEhUTUxFbGVtZW50O1xuXHRcblx0Ly8gd2hhdCB5b3Ugd2FudCB0byBjYWxsIGl0IHRvIGZpbmQgdGhlIHBhcnRpY3VsYXIgaW5zdGFuY2Ugb2YgaXQgaWYgeW91IG5lZWQgdG8gZGVidWdcblx0bmFtZT86IHN0cmluZztcblx0XG5cdC8vIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGFjdGlvbnMgZHVyaW5nIHNjYWxpbmdcblx0Y2I/KCk6IHZvaWQ7XG5cdFxuXHQvLyBhcmd1bWVudHMgZm9yIG9wdGlvbmFsIGNhbGxiYWNrIGVudGVyZWQgaW50byBhbiBhcnJheTsgZm9yIGNvbnRleHQtc3BlY2lmaWMgXG5cdGNiX2FyZ3M/OiBhbnlbXTtcblx0XG5cdC8vIGNhbGxiYWNrIGNvbnRleHQgaW4gdGhlIGNhc2Ugd2hlcmUgdGhlIGNhbGxiYWNrIGlzIGNvbnRleHQtc3BlY2lmaWNcblx0Y2JfY29udGV4dD86IGFueTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcGFyYWxsYXhdJ1xufSlcblxuY2xhc3MgUGFyYWxsYXggaW1wbGVtZW50cyBPbkluaXQge1xuXHRuYW1lOiBzdHJpbmcgPSAncGFyYWxsYXhEaXJlY3RpdmUnO1xuXHRcbiAgICBASW5wdXQoKSBjb25maWc6IFBhcmFsbGF4Q29uZmlnO1xuXHQvLyB0aGUgZm9sbG93aW5nIEBJbnB1dHMgYXJlIGFsbCBwYXJ0IG9mIHRoZSBjb25maWcgb2JqZWN0LCB3aGljaCBmb3IgXG5cdC8vIGJyZXZpdHkncyBzYWtlLCB5b3UgY2FuIGRvIGEgYnVuY2ggb2Ygb3BlcmF0aW9ucyBpbiBidWxrIGJ5IHBhc3NpbmcgXG5cdC8vIGluIHRoZSBjb25maWcgb2JqZWN0OyBjYXZlYXQgZm9yIHRoaXMgaXMgdGhhdCBhbmd1bGFyIDIgd29uJ3QgcGVybWl0IFxuXHQvLyBtb3JlIHRoYW4gOSBrZXlzIGJlaW5nIHBhc3NlZCBpbiBhbiBvYmplY3QgdmlhIHRoZSB0ZW1wbGF0ZVxuICAgIEBJbnB1dCgpIGNzc0tleTogc3RyaW5nID0gJ2JhY2tncm91bmRQb3NpdGlvbic7XG5cdEBJbnB1dCgpIHBhcmFsbGF4Q3NzOiBzdHJpbmcgPSAnYmFja2dyb3VuZFBvc2l0aW9uWSc7XG5cdEBJbnB1dCgpIHBhcmFsbGF4QXhpczogc3RyaW5nID0gJ1knO1xuICAgIEBJbnB1dCgpIHBhcmFsbGF4UmF0aW86IG51bWJlciA9IC0uNztcbiAgICBASW5wdXQoKSBwYXJhbGxheEluaXRWYWw6IG51bWJlciA9IDA7XG5cdEBJbnB1dCgpIHBhcmFsbGF4SWY6IGFueSA9IHRydWU7XG5cdEBJbnB1dCgpIHNjcm9sbGVySWQ6IHN0cmluZztcblx0QElucHV0KCkgbWF4VmFsdWU6IG51bWJlcjtcblx0QElucHV0KCkgbWluVmFsdWU6IG51bWJlcjtcblx0QElucHV0KCkgY3NzVW5pdDogc3RyaW5nID0gJ3B4Jztcblx0QElucHV0KCkgY2I7XG5cdEBJbnB1dCgpIGNiX2NvbnRleHQ6IGFueSA9IG51bGw7XG5cdEBJbnB1dCgpIGNiX2FyZ3M6IGFueVtdID0gW107XG5cdFxuXHRwYXJhbGxheFN0eWxlczoge30gPSB7fTtcblx0XG4gICAgcHJpdmF0ZSBjc3NWYWx1ZTogc3RyaW5nO1xuICAgIHByaXZhdGUgaXNTcGVjaWFsVmFsOiBib29sZWFuID0gZmFsc2U7XG5cdFxuXHRwcml2YXRlIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcblx0QElucHV0KCkgc2Nyb2xsRWxlbWVudDogYW55O1xuXHRASW5wdXQoKSBwYXJhbGxheEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXHRcblx0cHJpdmF0ZSBldmFsdWF0ZVNjcm9sbCA9ICgpID0+IHtcblx0XHRpZiAodGhpcy5wYXJhbGxheElmKSB7XG5cdFx0XHRsZXQgcmVzdWx0VmFsOiBzdHJpbmc7XG5cdFx0XHRsZXQgY2FsY1ZhbDogbnVtYmVyO1xuXHRcdFx0XG5cdFx0XHRpZiAodGhpcy5zY3JvbGxFbGVtZW50IGluc3RhbmNlb2YgV2luZG93KVxuXHRcdFx0XHRjYWxjVmFsID0gdGhpcy5zY3JvbGxFbGVtZW50LnNjcm9sbFkgKiB0aGlzLnBhcmFsbGF4UmF0aW8gKyB0aGlzLnBhcmFsbGF4SW5pdFZhbDtcblx0XHRcdGVsc2Vcblx0XHRcdFx0Y2FsY1ZhbCA9IHRoaXMuc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AgKiB0aGlzLnBhcmFsbGF4UmF0aW8gKyB0aGlzLnBhcmFsbGF4SW5pdFZhbDtcblx0XHRcdFxuXHRcdFx0aWYgKHRoaXMubWF4VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBjYWxjVmFsID49IHRoaXMubWF4VmFsdWUpXG5cdFx0XHRcdGNhbGNWYWwgPSB0aGlzLm1heFZhbHVlO1xuXHRcdFx0ZWxzZSBpZiAodGhpcy5taW5WYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGNhbGNWYWwgPD0gdGhpcy5taW5WYWx1ZSlcblx0XHRcdFx0Y2FsY1ZhbCA9IHRoaXMubWluVmFsdWU7XG5cdFx0XHRcblx0XHRcdC8vIGFkZGVkIGFmdGVyIHJlYWxpemluZyBvcmlnaW5hbCBzZXR1cCB3YXNuJ3QgY29tcGF0aWJsZSBpbiBGaXJlZm94XG5cdFx0XHQvLyBkZWJ1Z2dlcjtcblx0XHRcdGlmICh0aGlzLmNzc0tleSA9PT0gJ2JhY2tncm91bmRQb3NpdGlvbicpIHtcblx0XHRcdFx0aWYgKHRoaXMucGFyYWxsYXhBeGlzID09PSAnWCcpIHtcblx0XHRcdFx0XHRyZXN1bHRWYWwgPSBjYWxjVmFsICsgdGhpcy5jc3NVbml0ICsgJyAwJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXN1bHRWYWwgPSAnMCAnICsgY2FsY1ZhbCArIHRoaXMuY3NzVW5pdDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmlzU3BlY2lhbFZhbCkge1xuXHRcdFx0XHRyZXN1bHRWYWwgPSB0aGlzLmNzc1ZhbHVlICsgJygnICsgY2FsY1ZhbCArIHRoaXMuY3NzVW5pdCArICcpJztcblx0XHRcdH0gZWxzZSB7IFxuXHRcdFx0XHRyZXN1bHRWYWwgPSBjYWxjVmFsICsgdGhpcy5jc3NVbml0O1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZiAodGhpcy5jYikge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygndGhpcyBzaG91bGQgYmUgcnVubmluZycpXG5cdFx0XHRcdHRoaXMuY2IuYXBwbHkodGhpcy5jYl9jb250ZXh0LCB0aGlzLmNiX2FyZ3MpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0aGlzLnBhcmFsbGF4RWxlbWVudC5zdHlsZVt0aGlzLmNzc0tleV0gPSByZXN1bHRWYWw7XG5cdFx0fVxuXHR9XG5cdFxuXHRuZ09uSW5pdCgpIHtcblx0XHRsZXQgY3NzVmFsQXJyYXk6IHN0cmluZ1tdO1xuXHRcdFxuXHRcdC8vIGNvbnNvbGUubG9nKCclcyBpbml0aWFsaXplZCBvbiBlbGVtZW50JywgdGhpcy5uYW1lLCB0aGlzLmhvc3RFbGVtZW50KTtcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzKTtcblx0XHRcblx0XHRmb3IgKGxldCBwcm9wIGluIHRoaXMuY29uZmlnKSB7IHRoaXNbcHJvcF0gPSB0aGlzLmNvbmZpZ1twcm9wXTsgfVxuXHRcdHRoaXMucGFyYWxsYXhDc3MgPSB0aGlzLnBhcmFsbGF4Q3NzID8gdGhpcy5wYXJhbGxheENzcyA6ICdiYWNrZ3JvdW5kUG9zaXRpb25ZJztcblx0XHRpZiAodGhpcy5wYXJhbGxheENzcy5tYXRjaCgvYmFja2dyb3VuZFBvc2l0aW9uL2kpKSB7XG5cdFx0XHRpZiAodGhpcy5wYXJhbGxheENzcy5zcGxpdCgnYmFja2dyb3VuZFBvc2l0aW9uJylbMV0udG9VcHBlckNhc2UoKSA9PT0gJ1gnKSB7XG5cdFx0XHRcdHRoaXMucGFyYWxsYXhBeGlzID0gJ1gnO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0aGlzLnBhcmFsbGF4Q3NzID0gJ2JhY2tncm91bmRQb3NpdGlvbic7XG5cdFx0fVxuXHRcdFxuICAgICAgICBjc3NWYWxBcnJheSA9IHRoaXMucGFyYWxsYXhDc3Muc3BsaXQoJzonKTtcbiAgICAgICAgdGhpcy5jc3NLZXkgPSBjc3NWYWxBcnJheVswXTtcbiAgICAgICAgdGhpcy5jc3NWYWx1ZSA9IGNzc1ZhbEFycmF5WzFdO1xuXHRcdFxuICAgICAgICB0aGlzLmlzU3BlY2lhbFZhbCA9IHRoaXMuY3NzVmFsdWUgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5jc3NWYWx1ZSkgdGhpcy5jc3NWYWx1ZSA9IHRoaXMuY3NzS2V5O1xuXHRcdFxuICAgICAgICB0aGlzLnBhcmFsbGF4UmF0aW8gPSArdGhpcy5wYXJhbGxheFJhdGlvO1xuICAgICAgICB0aGlzLnBhcmFsbGF4SW5pdFZhbCA9ICt0aGlzLnBhcmFsbGF4SW5pdFZhbDtcblx0XHRcblx0XHR0aGlzLnBhcmFsbGF4RWxlbWVudCA9IHRoaXMucGFyYWxsYXhFbGVtZW50IHx8IHRoaXMuaG9zdEVsZW1lbnQ7XG5cdFx0aWYgKCF0aGlzLnNjcm9sbEVsZW1lbnQpIHtcblx0XHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyYWxsYXhTY3JvbGwnKSlcblx0XHRcdFx0dGhpcy5zY3JvbGxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsbGF4U2Nyb2xsJyk7XG5cdFx0XHRlbHNlIGlmICh0aGlzLnNjcm9sbGVySWQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnNjcm9sbGVySWQpO1xuXHRcdFx0XHRcdGlmICghdGhpcy5zY3JvbGxFbGVtZW50KVxuXHRcdFx0XHRcdFx0dGhyb3coYFRoZSBJRCBwYXNzZWQgdGhyb3VnaCB0aGUgcGFyYWxsYXhDb25maWcgKCcke3RoaXMuc2Nyb2xsZXJJZH0nKSBvYmplY3Qgd2FzIG5vdCBmb3VuZCBpbiB0aGUgZG9jdW1lbnQuICBEZWZhdWx0aW5nIHRvIHRyYWNraW5nIHRoZSBzY3JvbGxpbmcgb2YgdGhlIHdpbmRvdy5gKTtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKGUpO1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsRWxlbWVudCA9IHdpbmRvdztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHRoaXMuc2Nyb2xsRWxlbWVudCA9IHdpbmRvdztcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5ldmFsdWF0ZVNjcm9sbCgpO1xuXHRcdFxuXHRcdHRoaXMuc2Nyb2xsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmV2YWx1YXRlU2Nyb2xsLmJpbmQodGhpcykpO1xuXHR9XG5cdFxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcblx0XHR0aGlzLmhvc3RFbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cblxuXG5leHBvcnQgeyBQYXJhbGxheCwgUGFyYWxsYXhDb25maWcgfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
