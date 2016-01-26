module.exports = function (grunt) {

  var gtx = require('gruntfile-gtx').wrap(grunt);
  gtx.loadAuto();

  var gruntConfig = require('./grunt');
  gruntConfig.package = require('./package.json');

  gtx.config(gruntConfig);

  gtx.alias('build', [
    'shell:lint',
    'clean:dist',
    'merge_data:framework',
    'merge_data:css',
    'merge_data:javascript',
    'merge_data:dist'
  ]);

  gtx.alias('prerelease', ['bump-only:prerelease', 'release']);

  gtx.alias('test:lint', ['shell:lint']);

  gtx.alias('release', ['build', 'bump-commit']);
  gtx.alias('release-major', ['bump-only:major', 'release']);
  gtx.alias('release-minor', ['bump-only:minor', 'release']);
  gtx.alias('release-patch', ['bump-only:patch', 'release']);

  gtx.finalise();
};
