(function(){
    angular
        .module('phonecatApp.phoneDetail')
            .factory('PhoneDetailFactory', ['$http','$routeParams','$q',function($http,$routeParams,$q){

                var PhoneDetailFactory = this;

                PhoneDetailFactory.getPhoneDetail = function(){
                    let deferred = $q.defer();
                    $http.get('app/phones-data/'+ $routeParams.phoneId +'.json')
                        .then((response) => {
                            deferred.resolve(response.data);
                        },(error) => {deferred.reject('erro ao detalhar phone')});
                    return deferred.promise;
                }

                return PhoneDetailFactory;
            }]);

})();