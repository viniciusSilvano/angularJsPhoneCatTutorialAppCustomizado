(function(){
    'use strict;'
    angular.module('phonecatApp.windowTest')
    .component('phonecatApp.windowTest',{
        controller:['$window','$scope','windowTestFactory',function windowTestController($window,$scope,windowTestFactory){
            vm = this;
            vm.nome = "valor default";
            $scope.nome = vm.nome;

            console.log($window.windowTestFactory);
            var meuPopUp = $window.open('http://localhost:5000/#!phones');
            meuPopUp.$scope = $scope;
            vm.atualizarNome = function atualizarNome(){
                //$window.windowTestFactory.setNome(vm.nome);
               // meuPopUp.windowTestFactory = windowTestFactory;
               meuPopUp.$scope.nomeTeste = vm.nome;
               meuPopUp.$scope.$apply;
               meuPopUp.document.getElementById('testeWindow').setAttribute('class','testeColor');
               meuPopUp.alert('teste');
            }
        }],
        templateUrl:'app/window-test/window-test.template.html'
    })
})();