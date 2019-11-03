angular
.module('teste')
.component('teste',{
    templateUrl:'teste/teste.template.html',
    controller:['$scope','$route',function testeController($scope,$route){
        var self = this;
        self.titulo = 'teste';
        console.log($route.current.css);
        self.css = $route.current.css;
        self.mostrarContainer = true;
        self.mostrar = false;
        self.everywhere = angular.element(window.document);
        console.log(self.mostrar);
        self.MostrarToolTip = function (valor){
            console.log('entrou');
            self.mostrar = !self.mostrar;
            $scope.$apply;
            let testeModel = new testeModel();
            console.log(testeModel);
            testeModel.meuAlert;
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