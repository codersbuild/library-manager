var grunt = require('grunt');
var packageInfo = require('./package.json');

module.exports = function(data) {

  var keys = Object.keys(data);
  var errors = [];
  var ignore = ['css', 'javascript', 'framework'];
  var i, j, k;

  for(i = 0; i < keys.length; i++){

    var key = keys[i];
    var library = data[key];
    var append = {};

    // Only check the core js & css libraries
    if(ignore.indexOf(key) === -1) {

      // Check for missing name
      if( !library.name || typeof library.name !== 'string') {
        errors.push('\n • ' + key + '.json missing `name`');
      }

      // Make sure name is same as file's name
      if(library.name !== key) {
        errors.push('\n • ' + key + '.json `name` incorrectly set to "' + library.name + '". Please change it to "' + key + '"');
      }

      // Make sure a Display Name is set
      if( !library.display_name || typeof library.description !== 'string') {
        errors.push('\n • ' + key + '.json missing `display_name`');
      }

      // Make sure a Description is set
      if( !library.description || typeof library.description !== 'string') {
        errors.push('\n • ' + key + '.json missing `description`');
      }

      // Make sure a Homepage URL is set
      if( !library.homepage_url || typeof library.homepage_url !== 'string') {
        errors.push('\n • ' + key + '.json missing `homepage_url`');
      }

      // Make sure a Keywords is set
      if( !library.keywords || library.keywords.length === 0) {
        errors.push('\n • ' + key + '.json missing `keywords`');
      }

      // Make sure a Categories is set
      if( !library.categories || library.categories.length === 0) {
        errors.push('\n • ' + key + '.json missing `categories`');
      }

      // Make sure a Latest Version is set
      if( !library.latest_version || typeof library.latest_version !== 'string') {
        errors.push('\n • ' + key + '.json missing `latest_version`');
      }

      // Make sure a Versions is set
      if( !library.versions || library.versions.length === 0) {
        errors.push('\n • ' + key + '.json missing `versions`');
      }

      // Loop through each version and check for required params
      for(j = 0; j < library.versions.length; j++) {

        var version = library.versions[j];

        // Make sure a Versions is set
        if(typeof version.unstable !== 'boolean') {
          errors.push('\n • ' + key + '.json `versions[' + j + ']` missing `unstable`');
        }

        // Make sure a Version Number is set
        if( !version.version_number || typeof version.version_number !== 'string') {
          errors.push('\n • ' + key + '.json `versions[' + j + ']` missing `version_number`');
        }

        // Make sure a Version Release Date is set
        if( !version.release_date || typeof version.release_date !== 'string') {
          errors.push('\n • ' + key + '.json `versions[' + j + ']` missing `release_date`');
        }

        // Make sure a Version Documentation URL is set
        if( !version.documentation_url || typeof version.documentation_url !== 'string') {
          errors.push('\n • ' + key + '.json `versions[' + j + ']` missing `documentation_url`');
        }

        // Make sure a Version License is set
        if( !version.license || version.license.length === 0) {
          errors.push('\n • ' + key + '.json `versions[' + j + ']` missing `license`');
        }

        // Check that this library has at least one script or style
        if( ( !version.scripts || version.scripts.length === 0 ) && ( !version.styles || version.styles.length === 0 ) ) {
          errors.push('\n • ' + key + '.json `versions[' + j + ']` missing either `scripts` or `styles`');
        }

        // Check if there are any scripts, and whether they are valid
        if(version.scripts) {
          for(k = 0; k < version.scripts.length; k++) {

            var script = version.scripts[k];

            // Make sure a Minified is set
            if(typeof script.minified !== 'boolean') {
              errors.push('\n • ' + key + '.json `versions[' + j + '].scripts[' + k + ']`  missing `minified`');
            }

            // Make sure a Version Script URL is set
            if( !script.url || typeof script.url !== 'string') {
              errors.push('\n • ' + key + '.json `versions[' + j + '].scripts[' + k + ']` missing `url`');
            }

            // Make sure a Version Script File Size is set
            if( !script.file_size || typeof script.file_size !== 'string') {
              errors.push('\n • ' + key + '.json `versions[' + j + '].scripts[' + k + ']` missing `file_size`');
            }
          }
        }

        // Check if there are any styles, and whether they are valid
        if(version.styles) {
          for(k = 0; k < version.styles.length; k++) {

            var style = version.styles[k];

            // Make sure a Minified is set
            if(typeof style.minified !== 'boolean') {
              errors.push('\n • ' + key + '.json `versions[' + j + '].styles[' + k + ']`  missing `minified`');
            }

            // Make sure a Version Script URL is set
            if( !style.url || typeof style.url !== 'string') {
              errors.push('\n • ' + key + '.json `versions[' + j + '].styles[' + k + ']` missing `url`');
            }

            // Make sure a Version Script File Size is set
            if( !style.file_size || typeof style.file_size !== 'string') {
              errors.push('\n • ' + key + '.json `versions[' + j + '].styles[' + k + ']` missing `file_size`');
            }
          }
        }

        // Check if there are any dependencies, and whether they are valid
        if(version.dependencies) {
          for(k = 0; k < version.dependencies.length; k++) {

            var dependency = version.dependencies[k];

            // Make sure a Version Dependency Name is set
            if( !dependency.name || typeof dependency.name !== 'string') {
              errors.push('\n • ' + key + '.json `versions[' + j + '].dependencies[' + k + ']` missing `name`');
            }

            // Make sure a Version Dependency Range is set
            if( !dependency.range || typeof dependency.range !== 'string') {
              errors.push('\n • ' + key + '.json `versions[' + j + '].dependencies[' + k + ']` missing `range`');
            }
          }
        }

        // Check if there are any plugins, and whether they are valid
        if(version.plugins) {
          for(k = 0; k < version.plugins.length; k++) {

            var plugin = version.plugins[k];

            // Make sure a Version Plugin Name is set
            if( !plugin.name || typeof plugin.name !== 'string') {
              errors.push('\n • ' + key + '.json `versions[' + j + '].plugins[' + k + ']` missing `name`');
            }

            // Make sure a Version Plugin Range is set
            if( !plugin.range || typeof plugin.range !== 'string') {
              errors.push('\n • ' + key + '.json `versions[' + j + '].plugins[' + k + ']` missing `range`');
            }
          }
        }
      }
    } else {

      // Append `library_info` to library.json
      append = {
        library_info: {
          version: packageInfo.version,
          license: packageInfo.license,
          repository: packageInfo.repository,
          author: packageInfo.author
        }
      };

    }
  }

  // Throw Grunt error if JSON has issues
  if (errors.length > 0){
    return grunt.fatal('\n' + errors.join('') + '\n');
  }

  return append;
};
