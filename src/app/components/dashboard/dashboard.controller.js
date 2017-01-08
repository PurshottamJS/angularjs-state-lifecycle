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
