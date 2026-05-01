module.exports = {
  default: {
    paths: ['tests/features/*.feature'],
    require: ['tests/support/hooks.js', 'tests/steps/*.js'],
    format: ['progress-bar', 'html:playwright-report/cucumber-report.html'],
    formatOptions: {
      snippetInterface: 'async-await',
    },
  },
};
