(function(){
    "use strict";
    angular.
    module('phonecatApp.testeEditableText').
    component('phonecatApp.testeEditableText',{
        // Note: The URL is relative to our 'index.html' file
        controllerAs: 'testeEditableTextController',
        templateUrl: "app/teste-editable-text/teste-editable-text.template.html",
        controller: ['$scope',
        function testeEditableTextController($scope){
            const vm = this;
            vm.dados = [
                {
                    nome: 'teste'
                },
                {   
                    nome: 'teste2'
                }
            ];
            
        }]
    });
})();