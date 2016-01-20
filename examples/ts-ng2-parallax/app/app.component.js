System.register(['angular2/core', './parallax.directive'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, parallax_directive_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (parallax_directive_1_1) {
                parallax_directive_1 = parallax_directive_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.parallaxFn = function (color, maxVal, minVal, otherValue) {
                    if (maxVal === void 0) { maxVal = 250; }
                    if (minVal === void 0) { minVal = 0; }
                    if (otherValue === void 0) { otherValue = 0; }
                    var defaultVals = ['r', 'g', 'b', 'all'], result = 'rgb(';
                    if (defaultVals.indexOf(color.toLowerCase()) !== -1) {
                        if (minVal < 0)
                            minVal = 0;
                        if (maxVal > 250)
                            maxVal = 250;
                        var newValue = Math.round(Math.random() * maxVal);
                        if (newValue < minVal)
                            newValue = minVal;
                        else if (newValue > maxVal)
                            newValue = maxVal;
                        if (color.toLowerCase() == 'r') {
                            result += newValue + ',' + otherValue + ',' + otherValue + ')';
                        }
                        else if (color.toLowerCase() == 'g') {
                            result += otherValue + ',' + newValue + ',' + otherValue + ')';
                        }
                        else if (color.toLowerCase() == 'b') {
                            result += otherValue + ',' + otherValue + ',' + newValue + ')';
                        }
                        else {
                            result += newValue + ',' + newValue + ',' + newValue + ')';
                        }
                        this.style.backgroundColor = result;
                        if (newValue < 70)
                            this.style.color = 'white';
                        else
                            this.style.color = 'black';
                    }
                    else {
                        try {
                            throw ('The color entered as a cb argument is incorrect it must be a value found in defaultVals');
                        }
                        catch (e) {
                            console.warn(e);
                        }
                    }
                };
                ;
                ;
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                    }),
                    core_1.View({
                        templateUrl: 'app/app.html',
                        directives: [
                            parallax_directive_1.Parallax
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50LnBhcmFsbGF4Rm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQWtEQ0E7Z0JBQWVDLENBQUNBO2dCQXhDaEJELGlDQUFVQSxHQUFWQSxVQUFXQSxLQUFhQSxFQUFFQSxNQUFvQkEsRUFBRUEsTUFBa0JBLEVBQUVBLFVBQXNCQTtvQkFBaEVFLHNCQUFvQkEsR0FBcEJBLFlBQW9CQTtvQkFBRUEsc0JBQWtCQSxHQUFsQkEsVUFBa0JBO29CQUFFQSwwQkFBc0JBLEdBQXRCQSxjQUFzQkE7b0JBQ3pGQSxJQUFJQSxXQUFXQSxHQUFhQSxDQUFDQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxLQUFLQSxDQUFDQSxFQUNqREEsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0E7b0JBQ2pCQSxFQUFFQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDckRBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBOzRCQUNkQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQTt3QkFDWkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsR0FBR0EsR0FBR0EsQ0FBQ0E7NEJBQ2hCQSxNQUFNQSxHQUFHQSxHQUFHQSxDQUFDQTt3QkFFZEEsSUFBSUEsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7d0JBRWxEQSxFQUFFQSxDQUFDQSxDQUFDQSxRQUFRQSxHQUFHQSxNQUFNQSxDQUFDQTs0QkFDckJBLFFBQVFBLEdBQUdBLE1BQU1BLENBQUNBO3dCQUNuQkEsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0E7NEJBQzFCQSxRQUFRQSxHQUFHQSxNQUFNQSxDQUFDQTt3QkFFbkJBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLEVBQUVBLElBQUlBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBOzRCQUNoQ0EsTUFBTUEsSUFBSUEsUUFBUUEsR0FBR0EsR0FBR0EsR0FBR0EsVUFBVUEsR0FBR0EsR0FBR0EsR0FBR0EsVUFBVUEsR0FBR0EsR0FBR0EsQ0FBQ0E7d0JBQ2hFQSxDQUFDQTt3QkFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsRUFBRUEsSUFBSUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ3ZDQSxNQUFNQSxJQUFJQSxVQUFVQSxHQUFHQSxHQUFHQSxHQUFHQSxRQUFRQSxHQUFHQSxHQUFHQSxHQUFHQSxVQUFVQSxHQUFHQSxHQUFHQSxDQUFDQTt3QkFDaEVBLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxXQUFXQSxFQUFFQSxJQUFJQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDdkNBLE1BQU1BLElBQUlBLFVBQVVBLEdBQUdBLEdBQUdBLEdBQUdBLFVBQVVBLEdBQUdBLEdBQUdBLEdBQUdBLFFBQVFBLEdBQUdBLEdBQUdBLENBQUNBO3dCQUNoRUEsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLENBQUNBOzRCQUNQQSxNQUFNQSxJQUFJQSxRQUFRQSxHQUFHQSxHQUFHQSxHQUFHQSxRQUFRQSxHQUFHQSxHQUFHQSxHQUFHQSxRQUFRQSxHQUFHQSxHQUFHQSxDQUFBQTt3QkFDM0RBLENBQUNBO3dCQUVEQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxlQUFlQSxHQUFHQSxNQUFNQSxDQUFDQTt3QkFFcENBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLEdBQUdBLEVBQUVBLENBQUNBOzRCQUNqQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsR0FBR0EsT0FBT0EsQ0FBQ0E7d0JBQzVCQSxJQUFJQTs0QkFBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsR0FBR0EsT0FBT0EsQ0FBQ0E7b0JBQ2pDQSxDQUFDQTtvQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7d0JBQ1BBLElBQUlBLENBQUNBOzRCQUNKQSxNQUFNQSxDQUFDQSx5RkFBeUZBLENBQUNBLENBQUFBO3dCQUNsR0EsQ0FBRUE7d0JBQUFBLEtBQUtBLENBQUFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBOzRCQUNYQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDakJBLENBQUNBO29CQUNGQSxDQUFDQTtnQkFDRkEsQ0FBQ0E7OztnQkFoREZGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLEtBQUtBO3FCQUNmQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUVBLGNBQWNBO3dCQUMzQkEsVUFBVUEsRUFBRUE7NEJBQ1hBLDZCQUFRQTt5QkFDUkE7cUJBQ0RBLENBQUNBOztpQ0EyQ0RBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FuREEsQUFtRENBLElBQUE7WUFFUSx1Q0FBWSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LFxyXG5cdFx0IFZpZXcgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgUGFyYWxsYXgsXHJcblx0XHQgUGFyYWxsYXhDb25maWcgfSBmcm9tICcuL3BhcmFsbGF4LmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2FwcCcsXHJcbn0pXHJcbkBWaWV3KHtcclxuXHR0ZW1wbGF0ZVVybDogJ2FwcC9hcHAuaHRtbCcsXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cdFx0UGFyYWxsYXhcclxuXHRdXHJcbn0pXHJcbmNsYXNzIEFwcENvbXBvbmVudCB7XHJcblx0cGFyYWxsYXhGbihjb2xvcjogc3RyaW5nLCBtYXhWYWw6IG51bWJlciA9IDI1MCwgbWluVmFsOiBudW1iZXIgPSAwLCBvdGhlclZhbHVlOiBudW1iZXIgPSAwKSB7XHJcblx0XHRsZXQgZGVmYXVsdFZhbHM6IHN0cmluZ1tdID0gWydyJywgJ2cnLCAnYicsICdhbGwnXSxcclxuXHRcdFx0cmVzdWx0ID0gJ3JnYignO1xyXG5cdFx0aWYgKGRlZmF1bHRWYWxzLmluZGV4T2YoY29sb3IudG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XHJcblx0XHRcdGlmIChtaW5WYWwgPCAwKVxyXG5cdFx0XHRcdG1pblZhbCA9IDA7XHJcblx0XHRcdGlmIChtYXhWYWwgPiAyNTApXHJcblx0XHRcdFx0bWF4VmFsID0gMjUwO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IG5ld1ZhbHVlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbWF4VmFsKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChuZXdWYWx1ZSA8IG1pblZhbClcclxuXHRcdFx0XHRuZXdWYWx1ZSA9IG1pblZhbDtcclxuXHRcdFx0ZWxzZSBpZiAobmV3VmFsdWUgPiBtYXhWYWwpXHJcblx0XHRcdFx0bmV3VmFsdWUgPSBtYXhWYWw7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoY29sb3IudG9Mb3dlckNhc2UoKSA9PSAncicpIHtcclxuXHRcdFx0XHRyZXN1bHQgKz0gbmV3VmFsdWUgKyAnLCcgKyBvdGhlclZhbHVlICsgJywnICsgb3RoZXJWYWx1ZSArICcpJztcclxuXHRcdFx0fSBlbHNlIGlmIChjb2xvci50b0xvd2VyQ2FzZSgpID09ICdnJykge1xyXG5cdFx0XHRcdHJlc3VsdCArPSBvdGhlclZhbHVlICsgJywnICsgbmV3VmFsdWUgKyAnLCcgKyBvdGhlclZhbHVlICsgJyknO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGNvbG9yLnRvTG93ZXJDYXNlKCkgPT0gJ2InKSB7XHJcblx0XHRcdFx0cmVzdWx0ICs9IG90aGVyVmFsdWUgKyAnLCcgKyBvdGhlclZhbHVlICsgJywnICsgbmV3VmFsdWUgKyAnKSc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0ICs9IG5ld1ZhbHVlICsgJywnICsgbmV3VmFsdWUgKyAnLCcgKyBuZXdWYWx1ZSArICcpJ1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJlc3VsdDtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChuZXdWYWx1ZSA8IDcwKVxyXG5cdFx0XHRcdHRoaXMuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG5cdFx0XHRlbHNlIHRoaXMuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHR0aHJvdyAoJ1RoZSBjb2xvciBlbnRlcmVkIGFzIGEgY2IgYXJndW1lbnQgaXMgaW5jb3JyZWN0IGl0IG11c3QgYmUgYSB2YWx1ZSBmb3VuZCBpbiBkZWZhdWx0VmFscycpXHJcblx0XHRcdH0gY2F0Y2goZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUud2FybihlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKSB7fTtcclxufVxyXG5cclxuZXhwb3J0IHsgQXBwQ29tcG9uZW50IH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
