// ng2-parallax
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var Parallax = (function () {
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
exports.Parallax = Parallax;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmFsbGF4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlOzs7Ozs7Ozs7OztBQUVmLHFCQUtpQixlQUFlLENBQUMsQ0FBQTtBQXNFakM7SUFvSEksa0JBQVksT0FBbUI7UUFwSG5DLGlCQXVIQztRQXRIQSxTQUFJLEdBQVcsbUJBQW1CLENBQUM7UUFHbkMsc0VBQXNFO1FBQ3RFLHVFQUF1RTtRQUN2RSx3RUFBd0U7UUFDeEUsOERBQThEO1FBQ2xELFdBQU0sR0FBVyxvQkFBb0IsQ0FBQztRQUN6QyxnQkFBVyxHQUFXLHFCQUFxQixDQUFDO1FBQzVDLGlCQUFZLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGtCQUFhLEdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDNUIsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFDL0IsZUFBVSxHQUFRLElBQUksQ0FBQztRQUl2QixZQUFPLEdBQVcsSUFBSSxDQUFDO1FBRXZCLGVBQVUsR0FBUSxJQUFJLENBQUM7UUFDdkIsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUU3QixtQkFBYyxHQUFPLEVBQUUsQ0FBQztRQUdiLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBTWpDLG1CQUFjLEdBQUc7WUFDeEIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksU0FBUyxTQUFRLENBQUM7Z0JBQ3RCLElBQUksT0FBTyxTQUFRLENBQUM7Z0JBRXBCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxhQUFhLFlBQVksTUFBTSxDQUFDO29CQUN4QyxPQUFPLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDO2dCQUNsRixJQUFJO29CQUNILE9BQU8sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUM7Z0JB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QztvQkFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7Z0JBQzdCLENBQUM7WUFDRixDQUFDO1lBQUMsSUFBSTtnQkFBQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztRQUNwQyxDQUFDO1FBRUQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQS9HRTtRQUFDLFlBQUssRUFBRTs7NENBQUE7SUFLUjtRQUFDLFlBQUssRUFBRTs7NENBQUE7SUFDWDtRQUFDLFlBQUssRUFBRTs7aURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7a0RBQUE7SUFDTDtRQUFDLFlBQUssRUFBRTs7bURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7cURBQUE7SUFDWDtRQUFDLFlBQUssRUFBRTs7Z0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7Z0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7OENBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7OENBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NkNBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7d0NBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7Z0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NkNBQUE7SUFRUjtRQUFDLFlBQUssRUFBRTs7bURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7cURBQUE7SUFqQ1Q7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7U0FDekIsQ0FBQzs7Z0JBQUE7SUF5SEYsZUFBQztBQUFELENBdkhBLEFBdUhDLElBQUE7QUFHUSxnQkFBUSxZQUhoQjtBQUdtQyIsImZpbGUiOiJwYXJhbGxheC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuZzItcGFyYWxsYXhcclxuXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgXHJcblx0XHQgRWxlbWVudFJlZiwgXHJcblx0XHQgSG9zdCwgXHJcblx0XHQgSW5wdXQsXHJcblx0XHQgT3B0aW9uYWwsIFxyXG5cdFx0IE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuLyogXHJcblRoZXNlIGFyZSBvcHRpb25hbCB2YWx1ZXMgeW91IGNhbiBpbmNsdWRlIGluIHRoZSBjb25maWcgb2JqZWN0IHlvdSBjYW4gcGFzcyBpbnRvIHRoZSBcclxuZGlyZWN0aXZlIGZvciBjdXN0b20gcHJvcGVydGllcyB5b3Ugd2FudCB0byB1c2UgdGhpcyB3aXRoLiAgVGhpcyB0b29sIGNhbiBiZSB1c2VkIGZvciBcclxubW9yZSB0aGFuIGp1c3QgdGhlIHBhcmFsbGF4IGVmZmVjdCwgYW5kIGl0IGlzIGFibGUgdG8gdHJhbnNmb3JtIGFueXRoaW5nIGFib3V0IHRoZSBcclxuW3BhcmFsbGF4RWxlbWVudF0gdGhhdCB5b3Ugd2FudCB0byBoYXZlIGJvdW5kIHRvIHRoZSBzY3JvbGxpbmcgb2YgdGhlIG5lc3RlZCBlbGVtZW50LiAgXHJcblxyXG4qL1xyXG5pbnRlcmZhY2UgUGFyYWxsYXhDb25maWcge1xyXG5cdC8vIHRoZSBjc3MgcHJvcGVydHkgKGNvbnZlcnRlZCB0byBjYW1lbENhc2UpIHRoYXQgeW91IHdhbnQgY2hhbmdlZCBhbG9uZyB3aXRoIHRoZVxyXG5cdC8vIHZhbHVlIHlvdSB3YW50IHRvIGFzc2lnbiB0byB0aGUgY3NzIGtleTsgeW91IHNob3VsZCB1c2UgUGFyYWxsYXhDc3MgaWYgeW91J3JlIFxyXG5cdC8vIGp1c3QgZGVmaW5pbmcgb25lIHByb3BlcnR5IHdpdGhvdXQgc3BlY2lhbCB2YWx1ZXNcclxuXHRjc3NLZXk/OiBzdHJpbmc7XHJcblx0XHJcblx0Ly8gdGhpcyBpcyB1c2VkIHRvIGRlZmluZSB0aGUgY3NzIHByb3BlcnR5IHlvdSdkIGxpa2UgdG8gbW9kaWZ5IGFzIHlvdSBzY3JvbGxcclxuXHQvLyBkZWZhdWx0IGlzIGJhY2tncm91bmRQb3NpdGlvbllcclxuXHRwYXJhbGxheENzcz86IHN0cmluZztcclxuXHRcclxuXHQvLyByYXRpbyBkZWZpbmluZyBob3cgZmFzdCwgc2xvdywgb3IgdGhlIGRpcmVjdGlvbiBvZiB0aGUgY2hhbmdlcyBvbiBzY3JvbGxpbmdcclxuXHRwYXJhbGxheFJhdGlvPzogbnVtYmVyO1xyXG5cdFxyXG5cdC8vIHRoaXMgaXMgdGhlIGluaXRpYWwgdmFsdWUgaW4gcGl4ZWxzIGZvciB0aGUgcGFyYWxsYXhDc3MgcHJvcGVydHkgeW91IGRlZmluZWRcclxuXHQvLyBiZWZvcmUgb3IsIGlmIHlvdSBkaWRuJ3QgZGVmaW5lIG9uZSwgaXQgZGVmYXVsdHMgdG8gMFxyXG5cdHBhcmFsbGF4SW5pdFZhbD86IG51bWJlcjtcclxuXHRcclxuXHQvLyB1c2UgdGhpcyBpZiB5b3Ugd2FudCB0aGUgcGFyYWxsYXggZWZmZWN0IG9ubHkgaWYgdGhlIHBhc3NlZCBpbiBzdGF0ZW1lbnQgaXMgXHJcblx0Ly8gdHJ1dGh5OyBkZWZhdWx0IGlzIGJvb2xlYW4gdHJ1ZVxyXG5cdHBhcmFsbGF4SWY/OiBhbnk7XHJcblx0XHJcblx0Ly8gdGhlIGlkIGZvciB0aGUgZWxlbWVudCBvbiB0aGUgcGFnZSB5b3UnZCBsaWtlIHRvIHRyYWNrIHRoZSBzY3JvbGxpbmcgb2YgaW4gdGhlIFxyXG5cdC8vIGNhc2Ugd2hlcmUgdGhlIGVsZW1lbnQgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgY3VycmVudCBjb21wb25lbnQ7IFxyXG5cdC8vIGlmIG5vIGlkIGlzIGRlZmluZWQgYWxvbmcgd2l0aCBubyBzY3JvbGxFbGVtZW50IGJlbG93LCBcclxuXHQvLyBpdCBkZWZhdWx0cyB0byB0aGUgc2Nyb2xsaW5nIG9mIHRoZSBib2R5XHJcblx0c2Nyb2xsZXJJZD86IHN0cmluZztcclxuXHRcclxuXHQvLyB0aGUgdXBwZXIgY29uc3RyYWludCBmb3IgdGhlIGNzcyB0cmFuc2Zvcm1hdGlvblxyXG5cdG1heFZhbHVlPzogbnVtYmVyO1xyXG5cdFxyXG5cdC8vIHRoZSBsb3dlciBjb25zdHJhaW50IGZvciB0aGUgY3NzIHRyYW5zZm9ybWF0aW9uXHJcblx0bWluVmFsdWU/OiBudW1iZXI7XHJcblx0XHJcblx0Ly8gdGhlIHVuaXQgKGUuZy4gJ3B4JywgJ2VtJywgJyUnLCAndmgnLCBldGMuKSB5b3Ugd2FudCBmb3IgdGhlIHBhcmFsbGF4IGVmZmVjdCB0byB1c2UgXHJcblx0Y3NzVW5pdD86IHN0cmluZztcclxuXHRcclxuXHQvLyB0aGUgZWxlbWVudCBpbiB0aGUgY3VycmVudCBjb21wb25lbnQgdGhhdCB5b3UnZCBsaWtlIHRoZSBkaXJlY3RpdmUgdG8gdHJhY2sgaXRzIFxyXG5cdC8vIHBvc2l0aW9uIGFzIGl0IHNjcm9sbHM7ICBnZXRzIGFzc2lnbmVkIHRvIHRoZSBib2R5IGlmIG5vdGhpbmcgaXMgZGVmaW5lZFxyXG5cdHNjcm9sbEVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcclxuXHRcclxuXHQvLyB0aGUgZWxlbWVudCB0aGF0IHlvdSdkIGxpa2UgdGhlIGVmZmVjdHMgZnJvbSBzY3JvbGxpbmcgdGhlIHNjcm9sbEVsZW1lbnQgYXBwbGllZCBcclxuXHQvLyB0bzsgZXNzZW50aWFsbHkgdGhlIGVsZW1lbnQgdGhhdCBtb3ZlcyBhcyB5b3Ugc2Nyb2xsXHJcblx0cGFyYWxsYXhFbGVtZW50PzogSFRNTEVsZW1lbnQ7XHJcblx0XHJcblx0Ly8gd2hhdCB5b3Ugd2FudCB0byBjYWxsIGl0IHRvIGZpbmQgdGhlIHBhcnRpY3VsYXIgaW5zdGFuY2Ugb2YgaXQgaWYgeW91IG5lZWQgdG8gZGVidWdcclxuXHRuYW1lPzogc3RyaW5nO1xyXG5cdFxyXG5cdC8vIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGFjdGlvbnMgZHVyaW5nIHNjYWxpbmdcclxuXHRjYj8oKTogdm9pZDtcclxuXHRcclxuXHQvLyBhcmd1bWVudHMgZm9yIG9wdGlvbmFsIGNhbGxiYWNrIGVudGVyZWQgaW50byBhbiBhcnJheTsgZm9yIGNvbnRleHQtc3BlY2lmaWMgXHJcblx0Y2JfYXJncz86IGFueVtdO1xyXG5cdFxyXG5cdC8vIGNhbGxiYWNrIGNvbnRleHQgaW4gdGhlIGNhc2Ugd2hlcmUgdGhlIGNhbGxiYWNrIGlzIGNvbnRleHQtc3BlY2lmaWNcclxuXHRjYl9jb250ZXh0PzogYW55O1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3BhcmFsbGF4XSdcclxufSlcclxuXHJcbmNsYXNzIFBhcmFsbGF4IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRuYW1lOiBzdHJpbmcgPSAncGFyYWxsYXhEaXJlY3RpdmUnO1xyXG5cdFxyXG4gICAgQElucHV0KCkgY29uZmlnOiBQYXJhbGxheENvbmZpZztcclxuXHQvLyB0aGUgZm9sbG93aW5nIEBJbnB1dHMgYXJlIGFsbCBwYXJ0IG9mIHRoZSBjb25maWcgb2JqZWN0LCB3aGljaCBmb3IgXHJcblx0Ly8gYnJldml0eSdzIHNha2UsIHlvdSBjYW4gZG8gYSBidW5jaCBvZiBvcGVyYXRpb25zIGluIGJ1bGsgYnkgcGFzc2luZyBcclxuXHQvLyBpbiB0aGUgY29uZmlnIG9iamVjdDsgY2F2ZWF0IGZvciB0aGlzIGlzIHRoYXQgYW5ndWxhciAyIHdvbid0IHBlcm1pdCBcclxuXHQvLyBtb3JlIHRoYW4gOSBrZXlzIGJlaW5nIHBhc3NlZCBpbiBhbiBvYmplY3QgdmlhIHRoZSB0ZW1wbGF0ZVxyXG4gICAgQElucHV0KCkgY3NzS2V5OiBzdHJpbmcgPSAnYmFja2dyb3VuZFBvc2l0aW9uJztcclxuXHRASW5wdXQoKSBwYXJhbGxheENzczogc3RyaW5nID0gJ2JhY2tncm91bmRQb3NpdGlvblknO1xyXG5cdEBJbnB1dCgpIHBhcmFsbGF4QXhpczogc3RyaW5nID0gJ1knO1xyXG4gICAgQElucHV0KCkgcGFyYWxsYXhSYXRpbzogbnVtYmVyID0gLS43O1xyXG4gICAgQElucHV0KCkgcGFyYWxsYXhJbml0VmFsOiBudW1iZXIgPSAwO1xyXG5cdEBJbnB1dCgpIHBhcmFsbGF4SWY6IGFueSA9IHRydWU7XHJcblx0QElucHV0KCkgc2Nyb2xsZXJJZDogc3RyaW5nO1xyXG5cdEBJbnB1dCgpIG1heFZhbHVlOiBudW1iZXI7XHJcblx0QElucHV0KCkgbWluVmFsdWU6IG51bWJlcjtcclxuXHRASW5wdXQoKSBjc3NVbml0OiBzdHJpbmcgPSAncHgnO1xyXG5cdEBJbnB1dCgpIGNiO1xyXG5cdEBJbnB1dCgpIGNiX2NvbnRleHQ6IGFueSA9IG51bGw7XHJcblx0QElucHV0KCkgY2JfYXJnczogYW55W10gPSBbXTtcclxuXHRcclxuXHRwYXJhbGxheFN0eWxlczoge30gPSB7fTtcclxuXHRcclxuICAgIHByaXZhdGUgY3NzVmFsdWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgaXNTcGVjaWFsVmFsOiBib29sZWFuID0gZmFsc2U7XHJcblx0XHJcblx0cHJpdmF0ZSBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblx0QElucHV0KCkgc2Nyb2xsRWxlbWVudDogYW55O1xyXG5cdEBJbnB1dCgpIHBhcmFsbGF4RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblx0XHJcblx0cHJpdmF0ZSBldmFsdWF0ZVNjcm9sbCA9ICgpID0+IHtcclxuXHRcdGlmICh0aGlzLnBhcmFsbGF4SWYpIHtcclxuXHRcdFx0bGV0IHJlc3VsdFZhbDogc3RyaW5nO1xyXG5cdFx0XHRsZXQgY2FsY1ZhbDogbnVtYmVyO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHRoaXMuc2Nyb2xsRWxlbWVudCBpbnN0YW5jZW9mIFdpbmRvdylcclxuXHRcdFx0XHRjYWxjVmFsID0gdGhpcy5zY3JvbGxFbGVtZW50LnNjcm9sbFkgKiB0aGlzLnBhcmFsbGF4UmF0aW8gKyB0aGlzLnBhcmFsbGF4SW5pdFZhbDtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGNhbGNWYWwgPSB0aGlzLnNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wICogdGhpcy5wYXJhbGxheFJhdGlvICsgdGhpcy5wYXJhbGxheEluaXRWYWw7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAodGhpcy5tYXhWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGNhbGNWYWwgPj0gdGhpcy5tYXhWYWx1ZSlcclxuXHRcdFx0XHRjYWxjVmFsID0gdGhpcy5tYXhWYWx1ZTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5taW5WYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGNhbGNWYWwgPD0gdGhpcy5taW5WYWx1ZSlcclxuXHRcdFx0XHRjYWxjVmFsID0gdGhpcy5taW5WYWx1ZTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIGFkZGVkIGFmdGVyIHJlYWxpemluZyBvcmlnaW5hbCBzZXR1cCB3YXNuJ3QgY29tcGF0aWJsZSBpbiBGaXJlZm94XHJcblx0XHRcdC8vIGRlYnVnZ2VyO1xyXG5cdFx0XHRpZiAodGhpcy5jc3NLZXkgPT09ICdiYWNrZ3JvdW5kUG9zaXRpb24nKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMucGFyYWxsYXhBeGlzID09PSAnWCcpIHtcclxuXHRcdFx0XHRcdHJlc3VsdFZhbCA9IGNhbGNWYWwgKyB0aGlzLmNzc1VuaXQgKyAnIDAnO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXN1bHRWYWwgPSAnMCAnICsgY2FsY1ZhbCArIHRoaXMuY3NzVW5pdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5pc1NwZWNpYWxWYWwpIHtcclxuXHRcdFx0XHRyZXN1bHRWYWwgPSB0aGlzLmNzc1ZhbHVlICsgJygnICsgY2FsY1ZhbCArIHRoaXMuY3NzVW5pdCArICcpJztcclxuXHRcdFx0fSBlbHNlIHsgXHJcblx0XHRcdFx0cmVzdWx0VmFsID0gY2FsY1ZhbCArIHRoaXMuY3NzVW5pdDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHRoaXMuY2IpIHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygndGhpcyBzaG91bGQgYmUgcnVubmluZycpXHJcblx0XHRcdFx0dGhpcy5jYi5hcHBseSh0aGlzLmNiX2NvbnRleHQsIHRoaXMuY2JfYXJncyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRoaXMucGFyYWxsYXhFbGVtZW50LnN0eWxlW3RoaXMuY3NzS2V5XSA9IHJlc3VsdFZhbDtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRsZXQgY3NzVmFsQXJyYXk6IHN0cmluZ1tdO1xyXG5cdFx0XHJcblx0XHQvLyBjb25zb2xlLmxvZygnJXMgaW5pdGlhbGl6ZWQgb24gZWxlbWVudCcsIHRoaXMubmFtZSwgdGhpcy5ob3N0RWxlbWVudCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzKTtcclxuXHRcdFxyXG5cdFx0Zm9yIChsZXQgcHJvcCBpbiB0aGlzLmNvbmZpZykgeyB0aGlzW3Byb3BdID0gdGhpcy5jb25maWdbcHJvcF07IH1cclxuXHRcdHRoaXMucGFyYWxsYXhDc3MgPSB0aGlzLnBhcmFsbGF4Q3NzID8gdGhpcy5wYXJhbGxheENzcyA6ICdiYWNrZ3JvdW5kUG9zaXRpb25ZJztcclxuXHRcdGlmICh0aGlzLnBhcmFsbGF4Q3NzLm1hdGNoKC9iYWNrZ3JvdW5kUG9zaXRpb24vaSkpIHtcclxuXHRcdFx0aWYgKHRoaXMucGFyYWxsYXhDc3Muc3BsaXQoJ2JhY2tncm91bmRQb3NpdGlvbicpWzFdLnRvVXBwZXJDYXNlKCkgPT09ICdYJykge1xyXG5cdFx0XHRcdHRoaXMucGFyYWxsYXhBeGlzID0gJ1gnO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnBhcmFsbGF4Q3NzID0gJ2JhY2tncm91bmRQb3NpdGlvbic7XHJcblx0XHR9XHJcblx0XHRcclxuICAgICAgICBjc3NWYWxBcnJheSA9IHRoaXMucGFyYWxsYXhDc3Muc3BsaXQoJzonKTtcclxuICAgICAgICB0aGlzLmNzc0tleSA9IGNzc1ZhbEFycmF5WzBdO1xyXG4gICAgICAgIHRoaXMuY3NzVmFsdWUgPSBjc3NWYWxBcnJheVsxXTtcclxuXHRcdFxyXG4gICAgICAgIHRoaXMuaXNTcGVjaWFsVmFsID0gdGhpcy5jc3NWYWx1ZSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMuY3NzVmFsdWUpIHRoaXMuY3NzVmFsdWUgPSB0aGlzLmNzc0tleTtcclxuXHRcdFxyXG4gICAgICAgIHRoaXMucGFyYWxsYXhSYXRpbyA9ICt0aGlzLnBhcmFsbGF4UmF0aW87XHJcbiAgICAgICAgdGhpcy5wYXJhbGxheEluaXRWYWwgPSArdGhpcy5wYXJhbGxheEluaXRWYWw7XHJcblx0XHRcclxuXHRcdHRoaXMucGFyYWxsYXhFbGVtZW50ID0gdGhpcy5wYXJhbGxheEVsZW1lbnQgfHwgdGhpcy5ob3N0RWxlbWVudDtcclxuXHRcdGlmICghdGhpcy5zY3JvbGxFbGVtZW50KSB7XHJcblx0XHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyYWxsYXhTY3JvbGwnKSlcclxuXHRcdFx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyYWxsYXhTY3JvbGwnKTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5zY3JvbGxlcklkKSB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc2Nyb2xsZXJJZCk7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuc2Nyb2xsRWxlbWVudClcclxuXHRcdFx0XHRcdFx0dGhyb3coYFRoZSBJRCBwYXNzZWQgdGhyb3VnaCB0aGUgcGFyYWxsYXhDb25maWcgKCcke3RoaXMuc2Nyb2xsZXJJZH0nKSBvYmplY3Qgd2FzIG5vdCBmb3VuZCBpbiB0aGUgZG9jdW1lbnQuICBEZWZhdWx0aW5nIHRvIHRyYWNraW5nIHRoZSBzY3JvbGxpbmcgb2YgdGhlIHdpbmRvdy5gKTtcclxuXHRcdFx0XHR9IGNhdGNoKGUpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUud2FybihlKTtcclxuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsRWxlbWVudCA9IHdpbmRvdztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB0aGlzLnNjcm9sbEVsZW1lbnQgPSB3aW5kb3c7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMuZXZhbHVhdGVTY3JvbGwoKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5zY3JvbGxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZXZhbHVhdGVTY3JvbGwuYmluZCh0aGlzKSk7XHJcblx0fVxyXG5cdFxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xyXG5cdFx0dGhpcy5ob3N0RWxlbWVudCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IFBhcmFsbGF4LCBQYXJhbGxheENvbmZpZyB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
