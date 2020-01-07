(function(){
    angular.module('phonecatApp.testePaginacao')
    .component('phonecatApp.testePaginacao',{
        templateUrl:'app/teste-paginacao/teste-paginacao.template.html',
        controller: ['NgTableParams',
        function testePaginacaoController(NgTableParams){
           const vm = this;
           vm.data = [
               {nome:'teste1'},
               {nome:'teste2'},
               {nome:'teste3'},
               {nome:'teste4'},
               {nome:'teste5'},
               {nome:'teste6'},
               {nome:'teste7'},
               {nome:'teste8'},
               {nome:'teste9'},
               {nome:'teste10'},
               {nome:'teste11'},
               {nome:'teste12'},
               {nome:'teste13'},
               {nome:'teste14'},
               {nome:'teste15'},
               {nome:'teste16'}, 
               {nome:'teste17'},
               {nome:'teste18'},
               {nome:'teste19'},
               {nome:'teste20'},
               {nome:'teste21'}
            ];
           /*vm.usersTable = new NgTableParams({count: 3}, {
               dataset: vm.users
            });*/       

            vm.usersTable = new NgTableParams({
                page: 1,            // show first page
                count: 10           // count per page
            }, {
                total: vm.data.length, // length of data
                getData: function($defer, params) {
                    vm.users = vm.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
            
                    $defer.resolve($vm.users);
                }
            });

        }]
    });
})();