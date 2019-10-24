angular
.module('phoneDetail')
.component('phoneDetail',{
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http','$routeParams',
        function PhoneDetailController($http,$routeParams){
           var self = this;
            self.phone = 
           $http.get('http://localhost:5000/#!/phones/' + $routeParams.phoneId +
           '.json').then(function(response){
                self.phone = response.data;
           });
        }
    ]
});