angular
.module('phonecatApp.teste')
.component('phonecatApp.teste',{
    templateUrl:'teste/teste.template.html',
    controller:['$scope','$route',
    function testeController($scope,$route){
        
        var self = this;
        self.css = $route.current.css;
        self.mostrar = false;

        self.MostrarToolTip = function (){
            self.mostrar = !self.mostrar;
            $scope.$apply;
        }
        /*self.everywhere.bind('click', function(event){
            console.log(angular.element(document).find('#tooltipText'));

            if(self.mostrar === true && !isButtonClick){
                self.mostrar = false;
                $scope.$apply();
            }
        });*/
        
    }]
});