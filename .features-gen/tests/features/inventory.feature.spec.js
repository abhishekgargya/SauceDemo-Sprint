// Generated from: tests\features\inventory.feature
import { test } from "../../../tests/fixtures.js";

test.describe('Inventory', () => {

  test.describe('Inventory page interactions', () => {

    test('Example #1', async ({ Given, When, Then, page }) => { 
      await Given('User is logged in as "standard_user" with password "secret_sauce"', null, { page }); 
      await When('Open the Inventory Page'); 
      await Then('Should see all the products'); 
    });

    test('Example #2', async ({ Given, When, Then, page }) => { 
      await Given('User is logged in as "standard_user" with password "secret_sauce"', null, { page }); 
      await When('Name - A to Z'); 
      await Then('The products should be sorted alphabetically from A to Z'); 
    });

    test('Example #3', async ({ Given, When, Then, page }) => { 
      await Given('User is logged in as "standard_user" with password "secret_sauce"', null, { page }); 
      await When('Name - Z to A'); 
      await Then('The products should be sorted alphabetically from Z to A'); 
    });

    test('Example #4', async ({ Given, When, Then, page }) => { 
      await Given('User is logged in as "standard_user" with password "secret_sauce"', null, { page }); 
      await When('Price - low to high'); 
      await Then('The products should be sorted by Price low to high'); 
    });

    test('Example #5', async ({ Given, When, Then, page }) => { 
      await Given('User is logged in as "standard_user" with password "secret_sauce"', null, { page }); 
      await When('Price - high to low'); 
      await Then('The products should be sorted by Price high to low'); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\inventory.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is logged in as \"standard_user\" with password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":21,"value":"\"standard_user\"","children":[{"start":22,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"secret_sauce\"","children":[{"start":52,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When Open the Inventory Page","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then Should see all the products","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is logged in as \"standard_user\" with password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":21,"value":"\"standard_user\"","children":[{"start":22,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"secret_sauce\"","children":[{"start":52,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When Name - A to Z","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then The products should be sorted alphabetically from A to Z","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is logged in as \"standard_user\" with password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":21,"value":"\"standard_user\"","children":[{"start":22,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"secret_sauce\"","children":[{"start":52,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When Name - Z to A","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then The products should be sorted alphabetically from Z to A","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is logged in as \"standard_user\" with password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":21,"value":"\"standard_user\"","children":[{"start":22,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"secret_sauce\"","children":[{"start":52,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When Price - low to high","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then The products should be sorted by Price low to high","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":33,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given User is logged in as \"standard_user\" with password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":21,"value":"\"standard_user\"","children":[{"start":22,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"secret_sauce\"","children":[{"start":52,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When Price - high to low","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then The products should be sorted by Price high to low","stepMatchArguments":[]}]},
]; // bdd-data-end