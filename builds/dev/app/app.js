;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app', ['app.templates', 'ui.router', 'app.dashboard', 'app.home'])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard', [])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.home', [])
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app')
        .config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');
    }
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app')
        .run(run);
    run.$inject = ['$rootScope'];

    function run($rootScope) {
        $rootScope.title = "Angularjs State Lifecycle";
        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams, options) {
                console.log("From stateChangeStart", " From: ", fromState.name, " To: ", toState.name)
            })
        $rootScope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams) {
                console.log("From stateChangeSuccess", " From: ", fromState.name, " To: ", toState.name)
            })
        $rootScope.$on('$viewContentLoading',
            function(event, viewConfig) {
                console.log("From viewContentLoading ", viewConfig)
            });
    }
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);
    DashboardController.$inject = ['dep1', '$state'];

    function DashboardController(dep1, $state) {
        var vm = this;
        console.log(dep1);
        console.log("From DashboardController")
        $state.go("home");
    }
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    angular
        .module('app.dashboard')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider.state("dashboard", {
                url: "/dashboard",
                controller: "DashboardController as dashboard",
                // this is the place where to resolve dynamic template
                templateProvider: function($templateCache) {
                    // simplified, expecting that the cache is filled
                    // there should be some checking... and async $http loading if not found
                    return $templateCache.get('components/dashboard/dashboard.template.html');
                },
                resolve: {
                    dep1: function($q, $timeout) {
                        var defer = $q.defer();
                        $timeout(function() {
                            defer.resolve("1st Dependency Loaded.");
                        }, 2000)
                        return defer.promise;
                    }
                }
            })
        });
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    'use strict';
    angular
        .module('app.home')
        .controller('HomeController', HomeController);
    HomeController.$inject = [];

    function HomeController() {
        var vm = this;
        console.log("From HomeController")
    }
}(window, angular, undefined));

;
(function(window, angular, undefined) {
    angular
        .module('app.home')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider.state("home", {
                url: "/home",
                controller: "HomeController as home",
                // this is the place where to resolve dynamic template
                templateProvider: function($templateCache) {
                    // simplified, expecting that the cache is filled
                    // there should be some checking... and async $http loading if not found
                    return $templateCache.get('components/home/home.template.html');
                }
            })
        });
}(window, angular, undefined));
