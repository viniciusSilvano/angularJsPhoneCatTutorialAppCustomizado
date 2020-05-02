(function(){
    angular.module("phonecatApp.testeJavaProject.profissoes")
    .service("ProfissoesService",['$http',function($http){

        vm = this;
        this.listarProfissoes = listarProfissoes;

        function listarProfissoes(){
            return $http({
                method: 'GET',
                url: 'http://localhost:8080/javaTeste/profissoes'
              });
        }
    }]);
})();
