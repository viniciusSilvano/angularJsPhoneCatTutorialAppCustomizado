(function() {
    "use strict";
    angular
      .module("phonecatApp.testeUiMask")
      .component("phonecatApp.testeUiMask", {
        templateUrl: "app/teste-ui-mask/teste-ui-mask.template.html",
        controller: ["$scope", function testeUiMaskController($scope) {

          const vm = this;
          vm.interceptacao = {
            contato: 0
          };
          vm.model ={
            contato: 0
          };

        }]
      });
  })();
  