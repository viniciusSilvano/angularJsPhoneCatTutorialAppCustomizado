(function() {
  "use strict";
  angular
    .module("phonecatApp.testeJavaProject.livro")
    .component("phonecatApp.testeJavaProject.livro", {
      templateUrl: "app/teste-java-project/livro/livro.template.html",
      controller: [
        "$scope",
        "$http",
        function livroController($scope, $http) {
          const vm = this;

          init();

          function init() {
            $http
              .get("http://localhost:8080/javaTeste/livro")
              .then(response => {
                console.log("livros: ", response);
                vm.livros = response.data;
              }),
              error => {
                console.log("Erro ao recuperar livros");
              };
          }
        }
      ]
    });
})();
