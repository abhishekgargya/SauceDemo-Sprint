// Generated from: tests\features\login.feature
import { test } from "../../../tests/fixtures.js";

test.describe('Login', () => {

  test('Login with valid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('navigate to "https://www.saucedemo.com/"', null, { page }); 
    await When('Enter username as "standard_user"'); 
    await And('Enter password as "secret_sauce"'); 
    await And('Click on submit button'); 
    await Then('Login should be successful "Swag Labs"'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given navigate to \"https://www.saucedemo.com/\"","stepMatchArguments":[{"group":{"start":12,"value":"\"https://www.saucedemo.com/\"","children":[{"start":13,"value":"https://www.saucedemo.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Enter username as \"standard_user\"","stepMatchArguments":[{"group":{"start":18,"value":"\"standard_user\"","children":[{"start":19,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And Enter password as \"secret_sauce\"","stepMatchArguments":[{"group":{"start":18,"value":"\"secret_sauce\"","children":[{"start":19,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And Click on submit button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then Login should be successful \"Swag Labs\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Swag Labs\"","children":[{"start":28,"value":"Swag Labs","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end