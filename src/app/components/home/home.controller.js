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
