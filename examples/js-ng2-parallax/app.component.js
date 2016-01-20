(function(app) {
	app.AppComponent = function AppComponent() {
		this.test = 'does this work?'
	};
	app.AppComponent.annotations = [
		new ng.core.Component({
			selector: 'app'
		}),
		new ng.core.View({
			template: '<div>{{test}}...</div><div parallax></div>',
			directives: [
				app.Parallax
			],
		})
	];	
})(window.app || (window.app = {}));