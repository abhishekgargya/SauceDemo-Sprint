// Generated from: tests\features\login.feature
import { test } from "../../../tests/fixtures.js";

test.describe('Login', () => {

  test.describe('Login with different users', () => {

    test('Example #1', async ({ Given, When, Then, And, page }) => { 
      await Given('navigate to "https://www.saucedemo.com/"', null, { page }); 
      await When('Enter username as "standard_user"'); 
      await And('Enter password as "secret_sauce"'); 
      await And('Click on submit button'); 
      await Then('Login should be successful "Swag Labs"'); 
    });

    test('Example #2', async ({ Given, When, Then, And, page }) => { 
      await Given('navigate to "https://www.saucedemo.com/"', null, { page }); 
      await When('Enter username as "locked_out_user"'); 
      await And('Enter password as "secret_sauce"'); 
      await And('Click on submit button'); 
      await Then('Login should be successful "Epic sadface: Sorry, this user has been locked out."'); 
    });

    test('Example #3', async ({ Given, When, Then, And, page }) => { 
      await Given('navigate to "https://www.saucedemo.com/"', null, { page }); 
      await When('Enter username as "performance_glitch_user"'); 
      await And('Enter password as "secret_sauce"'); 
      await And('Click on submit button'); 
      await Then('Login should be successful "Swag Labs"'); 
    });

    test('Example #4', async ({ Given, When, Then, And, page }) => { 
      await Given('navigate to "https://www.saucedemo.com/"', null, { page }); 
      await When('Enter username as "error_user"'); 
      await And('Enter password as "secret_sauce"'); 
      await And('Click on submit button'); 
      await Then('Login should be successful "Swag Labs"'); 
    });

    test('Example #5', async ({ Given, When, Then, And, page }) => { 
      await Given('navigate to "https://www.saucedemo.com/"', null, { page }); 
      await When('Enter username as "visual_user"'); 
      await And('Enter password as "secret_sauce"'); 
      await And('Click on submit button'); 
      await Then('Login should be successful "Swag Labs"'); 
    });

    test('Example #6', async ({ Given, When, Then, And, page }) => { 
      await Given('navigate to "https://www.saucedemo.com/"', null, { page }); 
      await When('Enter username as "invalid_user"'); 
      await And('Enter password as "secret_sauce"'); 
      await And('Click on submit button'); 
      await Then('Login should be successful "Epic sadface: Username and password do not match any user in this service"'); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given navigate to \"https://www.saucedemo.com/\"","stepMatchArguments":[{"group":{"start":12,"value":"\"https://www.saucedemo.com/\"","children":[{"start":13,"value":"https://www.saucedemo.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Enter username as \"standard_user\"","stepMatchArguments":[{"group":{"start":18,"value":"\"standard_user\"","children":[{"start":19,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And Enter password as \"secret_sauce\"","stepMatchArguments":[{"group":{"start":18,"value":"\"secret_sauce\"","children":[{"start":19,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And Click on submit button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Login should be successful \"Swag Labs\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Swag Labs\"","children":[{"start":28,"value":"Swag Labs","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given navigate to \"https://www.saucedemo.com/\"","stepMatchArguments":[{"group":{"start":12,"value":"\"https://www.saucedemo.com/\"","children":[{"start":13,"value":"https://www.saucedemo.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Enter username as \"locked_out_user\"","stepMatchArguments":[{"group":{"start":18,"value":"\"locked_out_user\"","children":[{"start":19,"value":"locked_out_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And Enter password as \"secret_sauce\"","stepMatchArguments":[{"group":{"start":18,"value":"\"secret_sauce\"","children":[{"start":19,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And Click on submit button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Login should be successful \"Epic sadface: Sorry, this user has been locked out.\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Epic sadface: Sorry, this user has been locked out.\"","children":[{"start":28,"value":"Epic sadface: Sorry, this user has been locked out.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given navigate to \"https://www.saucedemo.com/\"","stepMatchArguments":[{"group":{"start":12,"value":"\"https://www.saucedemo.com/\"","children":[{"start":13,"value":"https://www.saucedemo.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Enter username as \"performance_glitch_user\"","stepMatchArguments":[{"group":{"start":18,"value":"\"performance_glitch_user\"","children":[{"start":19,"value":"performance_glitch_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And Enter password as \"secret_sauce\"","stepMatchArguments":[{"group":{"start":18,"value":"\"secret_sauce\"","children":[{"start":19,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And Click on submit button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Login should be successful \"Swag Labs\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Swag Labs\"","children":[{"start":28,"value":"Swag Labs","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":33,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given navigate to \"https://www.saucedemo.com/\"","stepMatchArguments":[{"group":{"start":12,"value":"\"https://www.saucedemo.com/\"","children":[{"start":13,"value":"https://www.saucedemo.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Enter username as \"error_user\"","stepMatchArguments":[{"group":{"start":18,"value":"\"error_user\"","children":[{"start":19,"value":"error_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And Enter password as \"secret_sauce\"","stepMatchArguments":[{"group":{"start":18,"value":"\"secret_sauce\"","children":[{"start":19,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And Click on submit button","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Login should be successful \"Swag Labs\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Swag Labs\"","children":[{"start":28,"value":"Swag Labs","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":40,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":41,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given navigate to \"https://www.saucedemo.com/\"","stepMatchArguments":[{"group":{"start":12,"value":"\"https://www.saucedemo.com/\"","children":[{"start":13,"value":"https://www.saucedemo.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Enter username as \"visual_user\"","stepMatchArguments":[{"group":{"start":18,"value":"\"visual_user\"","children":[{"start":19,"value":"visual_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And Enter password as \"secret_sauce\"","stepMatchArguments":[{"group":{"start":18,"value":"\"secret_sauce\"","children":[{"start":19,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And Click on submit button","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Login should be successful \"Swag Labs\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Swag Labs\"","children":[{"start":28,"value":"Swag Labs","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":48,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":49,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given navigate to \"https://www.saucedemo.com/\"","stepMatchArguments":[{"group":{"start":12,"value":"\"https://www.saucedemo.com/\"","children":[{"start":13,"value":"https://www.saucedemo.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":50,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Enter username as \"invalid_user\"","stepMatchArguments":[{"group":{"start":18,"value":"\"invalid_user\"","children":[{"start":19,"value":"invalid_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":51,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And Enter password as \"secret_sauce\"","stepMatchArguments":[{"group":{"start":18,"value":"\"secret_sauce\"","children":[{"start":19,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":52,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And Click on submit button","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Login should be successful \"Epic sadface: Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Epic sadface: Username and password do not match any user in this service\"","children":[{"start":28,"value":"Epic sadface: Username and password do not match any user in this service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end