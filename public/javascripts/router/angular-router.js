app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html'
		})
		.when('/plants/new', {
			templateUrl: 'views/plants/new.html',
			controller: 'plantsController'
		})
		.when('/plants', {
			templateUrl: 'views/plants/index.html',
			controller: 'plantsController'
		})
		//the timeline display
		.when('/chrip', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})
		//the login display
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'authController'
		})
		//the signup display
		.when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'authController'
		})
		.when('/about', {
			templateUrl: 'views/about.html'
		});
});