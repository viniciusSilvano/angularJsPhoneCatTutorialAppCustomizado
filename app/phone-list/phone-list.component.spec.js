describe('phonecatApp.phoneList', function() {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(module('phonecatApp.phoneList'));
  
    // Test the controller
    describe('PhoneListController', function() {
      var ctrl;
  
      beforeEach(inject(function($componentController) {
        ctrl = $componentController('phonecatApp.phoneList');
      }));
  
      it('should create a `phones` model with 3 phones', function() {
        expect(ctrl.phones.length).toBe(3);
      });
  
      it('should set a default value for the `orderProp` model', function() {
        expect(ctrl.orderProp).toBe('age');
      });
  
    });
  
  });