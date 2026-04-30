// Generated from: tests\features\cart.feature
import { test } from "../../../tests/fixtures.js";

test.describe('Shopping Cart', () => {

  test.describe('Add products and validate cart count', () => {

    test('Example #1', { tag: ['@cart'] }, async ({ Given, When, Then, And, page }) => { 
      await Given('I am logged in as "standard_user" with password "secret_sauce"', null, { page }); 
      await When('I add "Sauce Labs Backpack" to the cart'); 
      await And('I add "" to the cart'); 
      await And('I add "" to the cart'); 
      await Then('the cart badge should show "1"'); 
    });

    test('Example #2', { tag: ['@cart'] }, async ({ Given, When, Then, And, page }) => { 
      await Given('I am logged in as "standard_user" with password "secret_sauce"', null, { page }); 
      await When('I add "Sauce Labs Backpack" to the cart'); 
      await And('I add "Sauce Labs Bike Light" to the cart'); 
      await And('I add "" to the cart'); 
      await Then('the cart badge should show "2"'); 
    });

    test('Example #3', { tag: ['@cart'] }, async ({ Given, When, Then, And, page }) => { 
      await Given('I am logged in as "standard_user" with password "secret_sauce"', null, { page }); 
      await When('I add "Sauce Labs Backpack" to the cart'); 
      await And('I add "Sauce Labs Bike Light" to the cart'); 
      await And('I add "Sauce Labs Bolt T-Shirt" to the cart'); 
      await Then('the cart badge should show "3"'); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":13,"tags":["@cart"],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am logged in as \"standard_user\" with password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":18,"value":"\"standard_user\"","children":[{"start":19,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"secret_sauce\"","children":[{"start":49,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I add \"Sauce Labs Backpack\" to the cart","stepMatchArguments":[{"group":{"start":6,"value":"\"Sauce Labs Backpack\"","children":[{"start":7,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And I add \"\" to the cart","stepMatchArguments":[{"group":{"start":6,"value":"\"\"","children":[{"start":7,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I add \"\" to the cart","stepMatchArguments":[{"group":{"start":6,"value":"\"\"","children":[{"start":7,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the cart badge should show \"1\"","stepMatchArguments":[{"group":{"start":27,"value":"\"1\"","children":[{"start":28,"value":"1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":["@cart"],"steps":[{"pwStepLine":17,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am logged in as \"standard_user\" with password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":18,"value":"\"standard_user\"","children":[{"start":19,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"secret_sauce\"","children":[{"start":49,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I add \"Sauce Labs Backpack\" to the cart","stepMatchArguments":[{"group":{"start":6,"value":"\"Sauce Labs Backpack\"","children":[{"start":7,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And I add \"Sauce Labs Bike Light\" to the cart","stepMatchArguments":[{"group":{"start":6,"value":"\"Sauce Labs Bike Light\"","children":[{"start":7,"value":"Sauce Labs Bike Light","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I add \"\" to the cart","stepMatchArguments":[{"group":{"start":6,"value":"\"\"","children":[{"start":7,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the cart badge should show \"2\"","stepMatchArguments":[{"group":{"start":27,"value":"\"2\"","children":[{"start":28,"value":"2","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":15,"tags":["@cart"],"steps":[{"pwStepLine":25,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am logged in as \"standard_user\" with password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":18,"value":"\"standard_user\"","children":[{"start":19,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"secret_sauce\"","children":[{"start":49,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I add \"Sauce Labs Backpack\" to the cart","stepMatchArguments":[{"group":{"start":6,"value":"\"Sauce Labs Backpack\"","children":[{"start":7,"value":"Sauce Labs Backpack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And I add \"Sauce Labs Bike Light\" to the cart","stepMatchArguments":[{"group":{"start":6,"value":"\"Sauce Labs Bike Light\"","children":[{"start":7,"value":"Sauce Labs Bike Light","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I add \"Sauce Labs Bolt T-Shirt\" to the cart","stepMatchArguments":[{"group":{"start":6,"value":"\"Sauce Labs Bolt T-Shirt\"","children":[{"start":7,"value":"Sauce Labs Bolt T-Shirt","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the cart badge should show \"3\"","stepMatchArguments":[{"group":{"start":27,"value":"\"3\"","children":[{"start":28,"value":"3","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end