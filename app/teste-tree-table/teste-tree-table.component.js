(function() {
  angular
    .module("phonecatApp.testeTreeTable")
    .component("phonecatApp.testeTreeTable", {
      templateUrl: "app/teste-tree-table/teste-tree-table.html",
      controller: [
        "$scope",
        function($scope) {
          const vm = this;
          vm.dadoTeste = {
            estruturaAdmin: {
              limite: 1,
              estruturasFilhas: [
                {
                  limite: 2,
                  estruturasFilhas: [
                    {
                      limite: 3
                    }
                  ]
                },
                {
                  estruturasFilhas: [
                    {
                      limite: 2,
                      estruturasFilhas: [
                        {
                          limite: 3
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          };
          vm.dadoTeste2 = {
            unidade: {
              nome: "teste",
              limite: 1
            },
            subunidades: [
              {
                nome: "teste 2",
                limite: 1
              },
              {
                nome: "teste 3",
                limite: 2
              }
            ],
            nucleos: [
              {
                nome: "teste 4",
                limite: 1
              },
              {
                nome: "teste 5",
                limite: 2
              }
            ]
          };
        }
      ]
    });
})();
