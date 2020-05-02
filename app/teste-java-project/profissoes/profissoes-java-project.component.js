(function(){
    angular.module("phonecatApp.testeJavaProject.profissoes")
    .component("phonecatApp.testeJavaProject.profissoes",{
        templateUrl: "app/teste-java-project/profissoes/profissoes-java-project.template.html",
        controller: [
        'ProfissoesService','NgTableParams',
        function profissoesController(ProfissoesService,NgTableParams) {
            const vm = this;
            this.$onInit = init;

            function init(){
                ProfissoesService.listarProfissoes().then(function successCallback(response) {
                    console.log("resposta da profissoes: ", response.data);
                    vm.profissoesDataTable = new NgTableParams({},{  
                        dataset: response.data
                    });
                }, function errorCallback(response) {
                    console.log("erro ao recuperar profissões ", response.data.error);
                });
            }
            
        }]
    });
})();