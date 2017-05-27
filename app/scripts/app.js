(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
         });

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'RoomCtrl as roomController',
            templateUrl: '/templates/home.html'
        })
        .state('modal', {
            url: '/',
            controller: 'ModalCtrl as modalController',
            templateUrl: '/templates/modal.html'
        })






}

    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();
