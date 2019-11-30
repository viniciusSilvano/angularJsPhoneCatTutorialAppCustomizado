(function(){
    'use strict;'
    angular.module('phonecatApp.windowTest')
    .component('phonecatApp.windowTest',{
        controller:['$window','$scope',function windowTestController($window,$scope){
            vm = this;
            vm.nome = "valor default";
            $scope.nome = vm.nome;
            $window.$scope= $scope;
            console.log($window);
            $window.open('http://localhost:5000/#!phones');
        }],
        templateUrl:'app/window-test/window-test.template.html'
    })
})();