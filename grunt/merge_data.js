var validate = require('../validate.js');

module.exports = {
  options: {
    asConfig: true,
    data: function (data) {
      return validate(data);
    }
  },
  framework: {
    src: ['src/framework/*.json'],
    dest: 'dist/framework.json'
  },
  css: {
    src: ['src/css/*.json'],
    dest: 'dist/css.json'
  },
  javascript: {
    src: ['src/javascript/*.json'],
    dest: 'dist/javascript.json'
  },
  dist: {
    src: ['dist/framework.json', 'dist/css.json', 'dist/javascript.json'],
    dest: 'dist/all.json'
  }
};
