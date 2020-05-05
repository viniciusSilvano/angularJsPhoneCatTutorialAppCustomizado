(function () {
  "use strict";
  angular
    .module("phonecatApp.testeUiMask")
    .component("phonecatApp.testeUiMask", {
      templateUrl: "app/teste-mask/teste-ui-mask.template.html",
      controller: ["$scope", function testeUiMaskController($scope) {

        const vm = this;
        vm.isPhoneValid = isPhoneValid;
        vm.interceptacao = {
          contato: 0
        };
        vm.model = {
          contato: 0
        };

        function isPhoneValid(value) {
          if (value != undefined && value.length > 0) {
            return value.length >= 10 && value.length < 11;
          } else {
            return false;
          }
        }

      }]
    });
})();
