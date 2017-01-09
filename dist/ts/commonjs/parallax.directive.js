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
var core_1 = require('@angular/core');
var Parallax = (function () {
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
exports.Parallax = Parallax;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmFsbGF4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlOzs7Ozs7Ozs7OztBQUVmLHFCQUtpQixlQUFlLENBQUMsQ0FBQTtBQXNFakM7SUFvSEksa0JBQVksT0FBbUI7UUFwSG5DLGlCQXVIQztRQXRIQSxTQUFJLEdBQVcsbUJBQW1CLENBQUM7UUFHbkMsc0VBQXNFO1FBQ3RFLHVFQUF1RTtRQUN2RSx3RUFBd0U7UUFDeEUsOERBQThEO1FBQ2xELFdBQU0sR0FBVyxvQkFBb0IsQ0FBQztRQUN6QyxnQkFBVyxHQUFXLHFCQUFxQixDQUFDO1FBQzVDLFNBQUksR0FBWSxHQUFHLENBQUM7UUFDakIsVUFBSyxHQUFXLENBQUMsRUFBRSxDQUFDO1FBQ3BCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLFlBQU8sR0FBUSxJQUFJLENBQUM7UUFJcEIsWUFBTyxHQUFXLElBQUksQ0FBQztRQUV2QixlQUFVLEdBQVEsSUFBSSxDQUFDO1FBQ3ZCLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFJN0IsbUJBQWMsR0FBTyxFQUFFLENBQUM7UUFHYixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUlqQyxtQkFBYyxHQUFHO1lBQ3hCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLFNBQVMsU0FBUSxDQUFDO2dCQUN0QixJQUFJLE9BQU8sU0FBUSxDQUFDO2dCQUVwQixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsYUFBYSxZQUFZLE1BQU0sQ0FBQztvQkFDeEMsT0FBTyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDdkUsSUFBSTtvQkFDSCxPQUFPLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUV6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SSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztnQkFDN0IsQ0FBQztZQUNGLENBQUM7WUFBQyxJQUFJO2dCQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1FBQ3BDLENBQUM7UUFFRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBL0dFO1FBQUMsWUFBSyxFQUFFOzs0Q0FBQTtJQUtSO1FBQUMsWUFBSyxFQUFFOzs0Q0FBQTtJQUNYO1FBQUMsWUFBSyxFQUFFOztpREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzswQ0FBQTtJQUNMO1FBQUMsWUFBSyxFQUFFOzsyQ0FBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztrREFBQTtJQUNYO1FBQUMsWUFBSyxFQUFFOzs2Q0FBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztnREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs4Q0FBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs4Q0FBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs2Q0FBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzt3Q0FBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztnREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs2Q0FBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzttREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQTFCVDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtTQUN6QixDQUFDOztnQkFBQTtJQXlIRixlQUFDO0FBQUQsQ0F2SEEsQUF1SEMsSUFBQTtBQUdRLGdCQUFRLFlBSGhCO0FBR21DIiwiZmlsZSI6InBhcmFsbGF4LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG5nMi1wYXJhbGxheFxuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIFxuXHRcdCBFbGVtZW50UmVmLCBcblx0XHQgSG9zdCwgXG5cdFx0IElucHV0LFxuXHRcdCBPcHRpb25hbCwgXG5cdFx0IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiBcblRoZXNlIGFyZSBvcHRpb25hbCB2YWx1ZXMgeW91IGNhbiBpbmNsdWRlIGluIHRoZSBjb25maWcgb2JqZWN0IHlvdSBjYW4gcGFzcyBpbnRvIHRoZSBcbmRpcmVjdGl2ZSBmb3IgY3VzdG9tIHByb3BlcnRpZXMgeW91IHdhbnQgdG8gdXNlIHRoaXMgd2l0aC4gIFRoaXMgdG9vbCBjYW4gYmUgdXNlZCBmb3IgXG5tb3JlIHRoYW4ganVzdCB0aGUgcGFyYWxsYXggZWZmZWN0LCBhbmQgaXQgaXMgYWJsZSB0byB0cmFuc2Zvcm0gYW55dGhpbmcgYWJvdXQgdGhlIFxuW3BhcmFsbGF4RWxlbWVudF0gdGhhdCB5b3Ugd2FudCB0byBoYXZlIGJvdW5kIHRvIHRoZSBzY3JvbGxpbmcgb2YgdGhlIG5lc3RlZCBlbGVtZW50LiAgXG5cbiovXG5pbnRlcmZhY2UgUGFyYWxsYXhDb25maWcge1xuXHQvLyB0aGUgY3NzIHByb3BlcnR5IChjb252ZXJ0ZWQgdG8gY2FtZWxDYXNlKSB0aGF0IHlvdSB3YW50IGNoYW5nZWQgYWxvbmcgd2l0aCB0aGVcblx0Ly8gdmFsdWUgeW91IHdhbnQgdG8gYXNzaWduIHRvIHRoZSBjc3Mga2V5OyB5b3Ugc2hvdWxkIHVzZSBjc3NQcm9wZXJ0eSBpZiB5b3UncmUgXG5cdC8vIGp1c3QgZGVmaW5pbmcgb25lIHByb3BlcnR5IHdpdGhvdXQgc3BlY2lhbCB2YWx1ZXNcblx0Y3NzS2V5Pzogc3RyaW5nO1xuXHRcblx0Ly8gdGhpcyBpcyB1c2VkIHRvIGRlZmluZSB0aGUgY3NzIHByb3BlcnR5IHlvdSdkIGxpa2UgdG8gbW9kaWZ5IGFzIHlvdSBzY3JvbGxcblx0Ly8gZGVmYXVsdCBpcyBiYWNrZ3JvdW5kUG9zaXRpb25ZXG5cdGNzc1Byb3BlcnR5Pzogc3RyaW5nO1xuXHRcblx0Ly8gcmF0aW8gZGVmaW5pbmcgaG93IGZhc3QsIHNsb3csIG9yIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGNoYW5nZXMgb24gc2Nyb2xsaW5nXG5cdHJhdGlvPzogbnVtYmVyO1xuXHRcblx0Ly8gdGhpcyBpcyB0aGUgaW5pdGlhbCB2YWx1ZSBpbiBwaXhlbHMgZm9yIHRoZSBjc3NQcm9wZXJ0eSBwcm9wZXJ0eSB5b3UgZGVmaW5lZFxuXHQvLyBiZWZvcmUgb3IsIGlmIHlvdSBkaWRuJ3QgZGVmaW5lIG9uZSwgaXQgZGVmYXVsdHMgdG8gMFxuXHRpbml0aWFsVmFsdWU/OiBudW1iZXI7XG5cdFxuXHQvLyB1c2UgdGhpcyBpZiB5b3Ugd2FudCB0aGUgcGFyYWxsYXggZWZmZWN0IG9ubHkgaWYgdGhlIHBhc3NlZCBpbiBzdGF0ZW1lbnQgaXMgXG5cdC8vIHRydXRoeTsgZGVmYXVsdCBpcyBib29sZWFuIHRydWVcblx0Y2FuTW92ZT86IGFueTtcblx0XG5cdC8vIHRoZSBpZCBmb3IgdGhlIGVsZW1lbnQgb24gdGhlIHBhZ2UgeW91J2QgbGlrZSB0byB0cmFjayB0aGUgc2Nyb2xsaW5nIG9mIGluIHRoZSBcblx0Ly8gY2FzZSB3aGVyZSB0aGUgZWxlbWVudCBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBjdXJyZW50IGNvbXBvbmVudDsgXG5cdC8vIGlmIG5vIGlkIGlzIGRlZmluZWQgYWxvbmcgd2l0aCBubyBzY3JvbGxFbGVtZW50IGJlbG93LCBcblx0Ly8gaXQgZGVmYXVsdHMgdG8gdGhlIHNjcm9sbGluZyBvZiB0aGUgYm9keVxuXHRzY3JvbGxlcklkPzogc3RyaW5nO1xuXHRcblx0Ly8gdGhlIHVwcGVyIGNvbnN0cmFpbnQgZm9yIHRoZSBjc3MgdHJhbnNmb3JtYXRpb25cblx0bWF4VmFsdWU/OiBudW1iZXI7XG5cdFxuXHQvLyB0aGUgbG93ZXIgY29uc3RyYWludCBmb3IgdGhlIGNzcyB0cmFuc2Zvcm1hdGlvblxuXHRtaW5WYWx1ZT86IG51bWJlcjtcblx0XG5cdC8vIHRoZSB1bml0IChlLmcuICdweCcsICdlbScsICclJywgJ3ZoJywgZXRjLikgeW91IHdhbnQgZm9yIHRoZSBwYXJhbGxheCBlZmZlY3QgdG8gdXNlIFxuXHRjc3NVbml0Pzogc3RyaW5nO1xuXHRcblx0Ly8gdGhlIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnQgY29tcG9uZW50IHRoYXQgeW91J2QgbGlrZSB0aGUgZGlyZWN0aXZlIHRvIHRyYWNrIGl0cyBcblx0Ly8gcG9zaXRpb24gYXMgaXQgc2Nyb2xsczsgIGdldHMgYXNzaWduZWQgdG8gdGhlIGJvZHkgaWYgbm90aGluZyBpcyBkZWZpbmVkXG5cdHNjcm9sbEVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcblx0XG5cdC8vIHRoZSBlbGVtZW50IHRoYXQgeW91J2QgbGlrZSB0aGUgZWZmZWN0cyBmcm9tIHNjcm9sbGluZyB0aGUgc2Nyb2xsRWxlbWVudCBhcHBsaWVkIFxuXHQvLyB0bzsgZXNzZW50aWFsbHkgdGhlIGVsZW1lbnQgdGhhdCBtb3ZlcyBhcyB5b3Ugc2Nyb2xsXG5cdHBhcmFsbGF4RWxlbWVudD86IEhUTUxFbGVtZW50O1xuXHRcblx0Ly8gd2hhdCB5b3Ugd2FudCB0byBjYWxsIGl0IHRvIGZpbmQgdGhlIHBhcnRpY3VsYXIgaW5zdGFuY2Ugb2YgaXQgaWYgeW91IG5lZWQgdG8gZGVidWdcblx0bmFtZT86IHN0cmluZztcblx0XG5cdC8vIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGFjdGlvbnMgZHVyaW5nIHNjYWxpbmdcblx0Y2I/KCk6IHZvaWQ7XG5cdFxuXHQvLyBhcmd1bWVudHMgZm9yIG9wdGlvbmFsIGNhbGxiYWNrIGVudGVyZWQgaW50byBhbiBhcnJheTsgZm9yIGNvbnRleHQtc3BlY2lmaWMgXG5cdGNiX2FyZ3M/OiBhbnlbXTtcblx0XG5cdC8vIGNhbGxiYWNrIGNvbnRleHQgaW4gdGhlIGNhc2Ugd2hlcmUgdGhlIGNhbGxiYWNrIGlzIGNvbnRleHQtc3BlY2lmaWNcblx0Y2JfY29udGV4dD86IGFueTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcGFyYWxsYXhdJ1xufSlcblxuY2xhc3MgUGFyYWxsYXggaW1wbGVtZW50cyBPbkluaXQge1xuXHRuYW1lOiBzdHJpbmcgPSAncGFyYWxsYXhEaXJlY3RpdmUnO1xuXHRcbiAgICBASW5wdXQoKSBjb25maWc6IFBhcmFsbGF4Q29uZmlnO1xuXHQvLyB0aGUgZm9sbG93aW5nIEBJbnB1dHMgYXJlIGFsbCBwYXJ0IG9mIHRoZSBjb25maWcgb2JqZWN0LCB3aGljaCBmb3IgXG5cdC8vIGJyZXZpdHkncyBzYWtlLCB5b3UgY2FuIGRvIGEgYnVuY2ggb2Ygb3BlcmF0aW9ucyBpbiBidWxrIGJ5IHBhc3NpbmcgXG5cdC8vIGluIHRoZSBjb25maWcgb2JqZWN0OyBjYXZlYXQgZm9yIHRoaXMgaXMgdGhhdCBhbmd1bGFyIDIgd29uJ3QgcGVybWl0IFxuXHQvLyBtb3JlIHRoYW4gOSBrZXlzIGJlaW5nIHBhc3NlZCBpbiBhbiBvYmplY3QgdmlhIHRoZSB0ZW1wbGF0ZVxuICAgIEBJbnB1dCgpIGNzc0tleTogc3RyaW5nID0gJ2JhY2tncm91bmRQb3NpdGlvbic7XG5cdEBJbnB1dCgpIGNzc1Byb3BlcnR5OiBzdHJpbmcgPSAnYmFja2dyb3VuZFBvc2l0aW9uWSc7XG5cdEBJbnB1dCgpIGF4aXM6ICdYJ3wnWScgPSAnWSc7XG4gICAgQElucHV0KCkgcmF0aW86IG51bWJlciA9IC0uNztcbiAgICBASW5wdXQoKSBpbml0aWFsVmFsdWU6IG51bWJlciA9IDA7XG5cdEBJbnB1dCgpIGNhbk1vdmU6IGFueSA9IHRydWU7XG5cdEBJbnB1dCgpIHNjcm9sbGVySWQ6IHN0cmluZztcblx0QElucHV0KCkgbWF4VmFsdWU6IG51bWJlcjtcblx0QElucHV0KCkgbWluVmFsdWU6IG51bWJlcjtcblx0QElucHV0KCkgY3NzVW5pdDogc3RyaW5nID0gJ3B4Jztcblx0QElucHV0KCkgY2I7XG5cdEBJbnB1dCgpIGNiX2NvbnRleHQ6IGFueSA9IG51bGw7XG5cdEBJbnB1dCgpIGNiX2FyZ3M6IGFueVtdID0gW107XG5cdEBJbnB1dCgpIHNjcm9sbEVsZW1lbnQ6IGFueTtcblx0QElucHV0KCkgcGFyYWxsYXhFbGVtZW50OiBIVE1MRWxlbWVudDtcblx0XG5cdHBhcmFsbGF4U3R5bGVzOiB7fSA9IHt9O1xuXHRcbiAgICBwcml2YXRlIGNzc1ZhbHVlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBpc1NwZWNpYWxWYWw6IGJvb2xlYW4gPSBmYWxzZTtcblx0XG5cdHByaXZhdGUgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXHRcblx0cHJpdmF0ZSBldmFsdWF0ZVNjcm9sbCA9ICgpID0+IHtcblx0XHRpZiAodGhpcy5jYW5Nb3ZlKSB7XG5cdFx0XHRsZXQgcmVzdWx0VmFsOiBzdHJpbmc7XG5cdFx0XHRsZXQgY2FsY1ZhbDogbnVtYmVyO1xuXHRcdFx0XG5cdFx0XHRpZiAodGhpcy5zY3JvbGxFbGVtZW50IGluc3RhbmNlb2YgV2luZG93KVxuXHRcdFx0XHRjYWxjVmFsID0gdGhpcy5zY3JvbGxFbGVtZW50LnNjcm9sbFkgKiB0aGlzLnJhdGlvICsgdGhpcy5pbml0aWFsVmFsdWU7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGNhbGNWYWwgPSB0aGlzLnNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wICogdGhpcy5yYXRpbyArIHRoaXMuaW5pdGlhbFZhbHVlO1xuXHRcdFx0XG5cdFx0XHRpZiAodGhpcy5tYXhWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGNhbGNWYWwgPj0gdGhpcy5tYXhWYWx1ZSlcblx0XHRcdFx0Y2FsY1ZhbCA9IHRoaXMubWF4VmFsdWU7XG5cdFx0XHRlbHNlIGlmICh0aGlzLm1pblZhbHVlICE9PSB1bmRlZmluZWQgJiYgY2FsY1ZhbCA8PSB0aGlzLm1pblZhbHVlKVxuXHRcdFx0XHRjYWxjVmFsID0gdGhpcy5taW5WYWx1ZTtcblx0XHRcdFxuXHRcdFx0Ly8gYWRkZWQgYWZ0ZXIgcmVhbGl6aW5nIG9yaWdpbmFsIHNldHVwIHdhc24ndCBjb21wYXRpYmxlIGluIEZpcmVmb3hcblx0XHRcdC8vIGRlYnVnZ2VyO1xuXHRcdFx0aWYgKHRoaXMuY3NzS2V5ID09PSAnYmFja2dyb3VuZFBvc2l0aW9uJykge1xuXHRcdFx0XHRpZiAodGhpcy5heGlzID09PSAnWCcpIHtcblx0XHRcdFx0ICByZXN1bHRWYWwgPSAnY2FsYyg1MCUgKyAnICsgY2FsY1ZhbCArIHRoaXMuY3NzVW5pdCArICcpIGNlbnRlcic7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCAgcmVzdWx0VmFsID0gJ2NlbnRlciBjYWxjKDUwJSArICcgKyBjYWxjVmFsICsgdGhpcy5jc3NVbml0ICsgJyknO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuaXNTcGVjaWFsVmFsKSB7XG5cdFx0XHRcdHJlc3VsdFZhbCA9IHRoaXMuY3NzVmFsdWUgKyAnKCcgKyBjYWxjVmFsICsgdGhpcy5jc3NVbml0ICsgJyknO1xuXHRcdFx0fSBlbHNlIHsgXG5cdFx0XHRcdHJlc3VsdFZhbCA9IGNhbGNWYWwgKyB0aGlzLmNzc1VuaXQ7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmICh0aGlzLmNiKSB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCd0aGlzIHNob3VsZCBiZSBydW5uaW5nJylcblx0XHRcdFx0dGhpcy5jYi5hcHBseSh0aGlzLmNiX2NvbnRleHQsIHRoaXMuY2JfYXJncyk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdHRoaXMucGFyYWxsYXhFbGVtZW50LnN0eWxlW3RoaXMuY3NzS2V5XSA9IHJlc3VsdFZhbDtcblx0XHR9XG5cdH1cblx0XG5cdHB1YmxpYyBuZ09uSW5pdCgpIHtcblx0XHRsZXQgY3NzVmFsQXJyYXk6IHN0cmluZ1tdO1xuXHRcdFxuXHRcdC8vIGNvbnNvbGUubG9nKCclcyBpbml0aWFsaXplZCBvbiBlbGVtZW50JywgdGhpcy5uYW1lLCB0aGlzLmhvc3RFbGVtZW50KTtcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzKTtcblx0XHRcblx0XHRmb3IgKGxldCBwcm9wIGluIHRoaXMuY29uZmlnKSB7IHRoaXNbcHJvcF0gPSB0aGlzLmNvbmZpZ1twcm9wXTsgfVxuXHRcdHRoaXMuY3NzUHJvcGVydHkgPSB0aGlzLmNzc1Byb3BlcnR5ID8gdGhpcy5jc3NQcm9wZXJ0eSA6ICdiYWNrZ3JvdW5kUG9zaXRpb25ZJztcblx0XHRpZiAodGhpcy5jc3NQcm9wZXJ0eS5tYXRjaCgvYmFja2dyb3VuZFBvc2l0aW9uL2kpKSB7XG5cdFx0XHRpZiAodGhpcy5jc3NQcm9wZXJ0eS5zcGxpdCgnYmFja2dyb3VuZFBvc2l0aW9uJylbMV0udG9VcHBlckNhc2UoKSA9PT0gJ1gnKSB7XG5cdFx0XHRcdHRoaXMuYXhpcyA9ICdYJztcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dGhpcy5jc3NQcm9wZXJ0eSA9ICdiYWNrZ3JvdW5kUG9zaXRpb24nO1xuXHRcdH1cblx0XHRcbiAgICAgICAgY3NzVmFsQXJyYXkgPSB0aGlzLmNzc1Byb3BlcnR5LnNwbGl0KCc6Jyk7XG4gICAgICAgIHRoaXMuY3NzS2V5ID0gY3NzVmFsQXJyYXlbMF07XG4gICAgICAgIHRoaXMuY3NzVmFsdWUgPSBjc3NWYWxBcnJheVsxXTtcblx0XHRcbiAgICAgICAgdGhpcy5pc1NwZWNpYWxWYWwgPSB0aGlzLmNzc1ZhbHVlID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMuY3NzVmFsdWUpIHRoaXMuY3NzVmFsdWUgPSB0aGlzLmNzc0tleTtcblx0XHRcbiAgICAgICAgdGhpcy5yYXRpbyA9ICt0aGlzLnJhdGlvO1xuICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9ICt0aGlzLmluaXRpYWxWYWx1ZTtcblx0XHRcblx0XHR0aGlzLnBhcmFsbGF4RWxlbWVudCA9IHRoaXMucGFyYWxsYXhFbGVtZW50IHx8IHRoaXMuaG9zdEVsZW1lbnQ7XG5cdFx0aWYgKCF0aGlzLnNjcm9sbEVsZW1lbnQpIHtcblx0XHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyYWxsYXhTY3JvbGwnKSlcblx0XHRcdFx0dGhpcy5zY3JvbGxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsbGF4U2Nyb2xsJyk7XG5cdFx0XHRlbHNlIGlmICh0aGlzLnNjcm9sbGVySWQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnNjcm9sbGVySWQpO1xuXHRcdFx0XHRcdGlmICghdGhpcy5zY3JvbGxFbGVtZW50KVxuXHRcdFx0XHRcdFx0dGhyb3coYFRoZSBJRCBwYXNzZWQgdGhyb3VnaCB0aGUgcGFyYWxsYXhDb25maWcgKCcke3RoaXMuc2Nyb2xsZXJJZH0nKSBvYmplY3Qgd2FzIG5vdCBmb3VuZCBpbiB0aGUgZG9jdW1lbnQuICBEZWZhdWx0aW5nIHRvIHRyYWNraW5nIHRoZSBzY3JvbGxpbmcgb2YgdGhlIHdpbmRvdy5gKTtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKGUpO1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsRWxlbWVudCA9IHdpbmRvdztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHRoaXMuc2Nyb2xsRWxlbWVudCA9IHdpbmRvdztcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5ldmFsdWF0ZVNjcm9sbCgpO1xuXHRcdFxuXHRcdHRoaXMuc2Nyb2xsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmV2YWx1YXRlU2Nyb2xsLmJpbmQodGhpcykpO1xuXHR9XG5cdFxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcblx0XHR0aGlzLmhvc3RFbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cblxuXG5leHBvcnQgeyBQYXJhbGxheCwgUGFyYWxsYXhDb25maWcgfTtcbiJdfQ==
