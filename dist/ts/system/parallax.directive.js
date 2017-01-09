// ng2-parallax
System.register(['@angular/core'], function(exports_1, context_1) {
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
                    this.cssProperty = 'backgroundPositionY';
                    this.axis = 'Y';
                    this.ratio = -.7;
                    this.initialValue = 0;
                    this.canMove = true;
                    this.cssUnit = 'px';
                    this.cb_context = null;
                    this.cb_args = [];
                    this.parallaxStyles = {};
                    this.isSpecialVal = false;
                    this.evaluateScroll = function () {
                        if (_this.canMove) {
                            var resultVal = void 0;
                            var calcVal = void 0;
                            if (_this.scrollElement instanceof Window)
                                calcVal = _this.scrollElement.scrollY * _this.ratio + _this.initialValue;
                            else
                                calcVal = _this.scrollElement.scrollTop * _this.ratio + _this.initialValue;
                            if (_this.maxValue !== undefined && calcVal >= _this.maxValue)
                                calcVal = _this.maxValue;
                            else if (_this.minValue !== undefined && calcVal <= _this.minValue)
                                calcVal = _this.minValue;
                            // added after realizing original setup wasn't compatible in Firefox
                            // debugger;
                            if (_this.cssKey === 'backgroundPosition') {
                                if (_this.axis === 'X') {
                                    resultVal = 'calc(50% + ' + calcVal + _this.cssUnit + ') center';
                                }
                                else {
                                    resultVal = 'center calc(50% + ' + calcVal + _this.cssUnit + ')';
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
                    this.cssProperty = this.cssProperty ? this.cssProperty : 'backgroundPositionY';
                    if (this.cssProperty.match(/backgroundPosition/i)) {
                        if (this.cssProperty.split('backgroundPosition')[1].toUpperCase() === 'X') {
                            this.axis = 'X';
                        }
                        this.cssProperty = 'backgroundPosition';
                    }
                    cssValArray = this.cssProperty.split(':');
                    this.cssKey = cssValArray[0];
                    this.cssValue = cssValArray[1];
                    this.isSpecialVal = this.cssValue ? true : false;
                    if (!this.cssValue)
                        this.cssValue = this.cssKey;
                    this.ratio = +this.ratio;
                    this.initialValue = +this.initialValue;
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
                ], Parallax.prototype, "cssProperty", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "axis", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Parallax.prototype, "ratio", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Parallax.prototype, "initialValue", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "canMove", void 0);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmFsbGF4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2RWY7Z0JBb0hJLGtCQUFZLE9BQW1CO29CQXBIbkMsaUJBdUhDO29CQXRIQSxTQUFJLEdBQVcsbUJBQW1CLENBQUM7b0JBR25DLHNFQUFzRTtvQkFDdEUsdUVBQXVFO29CQUN2RSx3RUFBd0U7b0JBQ3hFLDhEQUE4RDtvQkFDbEQsV0FBTSxHQUFXLG9CQUFvQixDQUFDO29CQUN6QyxnQkFBVyxHQUFXLHFCQUFxQixDQUFDO29CQUM1QyxTQUFJLEdBQVksR0FBRyxDQUFDO29CQUNqQixVQUFLLEdBQVcsQ0FBQyxFQUFFLENBQUM7b0JBQ3BCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO29CQUM1QixZQUFPLEdBQVEsSUFBSSxDQUFDO29CQUlwQixZQUFPLEdBQVcsSUFBSSxDQUFDO29CQUV2QixlQUFVLEdBQVEsSUFBSSxDQUFDO29CQUN2QixZQUFPLEdBQVUsRUFBRSxDQUFDO29CQUk3QixtQkFBYyxHQUFPLEVBQUUsQ0FBQztvQkFHYixpQkFBWSxHQUFZLEtBQUssQ0FBQztvQkFJakMsbUJBQWMsR0FBRzt3QkFDeEIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQ2xCLElBQUksU0FBUyxTQUFRLENBQUM7NEJBQ3RCLElBQUksT0FBTyxTQUFRLENBQUM7NEJBRXBCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxhQUFhLFlBQVksTUFBTSxDQUFDO2dDQUN4QyxPQUFPLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDOzRCQUN2RSxJQUFJO2dDQUNILE9BQU8sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUM7NEJB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YWxsYXguZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmcyLXBhcmFsbGF4XG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgXG5cdFx0IEVsZW1lbnRSZWYsIFxuXHRcdCBIb3N0LCBcblx0XHQgSW5wdXQsXG5cdFx0IE9wdGlvbmFsLCBcblx0XHQgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qIFxuVGhlc2UgYXJlIG9wdGlvbmFsIHZhbHVlcyB5b3UgY2FuIGluY2x1ZGUgaW4gdGhlIGNvbmZpZyBvYmplY3QgeW91IGNhbiBwYXNzIGludG8gdGhlIFxuZGlyZWN0aXZlIGZvciBjdXN0b20gcHJvcGVydGllcyB5b3Ugd2FudCB0byB1c2UgdGhpcyB3aXRoLiAgVGhpcyB0b29sIGNhbiBiZSB1c2VkIGZvciBcbm1vcmUgdGhhbiBqdXN0IHRoZSBwYXJhbGxheCBlZmZlY3QsIGFuZCBpdCBpcyBhYmxlIHRvIHRyYW5zZm9ybSBhbnl0aGluZyBhYm91dCB0aGUgXG5bcGFyYWxsYXhFbGVtZW50XSB0aGF0IHlvdSB3YW50IHRvIGhhdmUgYm91bmQgdG8gdGhlIHNjcm9sbGluZyBvZiB0aGUgbmVzdGVkIGVsZW1lbnQuICBcblxuKi9cbmludGVyZmFjZSBQYXJhbGxheENvbmZpZyB7XG5cdC8vIHRoZSBjc3MgcHJvcGVydHkgKGNvbnZlcnRlZCB0byBjYW1lbENhc2UpIHRoYXQgeW91IHdhbnQgY2hhbmdlZCBhbG9uZyB3aXRoIHRoZVxuXHQvLyB2YWx1ZSB5b3Ugd2FudCB0byBhc3NpZ24gdG8gdGhlIGNzcyBrZXk7IHlvdSBzaG91bGQgdXNlIGNzc1Byb3BlcnR5IGlmIHlvdSdyZSBcblx0Ly8ganVzdCBkZWZpbmluZyBvbmUgcHJvcGVydHkgd2l0aG91dCBzcGVjaWFsIHZhbHVlc1xuXHRjc3NLZXk/OiBzdHJpbmc7XG5cdFxuXHQvLyB0aGlzIGlzIHVzZWQgdG8gZGVmaW5lIHRoZSBjc3MgcHJvcGVydHkgeW91J2QgbGlrZSB0byBtb2RpZnkgYXMgeW91IHNjcm9sbFxuXHQvLyBkZWZhdWx0IGlzIGJhY2tncm91bmRQb3NpdGlvbllcblx0Y3NzUHJvcGVydHk/OiBzdHJpbmc7XG5cdFxuXHQvLyByYXRpbyBkZWZpbmluZyBob3cgZmFzdCwgc2xvdywgb3IgdGhlIGRpcmVjdGlvbiBvZiB0aGUgY2hhbmdlcyBvbiBzY3JvbGxpbmdcblx0cmF0aW8/OiBudW1iZXI7XG5cdFxuXHQvLyB0aGlzIGlzIHRoZSBpbml0aWFsIHZhbHVlIGluIHBpeGVscyBmb3IgdGhlIGNzc1Byb3BlcnR5IHByb3BlcnR5IHlvdSBkZWZpbmVkXG5cdC8vIGJlZm9yZSBvciwgaWYgeW91IGRpZG4ndCBkZWZpbmUgb25lLCBpdCBkZWZhdWx0cyB0byAwXG5cdGluaXRpYWxWYWx1ZT86IG51bWJlcjtcblx0XG5cdC8vIHVzZSB0aGlzIGlmIHlvdSB3YW50IHRoZSBwYXJhbGxheCBlZmZlY3Qgb25seSBpZiB0aGUgcGFzc2VkIGluIHN0YXRlbWVudCBpcyBcblx0Ly8gdHJ1dGh5OyBkZWZhdWx0IGlzIGJvb2xlYW4gdHJ1ZVxuXHRjYW5Nb3ZlPzogYW55O1xuXHRcblx0Ly8gdGhlIGlkIGZvciB0aGUgZWxlbWVudCBvbiB0aGUgcGFnZSB5b3UnZCBsaWtlIHRvIHRyYWNrIHRoZSBzY3JvbGxpbmcgb2YgaW4gdGhlIFxuXHQvLyBjYXNlIHdoZXJlIHRoZSBlbGVtZW50IGlzIG5vdCBhdmFpbGFibGUgaW4gdGhlIGN1cnJlbnQgY29tcG9uZW50OyBcblx0Ly8gaWYgbm8gaWQgaXMgZGVmaW5lZCBhbG9uZyB3aXRoIG5vIHNjcm9sbEVsZW1lbnQgYmVsb3csIFxuXHQvLyBpdCBkZWZhdWx0cyB0byB0aGUgc2Nyb2xsaW5nIG9mIHRoZSBib2R5XG5cdHNjcm9sbGVySWQ/OiBzdHJpbmc7XG5cdFxuXHQvLyB0aGUgdXBwZXIgY29uc3RyYWludCBmb3IgdGhlIGNzcyB0cmFuc2Zvcm1hdGlvblxuXHRtYXhWYWx1ZT86IG51bWJlcjtcblx0XG5cdC8vIHRoZSBsb3dlciBjb25zdHJhaW50IGZvciB0aGUgY3NzIHRyYW5zZm9ybWF0aW9uXG5cdG1pblZhbHVlPzogbnVtYmVyO1xuXHRcblx0Ly8gdGhlIHVuaXQgKGUuZy4gJ3B4JywgJ2VtJywgJyUnLCAndmgnLCBldGMuKSB5b3Ugd2FudCBmb3IgdGhlIHBhcmFsbGF4IGVmZmVjdCB0byB1c2UgXG5cdGNzc1VuaXQ/OiBzdHJpbmc7XG5cdFxuXHQvLyB0aGUgZWxlbWVudCBpbiB0aGUgY3VycmVudCBjb21wb25lbnQgdGhhdCB5b3UnZCBsaWtlIHRoZSBkaXJlY3RpdmUgdG8gdHJhY2sgaXRzIFxuXHQvLyBwb3NpdGlvbiBhcyBpdCBzY3JvbGxzOyAgZ2V0cyBhc3NpZ25lZCB0byB0aGUgYm9keSBpZiBub3RoaW5nIGlzIGRlZmluZWRcblx0c2Nyb2xsRWxlbWVudD86IEhUTUxFbGVtZW50O1xuXHRcblx0Ly8gdGhlIGVsZW1lbnQgdGhhdCB5b3UnZCBsaWtlIHRoZSBlZmZlY3RzIGZyb20gc2Nyb2xsaW5nIHRoZSBzY3JvbGxFbGVtZW50IGFwcGxpZWQgXG5cdC8vIHRvOyBlc3NlbnRpYWxseSB0aGUgZWxlbWVudCB0aGF0IG1vdmVzIGFzIHlvdSBzY3JvbGxcblx0cGFyYWxsYXhFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG5cdFxuXHQvLyB3aGF0IHlvdSB3YW50IHRvIGNhbGwgaXQgdG8gZmluZCB0aGUgcGFydGljdWxhciBpbnN0YW5jZSBvZiBpdCBpZiB5b3UgbmVlZCB0byBkZWJ1Z1xuXHRuYW1lPzogc3RyaW5nO1xuXHRcblx0Ly8gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgYWN0aW9ucyBkdXJpbmcgc2NhbGluZ1xuXHRjYj8oKTogdm9pZDtcblx0XG5cdC8vIGFyZ3VtZW50cyBmb3Igb3B0aW9uYWwgY2FsbGJhY2sgZW50ZXJlZCBpbnRvIGFuIGFycmF5OyBmb3IgY29udGV4dC1zcGVjaWZpYyBcblx0Y2JfYXJncz86IGFueVtdO1xuXHRcblx0Ly8gY2FsbGJhY2sgY29udGV4dCBpbiB0aGUgY2FzZSB3aGVyZSB0aGUgY2FsbGJhY2sgaXMgY29udGV4dC1zcGVjaWZpY1xuXHRjYl9jb250ZXh0PzogYW55O1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twYXJhbGxheF0nXG59KVxuXG5jbGFzcyBQYXJhbGxheCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdG5hbWU6IHN0cmluZyA9ICdwYXJhbGxheERpcmVjdGl2ZSc7XG5cdFxuICAgIEBJbnB1dCgpIGNvbmZpZzogUGFyYWxsYXhDb25maWc7XG5cdC8vIHRoZSBmb2xsb3dpbmcgQElucHV0cyBhcmUgYWxsIHBhcnQgb2YgdGhlIGNvbmZpZyBvYmplY3QsIHdoaWNoIGZvciBcblx0Ly8gYnJldml0eSdzIHNha2UsIHlvdSBjYW4gZG8gYSBidW5jaCBvZiBvcGVyYXRpb25zIGluIGJ1bGsgYnkgcGFzc2luZyBcblx0Ly8gaW4gdGhlIGNvbmZpZyBvYmplY3Q7IGNhdmVhdCBmb3IgdGhpcyBpcyB0aGF0IGFuZ3VsYXIgMiB3b24ndCBwZXJtaXQgXG5cdC8vIG1vcmUgdGhhbiA5IGtleXMgYmVpbmcgcGFzc2VkIGluIGFuIG9iamVjdCB2aWEgdGhlIHRlbXBsYXRlXG4gICAgQElucHV0KCkgY3NzS2V5OiBzdHJpbmcgPSAnYmFja2dyb3VuZFBvc2l0aW9uJztcblx0QElucHV0KCkgY3NzUHJvcGVydHk6IHN0cmluZyA9ICdiYWNrZ3JvdW5kUG9zaXRpb25ZJztcblx0QElucHV0KCkgYXhpczogJ1gnfCdZJyA9ICdZJztcbiAgICBASW5wdXQoKSByYXRpbzogbnVtYmVyID0gLS43O1xuICAgIEBJbnB1dCgpIGluaXRpYWxWYWx1ZTogbnVtYmVyID0gMDtcblx0QElucHV0KCkgY2FuTW92ZTogYW55ID0gdHJ1ZTtcblx0QElucHV0KCkgc2Nyb2xsZXJJZDogc3RyaW5nO1xuXHRASW5wdXQoKSBtYXhWYWx1ZTogbnVtYmVyO1xuXHRASW5wdXQoKSBtaW5WYWx1ZTogbnVtYmVyO1xuXHRASW5wdXQoKSBjc3NVbml0OiBzdHJpbmcgPSAncHgnO1xuXHRASW5wdXQoKSBjYjtcblx0QElucHV0KCkgY2JfY29udGV4dDogYW55ID0gbnVsbDtcblx0QElucHV0KCkgY2JfYXJnczogYW55W10gPSBbXTtcblx0QElucHV0KCkgc2Nyb2xsRWxlbWVudDogYW55O1xuXHRASW5wdXQoKSBwYXJhbGxheEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXHRcblx0cGFyYWxsYXhTdHlsZXM6IHt9ID0ge307XG5cdFxuICAgIHByaXZhdGUgY3NzVmFsdWU6IHN0cmluZztcbiAgICBwcml2YXRlIGlzU3BlY2lhbFZhbDogYm9vbGVhbiA9IGZhbHNlO1xuXHRcblx0cHJpdmF0ZSBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cdFxuXHRwcml2YXRlIGV2YWx1YXRlU2Nyb2xsID0gKCkgPT4ge1xuXHRcdGlmICh0aGlzLmNhbk1vdmUpIHtcblx0XHRcdGxldCByZXN1bHRWYWw6IHN0cmluZztcblx0XHRcdGxldCBjYWxjVmFsOiBudW1iZXI7XG5cdFx0XHRcblx0XHRcdGlmICh0aGlzLnNjcm9sbEVsZW1lbnQgaW5zdGFuY2VvZiBXaW5kb3cpXG5cdFx0XHRcdGNhbGNWYWwgPSB0aGlzLnNjcm9sbEVsZW1lbnQuc2Nyb2xsWSAqIHRoaXMucmF0aW8gKyB0aGlzLmluaXRpYWxWYWx1ZTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0Y2FsY1ZhbCA9IHRoaXMuc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AgKiB0aGlzLnJhdGlvICsgdGhpcy5pbml0aWFsVmFsdWU7XG5cdFx0XHRcblx0XHRcdGlmICh0aGlzLm1heFZhbHVlICE9PSB1bmRlZmluZWQgJiYgY2FsY1ZhbCA+PSB0aGlzLm1heFZhbHVlKVxuXHRcdFx0XHRjYWxjVmFsID0gdGhpcy5tYXhWYWx1ZTtcblx0XHRcdGVsc2UgaWYgKHRoaXMubWluVmFsdWUgIT09IHVuZGVmaW5lZCAmJiBjYWxjVmFsIDw9IHRoaXMubWluVmFsdWUpXG5cdFx0XHRcdGNhbGNWYWwgPSB0aGlzLm1pblZhbHVlO1xuXHRcdFx0XG5cdFx0XHQvLyBhZGRlZCBhZnRlciByZWFsaXppbmcgb3JpZ2luYWwgc2V0dXAgd2Fzbid0IGNvbXBhdGlibGUgaW4gRmlyZWZveFxuXHRcdFx0Ly8gZGVidWdnZXI7XG5cdFx0XHRpZiAodGhpcy5jc3NLZXkgPT09ICdiYWNrZ3JvdW5kUG9zaXRpb24nKSB7XG5cdFx0XHRcdGlmICh0aGlzLmF4aXMgPT09ICdYJykge1xuXHRcdFx0XHQgIHJlc3VsdFZhbCA9ICdjYWxjKDUwJSArICcgKyBjYWxjVmFsICsgdGhpcy5jc3NVbml0ICsgJykgY2VudGVyJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ICByZXN1bHRWYWwgPSAnY2VudGVyIGNhbGMoNTAlICsgJyArIGNhbGNWYWwgKyB0aGlzLmNzc1VuaXQgKyAnKSc7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5pc1NwZWNpYWxWYWwpIHtcblx0XHRcdFx0cmVzdWx0VmFsID0gdGhpcy5jc3NWYWx1ZSArICcoJyArIGNhbGNWYWwgKyB0aGlzLmNzc1VuaXQgKyAnKSc7XG5cdFx0XHR9IGVsc2UgeyBcblx0XHRcdFx0cmVzdWx0VmFsID0gY2FsY1ZhbCArIHRoaXMuY3NzVW5pdDtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYgKHRoaXMuY2IpIHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3RoaXMgc2hvdWxkIGJlIHJ1bm5pbmcnKVxuXHRcdFx0XHR0aGlzLmNiLmFwcGx5KHRoaXMuY2JfY29udGV4dCwgdGhpcy5jYl9hcmdzKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dGhpcy5wYXJhbGxheEVsZW1lbnQuc3R5bGVbdGhpcy5jc3NLZXldID0gcmVzdWx0VmFsO1xuXHRcdH1cblx0fVxuXHRcblx0cHVibGljIG5nT25Jbml0KCkge1xuXHRcdGxldCBjc3NWYWxBcnJheTogc3RyaW5nW107XG5cdFx0XG5cdFx0Ly8gY29uc29sZS5sb2coJyVzIGluaXRpYWxpemVkIG9uIGVsZW1lbnQnLCB0aGlzLm5hbWUsIHRoaXMuaG9zdEVsZW1lbnQpO1xuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuXHRcdFxuXHRcdGZvciAobGV0IHByb3AgaW4gdGhpcy5jb25maWcpIHsgdGhpc1twcm9wXSA9IHRoaXMuY29uZmlnW3Byb3BdOyB9XG5cdFx0dGhpcy5jc3NQcm9wZXJ0eSA9IHRoaXMuY3NzUHJvcGVydHkgPyB0aGlzLmNzc1Byb3BlcnR5IDogJ2JhY2tncm91bmRQb3NpdGlvblknO1xuXHRcdGlmICh0aGlzLmNzc1Byb3BlcnR5Lm1hdGNoKC9iYWNrZ3JvdW5kUG9zaXRpb24vaSkpIHtcblx0XHRcdGlmICh0aGlzLmNzc1Byb3BlcnR5LnNwbGl0KCdiYWNrZ3JvdW5kUG9zaXRpb24nKVsxXS50b1VwcGVyQ2FzZSgpID09PSAnWCcpIHtcblx0XHRcdFx0dGhpcy5heGlzID0gJ1gnO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0aGlzLmNzc1Byb3BlcnR5ID0gJ2JhY2tncm91bmRQb3NpdGlvbic7XG5cdFx0fVxuXHRcdFxuICAgICAgICBjc3NWYWxBcnJheSA9IHRoaXMuY3NzUHJvcGVydHkuc3BsaXQoJzonKTtcbiAgICAgICAgdGhpcy5jc3NLZXkgPSBjc3NWYWxBcnJheVswXTtcbiAgICAgICAgdGhpcy5jc3NWYWx1ZSA9IGNzc1ZhbEFycmF5WzFdO1xuXHRcdFxuICAgICAgICB0aGlzLmlzU3BlY2lhbFZhbCA9IHRoaXMuY3NzVmFsdWUgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5jc3NWYWx1ZSkgdGhpcy5jc3NWYWx1ZSA9IHRoaXMuY3NzS2V5O1xuXHRcdFxuICAgICAgICB0aGlzLnJhdGlvID0gK3RoaXMucmF0aW87XG4gICAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gK3RoaXMuaW5pdGlhbFZhbHVlO1xuXHRcdFxuXHRcdHRoaXMucGFyYWxsYXhFbGVtZW50ID0gdGhpcy5wYXJhbGxheEVsZW1lbnQgfHwgdGhpcy5ob3N0RWxlbWVudDtcblx0XHRpZiAoIXRoaXMuc2Nyb2xsRWxlbWVudCkge1xuXHRcdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJhbGxheFNjcm9sbCcpKVxuXHRcdFx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyYWxsYXhTY3JvbGwnKTtcblx0XHRcdGVsc2UgaWYgKHRoaXMuc2Nyb2xsZXJJZCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc2Nyb2xsZXJJZCk7XG5cdFx0XHRcdFx0aWYgKCF0aGlzLnNjcm9sbEVsZW1lbnQpXG5cdFx0XHRcdFx0XHR0aHJvdyhgVGhlIElEIHBhc3NlZCB0aHJvdWdoIHRoZSBwYXJhbGxheENvbmZpZyAoJyR7dGhpcy5zY3JvbGxlcklkfScpIG9iamVjdCB3YXMgbm90IGZvdW5kIGluIHRoZSBkb2N1bWVudC4gIERlZmF1bHRpbmcgdG8gdHJhY2tpbmcgdGhlIHNjcm9sbGluZyBvZiB0aGUgd2luZG93LmApO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oZSk7XG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxFbGVtZW50ID0gd2luZG93O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgdGhpcy5zY3JvbGxFbGVtZW50ID0gd2luZG93O1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLmV2YWx1YXRlU2Nyb2xsKCk7XG5cdFx0XG5cdFx0dGhpcy5zY3JvbGxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZXZhbHVhdGVTY3JvbGwuYmluZCh0aGlzKSk7XG5cdH1cblx0XG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuXHRcdHRoaXMuaG9zdEVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7IFBhcmFsbGF4LCBQYXJhbGxheENvbmZpZyB9O1xuIl19
