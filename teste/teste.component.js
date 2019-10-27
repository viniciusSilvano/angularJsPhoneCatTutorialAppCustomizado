angular
.module('teste')
.component('teste',{
    templateUrl:'teste/teste.template.html',
    controller:['$scope','$route',function testeController($scope,$route){
        var self = this;
        self.titulo = 'teste';
        console.log($route.current.css);
        $scope.css = $route.current.css;
    }]
});