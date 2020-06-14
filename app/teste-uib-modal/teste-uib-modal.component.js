(function () {
  "use strict";
  angular.
    module('phonecatApp.testeUibModal').
    component('phonecatApp.testeUibModal', {
      templateUrl: "app/teste-uib-modal/teste-uib-modal.template.html",
      controller: ['$uibModal', function testeUibModalController($uibModal) {
        /*const vm = this;
        vm.items = ['item1', 'item2', 'item3'];*/
        var $ctrl = this;
        $ctrl.items = ['item1', 'item2', 'item3'];
        window.open("https://www.w3schools.com", "_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=4000,height=4000");
        $uibModal.open({
          animation: $ctrl.animationsEnabled,
          ariaLabelledBy: 'modal-title-bottom',
          ariaDescribedBy: 'modal-body-bottom',
          templateUrl: 'stackedModal.html',
          size: 'lg',
          controller: function($scope) {
            $scope.name = 'bottom';  
          }
        });
      }]
    });
})();