(function(){
'use strict';
    angular.
    module('phonecatApp.phoneList').
    component('phonecatApp.phoneList',{
        // Note: The URL is relative to our 'index.html' file
        controllerAs: 'PhoneList',
        templateUrl: "app/phone-list/phone-list.template.html",
        controller: ['$http','$scope', 'getPhonesFactory','$injector','Phone',
        function PhoneListController($http,$scope,getPhonesFactory,$injector,Phone){
                let PhoneListController = this;
                PhoneListController.phones = Phone.query();
                PhoneListController.orderProp = 'age';
                PhoneListController.selected;
                PhoneListController.phones;
                PhoneListController.getPhonesAutoComplete;

                //Teste storage
                let getTesteStorage = $injector.get('getTesteStorage');
                getTesteStorage.teste();

                /* forma antiga de recuperar os phones agora eu uso rest
                getPhonesFactory.getPhones().then(function(resultado){
                    console.log(resultado);
                    PhoneListController.phones = resultado;
                    PhoneListController.getPhonesAutoComplete = resultado;
                    PhoneListController.estilo = "red";
                    $scope.$apply();
                });
                */      
               

                
        }]
    });
})();
