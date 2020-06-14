angular.module("phonecatApp").config([
  "$locationProvider",
  "$routeProvider",
  "$stateProvider",
  function config($locationProvider, $routeProvider, $stateProvider) {
    $routeProvider
      .when("/phones", {
        template: "<phonecat-app.phone-list></phonecat-app.phone-list>"
      })
      .when("/phones/:phoneId", {
        template: "<phonecat-app.phone-detail></phonecat-app.phone-detail>"
      })
      .when("/teste", {
        template: "<phonecat-app.teste></phonecat-app.teste>",
        css: "teste/teste.css"
      })
      .when("/mainteste", {
        template: "<phonecat-app.main-test></phonecat-app.main-test>"
      })
      .when("/maintestefilho", {
        template:
          "<phonecat-app.main-teste-filho></phonecat-app.main-teste-filho>"
      })
      .when("/testediretiva", {
        template: "<phonecat-app.teste-diretiva></phonecat-app.teste-diretiva>"
      })
      .when("/testeWindow", {
        template: "<phonecat-app.window-test></phonecat-app.window-test>"
      })
      .when("/testePaginacao", {
        template:
          "<phonecat-app.teste-paginacao></phonecat-app.teste-paginacao>"
      })
      .when("/testeWebSocket", {
        template:
          "<phonecat-app.teste-web-socket></phonecat-app.teste-web-socket>"
      })
      .when("/testeEditableText", {
        template:
          "<phonecat-app.teste-editable-text></phonecat-app.teste-editable-text>"
      })
      .when("/testeNgTable", {
        template: "<phonecat-app.teste-ng-table></phonecat-app.teste-ng-table>"
      })
      .when("/testeForm", {
        template: "<phonecat-app.teste-form></phonecat-app.teste-form>"
      })
      .when("/testePolyline", {
        template: "<phonecat-app.teste-polyline></phonecat-app.teste-polyline>"
      })
      .when("/testeJavaProject", {
        template:
          "<phonecat-app.teste-java-project></phonecat-app.teste-java-project>"
      })
      .when("/testeJavaProject/livro", {
        template:
          "<phonecat-app.teste-java-project.livro></phonecat-app.teste-java-project.livro>"
      })
      .when("/testeJavaProject/profissoes",{
        template:
          "<phonecat-app.teste-java-project.profissoes></phonecat-app.teste-java-project.profissoes>"
      })
      .when("/testeTreeTable", {
        template:
          "<phonecat-app.teste-tree-table></phonecat-app.teste-tree-table>"
      })
      .when("/testeUiMask",{
        template:
          "<phonecat-app.teste-ui-mask></phonecat-app.teste-ui-mask>"
      })
      .when("/testeUibModal",{
        template:
          "<phonecat-app.teste-uib-modal></phonecat-app.teste-uib-modal>"
      })
      .when("/testeWebSocketVideo",{
        template:
          "<phonecat-app.teste-web-socket-video></phonecat-app.teste-web-socket-video>"
      })
      .otherwise("/phones");

    $locationProvider.html5Mode({
        enabled: true
      });
    $locationProvider.hashPrefix('');

    $stateProvider.state({
      name: "testeRouteUi",
      url: "/testerouteui",
      template: "<h3>teste route ui</h3>"
    });
  }
]);
