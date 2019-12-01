(function(){
    'use strict;'
    angular.module('phonecatApp.windowTest')
    .component('phonecatApp.windowTest',{
        controller:['$window','$scope','windowTestFactory',function windowTestController($window,$scope,windowTestFactory){
            vm = this;
            vm.nome = "valor default";
            $scope.nome = vm.nome;
            
            console.log($window.windowTestFactory);
            vm.meuPopUp = $window.open('http://localhost:5000/#!phones');
            vm.meuPopUp.$scope = $scope;
            vm.meuPopUp.$scope.nomeTeste = vm.nome;
            vm.atualizarNome = function atualizarNome(){
                //$window.windowTestFactory.setNome(vm.nome);
               // meuPopUp.windowTestFactory = windowTestFactory;
               vm.meuPopUp.$scope.nomeTeste = vm.nome;
               vm.meuPopUp.$scope.$apply();
               vm.meuPopUp.document.getElementById('testeWindow').setAttribute('class','testeColor');
               vm.meuPopUp.alert('teste');
            }
        }],
        templateUrl:'app/window-test/window-test.template.html'
    })
})();