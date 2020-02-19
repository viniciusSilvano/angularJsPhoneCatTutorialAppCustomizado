(function(){
    "use strict";
    angular.
    module('phonecatApp.testeNgTable').
    component('phonecatApp.testeNgTable',{
        controllerAs: 'testeNgTableController',
        templateUrl: "app/teste-ng-table/teste-ng-table.template.html",
        controller: ['$scope','NgTableParams',
        function testeNgTableController($scope,NgTableParams){
            const vm = this;
            vm.data = [{name: "Moroni", age: 50},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34}];

            vm.tableParams = new NgTableParams({}, 
                {  
                    getData: function(params) {
                        let sort = params.isSorting();
                        return vm.data;
                    }
                });
        }]
    });
})();