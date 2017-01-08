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
