(function(){
    'use strict';
    angular.
    module('phonecatApp.testePolyline').
    component('phonecatApp.testePolyline',{
        templateUrl:'app/teste-polyline/teste-polyline.template.html',
        controller:['$scope',function testePolylineController($scope){
            const vm = this;
            vm.zoomIn = zoomIn;
            vm.zoomOut = zoomOut;
            vm.points = "10,10 20,0 30,0 30,0 40,0 40,0 50,0 50,0 60,10 120,0 360,0 1280,0";
            vm.tamanhoEixoXPolyline = 0;
            vm.tamanhoEixoYPolyline = 0;
            vm.svgStyle = {
                left: '10%'
            }
            const pontosCarteseanos={
                x: 0,
                y: 1,
                z: 2,
            }

            inicializarTamanhoEixoXPolyline();
            inicializarTamanhoEixoYPolyline();

            function inicializarTamanhoEixoXPolyline(){
                vm.tamanhoEixoXPolyline = 0;
                recuperarPonto(pontosCarteseanos.x);
            }

            function inicializarTamanhoEixoYPolyline(){
                vm.tamanhoEixoYPolyline = 0;
                recuperarPonto(pontosCarteseanos.y);
            }

            function recuperarPonto(valorPonto){
                let paresPontos = vm.points.split(' ');
                paresPontos.forEach(ponto => {
                    let pontos = ponto.split(',');
                    switch(valorPonto){
                        case 0:
                            vm.tamanhoEixoXPolyline += parseInt(pontos[0]);
                            break;
                        case 1:
                            vm.tamanhoEixoYPolyline += parseInt(pontos[1]);
                            break;
                        case 2:
                            break;
                    }
                });
            }

            function zoomIn(){
                realizarZoom('ZoomIn')
            }

            function zoomOut(){
                realizarZoom('ZoomOut');
            }

            function realizarZoom(acao){
                let resultado = "";
                vm.points2 = vm.points.split(' ');
                for(let i = 0; i < vm.points2.length; i++){
                    let temp = vm.points2[i].split(',');
                    temp.forEach(element2 => {
                        if(element2 != ""){
                            let numero = parseInt(element2, 10);
                            switch(acao){
                                case 'ZoomIn':
                                    numero = numero * 2;
                                    break;
                                case 'ZoomOut':
                                    numero = numero/2;
                                    break;
                            }
                            resultado += numero + ",";
                        }else{
                            resultado += " "
                        }
                    });
                }
                vm.points = resultado;
                $scope.$apply();
            }
        }]
    });
})();