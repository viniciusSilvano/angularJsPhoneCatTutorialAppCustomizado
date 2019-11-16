(function(){
    'use strict';
    angular
    .module('phonecatApp.phoneDetail')
    .component('phonecatApp.phoneDetail',{
        controllerAs: 'phoneDetail',
        templateUrl: 'phone-detail/phone-detail.template.html',
        controller: ['$scope','PhoneDetailFactory',
            function PhoneDetailController($scope,PhoneDetailFactory){
                var self = this;
                self.phone; 
                getPhoneDetail();

                self.setImage = function setImage(imageUrl){
                    self.mainImageUrl = imageUrl;
                };

                function getPhoneDetail(){
                    PhoneDetailFactory.getPhoneDetail()
                        .then(function(response){
                            self.phone = response;
                        });
                    $scope.$apply;
                }
            }
        ]
    });
})();