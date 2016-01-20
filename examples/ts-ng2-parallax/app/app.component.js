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
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                    }),
                    core_1.View({
                        template: "\n\t\t<div>This is working, right?</div>\n\t\t<div parallax></div>\n\t",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFhQ0E7Z0JBQWVDLENBQUNBO2dCQWJqQkQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsS0FBS0E7cUJBQ2ZBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsUUFBUUEsRUFBRUEsd0VBR1RBO3dCQUNEQSxVQUFVQSxFQUFFQTs0QkFDWEEsNkJBQVFBO3lCQUNSQTtxQkFDREEsQ0FBQ0E7O2lDQUdEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBZEEsQUFjQ0EsSUFBQTtZQUVRLHVDQUFZIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsXHJcblx0XHQgVmlldyB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYXJhbGxheCxcclxuXHRcdCBQYXJhbGxheENvbmZpZyB9IGZyb20gJy4vcGFyYWxsYXguZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYXBwJyxcclxufSlcclxuQFZpZXcoe1xyXG5cdHRlbXBsYXRlOiBgXHJcblx0XHQ8ZGl2PlRoaXMgaXMgd29ya2luZywgcmlnaHQ/PC9kaXY+XHJcblx0XHQ8ZGl2IHBhcmFsbGF4PjwvZGl2PlxyXG5cdGAsXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cdFx0UGFyYWxsYXhcclxuXHRdXHJcbn0pXHJcbmNsYXNzIEFwcENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IoKSB7fVxyXG59XHJcblxyXG5leHBvcnQgeyBBcHBDb21wb25lbnQgfTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
