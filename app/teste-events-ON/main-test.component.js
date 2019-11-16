(function(){
    'use strict';

    angular.
    module('phonecatApp.mainTest').
    component('phonecatApp.mainTest',{
        // Note: The URL is relative to our 'index.html' file
        controllerAs: 'MainTestController',
        templateUrl: "app/teste-events-ON/main-test.template.html",
        controller: ['$scope',
        function MainTestController($scope){
            $scope.$on('eventoNoPai',function(){
                console.log('chamando o pai');
            });
        }]
    });
})();