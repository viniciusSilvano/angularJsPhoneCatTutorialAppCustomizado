(function(){
    'use strict';
    angular.module('phonecatApp.mainTesteFilho')
    .component('phonecatApp.mainTesteFilho',{
        controllerAs:'mainTesteFilho',
        templateUrl:'app/teste-events-ON/main-test-filho/main-teste-filho.template.html',
        controller:['$scope',
        function MainTesteFilhoController($scope){
            var self = this;
            self.chamarPai = function(){
                console.log("tentando chamar o pai");
                $scope.$emit('eventoNoPai');
            }
        }]
    });
})();