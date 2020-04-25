(function(){
    "use strict";
    angular.
    module('phonecatApp.testeNgTable').
    component('phonecatApp.testeNgTable',{
        templateUrl: "app/teste-ng-table/teste-ng-table.template.html",
        controller: ['$scope','NgTableParams',
        function testeNgTableController($scope,NgTableParams){
            const vm = this;
            vm.isChecked = isChecked;
            vm.data = [{name: "Moroni", age: 50, checked: false},
            {name: "Tiancum", age: 43, checked: true},
            {name: "Jacob", age: 27, checked: false}];
            /*{name: "Nephi", age: 29, checked: false},
            {name: "Enos", age: 34, checked: false},
            {name: "Tiancum", age: 43, checked: false},
            {name: "Jacob", age: 27, checked: false},
            {name: "Nephi", age: 29, checked: false},
            {name: "Enos", age: 34, checked: false},
            {name: "Tiancum", age: 43, checked: false},
            {name: "Jacob", age: 27, checked: false},
            {name: "Nephi", age: 29, checked: false},
            {name: "Enos", age: 34, checked: false},
            {name: "Tiancum", age: 43, checked: false},
            {name: "Jacob", age: 27, checked: false},
            {name: "Nephi", age: 29, checked: false},
            {name: "Enos", age: 34, checked: false}];*/

            vm.tableParams = new NgTableParams({}, 
                {  
                    dataset: vm.data
                });

            vm.$doCheck = function(){
                console.log("checking "); 
                validarCheckAll();
            }

            function validarCheckAll(){
                var element = angular.element(document.querySelector('#meuCheckAll'));
                if(element !== undefined && element.length > 0){
                    if(element[0].checked === true){
                        alterarCheckes(true);
                    }else{
                        alterarCheckes(false);
                    }
                }
            }

            function alterarCheckes(valor){
                vm.data.forEach(specificData => {
                    specificData.checked = valor;
                });
            }
            
            function isChecked(user){
                if(!user.name){
                    alert(user.name + " esta checked: " + user.checked);
                }else{
                    alert("??");
                }
            }
        }]
    });
})();