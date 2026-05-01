module.exports = {
  default: {
    paths: ['tests/features/*.feature'],
    require: ['tests/steps/*.js', 'tests/hooks.js'],
    format: ['html:cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  }
};