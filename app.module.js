// Define the 'phonecatApp' module
angular.module("phonecatApp", [
  // ...which depends on the 'phoneList' module
  "ngRoute",
  "core",
  "phonecatApp.phoneDetail",
  "phonecatApp.phoneList",
  "ui.bootstrap",
  //testes
  "phonecatApp.teste",
  "phonecatApp.mainTesteFilho",
  "phonecatApp.mainTest",
  "phonecatApp.testeDiretiva",
  "phonecatApp.windowTest",
  "ngTable",
  "phonecatApp.testePaginacao",
  "ui.router",
  "phonecatApp.UiRoute",
  "phonecatApp.testeWebSocket",
  "phonecatApp.testeEditableText",
  "phonecatApp.testeNgTable",
  "phonecatApp.testeForm",
  "phonecatApp.testePolyline",
  "phonecatApp.testeJavaProject"
]);
