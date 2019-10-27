angular
.module('phoneDetail')
.component('phoneDetail',{
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http','$routeParams',
        function PhoneDetailController($http,$routeParams){
           var self = this;
            self.phone = 
           $http.get('http://localhost:5000/#!/app/#!/phones-data' + $routeParams.phoneId +
           '.json').then(function(response){
                console.log('recebeu o request');
                self.phone = response.data;
                console.log(phone);
           });
        }
    ]
});