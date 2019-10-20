import { browser, element } from "protractor";

describe('PhoeneCat Application', function(){
    describe('phoneList',function(){
        browser.get('index.html');
    });

    it('should filter the phone list as a user types into the search box',
    function(){
        var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
        var query = element(by.model('$ctrl.query'));

        expect(phoneList.count()).toBe(3);

        query.sendKeys('nexus');
        expect(phoneList.count()).toBe(1);

        query.clear();
        query.sendKeys('motorola');
        expect(phoneList.count()).toBe(2);
    });

    describe('phoneList', function() {

        // Load the module that contains the `phoneList` component before each test
        beforeEach(module('phoneList'));
      
        // Test the controller
        describe('PhoneListController', function() {
          var ctrl;
      
          beforeEach(inject(function($componentController) {
            ctrl = $componentController('phoneList');
          }));
      
          it('should create a `phones` model with 3 phones', function() {
            expect(ctrl.phones.length).toBe(3);
          });
      
          it('should set a default value for the `orderProp` model', function() {
            expect(ctrl.orderProp).toBe('age');
          });
      
        });
      
      });
});