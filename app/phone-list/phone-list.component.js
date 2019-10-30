angular.
module('phoneList').
component('phoneList',{
    // Note: The URL is relative to our 'index.html' file
    templateUrl: "app/phone-list/phone-list.template.html",
    controller: ['$http','$scope', 'getPhonesFactory', function PhoneListController($http,$scope,getPhonesFactory){
        let PhoneListController = this;
        PhoneListController.orderProp = 'age';
        PhoneListController.selected;
        PhoneListController.phones;
       /* $http.get('../phones/phones.json').then(function(response){
            PhoneListController.phones = response.data;
        })*/
        //PhoneListController.phones = phonesFactory;
        PhoneListController.getPhonesAutoComplete;
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
