(function(){
    angular.module('phonecatApp.testeForm')
        .directive('customEmailValidation',function(){
            return{
                require:'ngModel',
                link: function(scope,elm,attrs,ctrl){
                    const regex = /([a-z])(@)(.*[a-z])(\.com$)/;
                    ctrl.$validators.customEmailValidation = function(modelValue,viewValue){
                        if(regex.test(modelValue)){
                            return true;
                        }
                        return false;
                    }
                }
            }
        });
})();
