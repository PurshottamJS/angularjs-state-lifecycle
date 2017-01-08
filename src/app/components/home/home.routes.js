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
