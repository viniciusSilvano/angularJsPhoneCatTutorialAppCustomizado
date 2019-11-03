(function(){
    'use strict';
    angular
    .module('phoneDetail')
    .component('phoneDetail',{
        templateUrl: 'phone-detail/phone-detail.template.html',
        controller: ['$http','$routeParams','$scope',
            function PhoneDetailController($http,$routeParams,$scope){
                var self = this;
                self.phone; 
                $http.get('app/phones-data/' + $routeParams.phoneId +
                '.json').then(function(response){
                        console.log('recebeu o request');
                        self.phone = response.data;
                        console.log(self.phone);
                        $scope.$apply;
                });
            }
        ]
    });
})();