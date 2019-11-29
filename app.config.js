angular
.module('phonecatApp')
.config(['$locationProvider', '$routeProvider',
    function config($locationProvider,$routeProvider){
      $locationProvider.html5Mode(true).hashPrefix('!');

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
        when('/mainteste',{
          template: '<phonecat-app.main-test></phonecat-app.main-test>'
        }).
        when('/maintestefilho',{
          template:'<phonecat-app.main-teste-filho></phonecat-app.main-teste-filho>'
        }).
        when('/testediretiva',{
          template:'<phonecat-app.teste-diretiva></phonecat-app.teste-diretiva>'
        }).
        otherwise('/phones');
    }
]);