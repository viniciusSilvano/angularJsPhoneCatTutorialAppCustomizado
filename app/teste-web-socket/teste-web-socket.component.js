(function(){
    'use strict';
    angular.
    module('phonecatApp.testeWebSocket').
    component('phonecatApp.testeWebSocket',{
        templateUrl:'app/teste-web-socket/teste-web-socket.template.html',
        controller:['$scope',function testeWebSocketController($scope){
            const vm = this;

            vm.finalizarSessao = finalizarSessao;
            vm.criarSessao = criarSessao;
            vm.conectado = false;
            vm.chat = '';
            vm.enviarMensagem = enviarMensagem;

            function enviarMensagem(mensagem){
                vm.teste.send(
                    JSON.stringify({from: '',to: '',content: mensagem})
                ); 
            }

            function finalizarSessao(){
                vm.teste.close();
            }

            function criarSessao(usuario){
                vm.teste = new WebSocket("ws://localhost:8080/myContext/chat/" + usuario);
                console.log(vm.teste);
                definirEventos();
            }

            function definirEventos(){
                vm.teste.onopen = function(event){
                    vm.conectado = true;
                    $scope.$apply();
                }
                vm.teste.onmessage = function (event) {
                    let mensagem = JSON.parse(event.data);
                    vm.chat =  mensagem.content;
                    $scope.$apply();
                }
                vm.teste.onclose = function(event){
                    vm.conectado = false;
                    $scope.$apply();
                }
            }
        }]
    });
})();