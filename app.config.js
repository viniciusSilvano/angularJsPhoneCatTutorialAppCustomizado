angular
.module('phonecatApp')
.config(['$locationProvider', '$routeProvider',
    function config($locationProvider,$routeProvider){
        $locationProvider.hasPrefix('!');

        $routeProvider
            .when('/phones', {
                template: '<phone-list></phone-list>'
            })
            .when('/phones/:phoneId',{
                template: '<phone-detail></phone-detail>'    
            })
            .otherwise('/phones');
    }
]);