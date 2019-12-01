(function(){
    'use strict;'
    angular.module('phonecatApp.sharedFactory',[])
    .factory('windowTestFactory',['$window',function($window){
        var windowTestFactory;

        windowTestFactory = (function(){
            var _nome;
            function windowTestFactory(){
                _nome = "valor default da factory";
            }
            windowTestFactory.prototype.getNome = function getNome(){
                return _nome;
            }

            windowTestFactory.prototype.setNome = function setNome(nome){
                _nome = nome;
            }

            return windowTestFactory
        })();
        if(typeof($window.windowTestFactory) === 'undefined' || $window.windowTestFactory === null){
            $window.windowTestFactory = new windowTestFactory();
        }
        return $window.windowTestFactory;
    }]);
})();