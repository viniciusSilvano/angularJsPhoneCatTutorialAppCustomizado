(function(){
    'use strict';
    angular.
    module('phonecatApp.testeWebSocket').
    component('phonecatApp.testeWebSocketVideo',{
        templateUrl:'app/teste-web-socket/video/teste-web-socket-video.template.html',
        controller:['$scope',function testeWebSocketVideoController($scope){

            const vm = this;
            vm.finalizarSessao = finalizarSessao;
            vm.criarSessao = criarSessao;
            vm.conectado = false;
            vm.chat = '';
            vm.enviarMensagem = enviarMensagem;

            vm.$onInit = function init(){
                criarSessao();
            }

            function enviarMensagem(mensagem){
                vm.teste.send(
                    JSON.stringify({from: '',to: '',content: mensagem})
                ); 
            }

            function finalizarSessao(){
                vm.teste.close();
            }

            function criarSessao(){
                vm.teste = new WebSocket("ws://localhost:8080/TesteStream-0.0.1-SNAPSHOT/video");
                console.log("teste: ", vm.teste);
                definirEventos();
            }

            function definirEventos(){
                vm.teste.onopen = function(event){
                    vm.conectado = true;
                    enviarMensagem("teste");
                    $scope.$apply();
                }
                vm.teste.onmessage = function (event) {
                    console.log(event);
                    /*let mensagem = JSON.parse(event.data);
                    vm.chat =  mensagem.content;
                    $scope.$apply();*/
                }
                vm.teste.onclose = function(event){
                    vm.conectado = false;
                    $scope.$apply();
                }
            }
        }]
    });
})();