(function(){
    angular.module('phonecatApp.testeForm')
    .component('phonecatApp.testeForm',{
        controllerAs: 'testeFormController',
        templateUrl:'app/teste-form/teste-form.template.html',
        controller: ['$scope', function testeFormController($scope){
            const testeFormController = this;
            $scope.master = {}
            $scope.update = function(user) {
                $scope.master = angular.copy(user);
            };
    
            $scope.reset = function() {
                $scope.user = angular.copy($scope.master);
            };
        
            $scope.reset();
        }]
    });
})();