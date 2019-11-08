(function(){
    'use strict';
    angular
    .module('phonecatApp.phoneList')
    .factory('getTesteStorage',['$window',function($window){
        function teste(){
            $window.sessionStorage.setItem("SavedString",JSON.stringify("I'm a value saved with SessionStorage"));
            $window.sessionStorage.setItem("SavedObject",JSON.stringify({teste: 'teste'}));

            console.log('SavedString: ',$window.sessionStorage.getItem("SavedString"));
            console.log('SavedObject: ', $window.sessionStorage.getItem("SavedObject"));
            let testeObj = $window.sessionStorage.getItem("SavedObject");
            if(!typeof testeObj == 'object'){
                console.log('não é objeto');
            }
            if(typeof testeObj == 'string'){
                console.log('é um texto');
            }
            testeObj = JSON.parse(testeObj);
            if(typeof testeObj == 'object'){
                console.log('é objeto');
            }
            testeObj.teste = 'mudei o nome do teste';
            console.log(testeObj.teste);
        }
                
        return{
            teste: teste
        }
    }]);
})();
