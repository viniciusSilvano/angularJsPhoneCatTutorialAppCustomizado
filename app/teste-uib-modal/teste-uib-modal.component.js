(function(){
    "use strict";
    angular.
    module('phonecatApp.testeUibModal').
    component('phonecatApp.testeUibModal',{
        templateUrl: "app/teste-uib-modal/teste-uib-modal.template.html",
        controller: ['$uibModal', function testeUibModalController($uibModal){
            const vm = this;
            vm.items = ['item1', 'item2', 'item3'];
            var modalInstance = $uibModal.open({
                templateUrl: 'app/teste-uib-modal/my-modal.template.html',
                controller: 'myModalController',
                resolve: {
                  items: function () {
                    return vm.items;
                  }
                }
            });
        }]
    });
})();