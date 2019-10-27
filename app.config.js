angular
.module('phonecatApp')
.config(['$locationProvider', '$routeProvider',
    function config($locationProvider,$routeProvider){
        $locationProvider.hasPrefix('!');

<<<<<<< Updated upstream
        $routeProvider
            .when('/phones', {
                template: '<phone-list></phone-list>'
            })
            .when('/phones/:phoneId',{
                template: '<phone-detail></phone-detail>'    
            })
            .otherwise('/phones');
=======
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        /*when('/teste',{
          template: '<teste></teste>'
        }).*/
        otherwise('/phones');
>>>>>>> Stashed changes
    }
]);