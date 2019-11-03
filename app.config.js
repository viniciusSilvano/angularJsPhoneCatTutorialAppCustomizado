angular
.module('phonecatApp')
.config(['$locationProvider', '$routeProvider',
    function config($locationProvider,$routeProvider){
       // $locationProvider.hasPrefix('!');

      $routeProvider.
        when('/phones', {
          template: '<phonecat-app.phone-list></phonecat-app.phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phonecat-app.phone-detail></phonecat-app.phone-detail>'
        }).
        when('/teste',{
          template: '<phonecat-app.teste></phonecat-app.teste>',
          css: 'teste/teste.css'
        }).
        otherwise('/phones');
    }
]);