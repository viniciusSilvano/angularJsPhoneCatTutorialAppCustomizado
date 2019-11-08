(function(){
'use strict';
    angular.
    module('phonecatApp.phoneList').
    component('phonecatApp.phoneList',{
        // Note: The URL is relative to our 'index.html' file
        controllerAs: 'PhoneList',
        templateUrl: "app/phone-list/phone-list.template.html",
        controller: ['$http','$scope', 'getPhonesFactory','getTesteStorage', 
        function PhoneListController($http,$scope,getPhonesFactory,getTesteStorage){
                let PhoneListController = this;
                PhoneListController.orderProp = 'age';
                PhoneListController.selected;
                PhoneListController.phones;
            /* $http.get('../phones/phones.json').then(function(response){
                    PhoneListController.phones = response.data;
                })*/
                //PhoneListController.phones = phonesFactory;
                PhoneListController.getPhonesAutoComplete;
                getTesteStorage.teste();
                getPhonesFactory.getPhones().then(function(resultado){
                    console.log(resultado);
                    PhoneListController.phones = resultado;
                    PhoneListController.getPhonesAutoComplete = resultado;
                    PhoneListController.estilo = "red";
                    $scope.$apply();
                });

                console.log(PhoneListController.phones);
                
        }]
    });
})();
