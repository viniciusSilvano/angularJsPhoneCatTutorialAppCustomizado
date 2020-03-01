(function(){
    angular.module('phonecatApp.testeForm')
    .component('phonecatApp.testeForm',{
        controllerAs: 'testeFormController',
        templateUrl:'app/teste-form/teste-form.template.html',
        controller: ['$scope', function testeFormController($scope){
            // regex que valida email: ([a-z])(@)(.*[a-z])(\.com$)
            const testeFormController = this;
            testeFormController.master = {}
            testeFormController.update = function(user) {
               testeFormController.master = angular.copy(user);
            };
    
            testeFormController.reset = function() {
               testeFormController.user = angular.copy(testeFormController.master);
            };
        
            testeFormController.reset();
        }]
    });
})();