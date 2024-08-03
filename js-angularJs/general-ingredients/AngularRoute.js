upload.config(function($routeProvider, $locationProvider) {
    $routeProvider

    // .when('/home', { templateUrl: 'index.html', controller: 'Load_Data_Controller' })
    // .when('/layout-mansory', { templateUrl: 'index.html', controller: 'Load_Data_Controller' })
    // .when('/posts-demo', { templateUrl: 'content-admin-panel/page/content-posts.html', controller: 'Load_Data_Controller' })



        .otherwise({ redirectTo: '/home' })

    $locationProvider.html5Mode(true);


});