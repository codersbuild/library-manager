Library Manager
===

Third-Party Library Manager for CSS &amp; JS Libraries used on https://coders.build

Creating a `library.json` file
===

The name of your file matters as it will be used during the build process.

__Rules:__

* The file name must be short
* The file name must be lower case
* The file name must be alphanumeric and not start with a number
* The file name must use hyphens to separate words
* Place the new library file in the correct `./src` folder ( if it is a CSS Library, put it in `./src/css`, if it's javascript file place it in the `./src/javascript` folder, if its both, place it in `./src/framework` )

Library Template
---

```json
{
  "name": "",
  "display_name": "",
  "description": "",
  "homepage_url": "",
  "keywords": [],
  "categories": [],
  "latest_version": "",
  "versions": [
    {
      "unstable": false,
      "version_number": "",
      "release_date": "",
      "documentation_url": "",
      "license": [],
      "scripts": [
        {
          "url": "",
          "minified": true,
          "file_size": "",
          "integrity": "",
          "crossorigin": "",
          "description": ""
        }
      ],
      "styles": [
        {
          "url": "",
          "minified": true,
          "file_size": "",
          "integrity": "",
          "crossorigin": "",
          "description": "",
        }
      ],
      "dependencies": [
        {
          "name": "",
          "range": "*"
        }
      ],
      "plugins": [
        {
          "name": "",
          "range": "*"
        }
      ]
    }
  ]
}
```

Parameters
---

The following are the parameters needed to create a library file.

Param|Type|Requirement|Description
-----|----|-----------|-----------
`name`|_string_|__required__|This should match the file name using the rules stated above.
`display_name`|_string_|__required__|This is a more user friendly name that is meant to be read by a human.
`description`|_string_|__required__|This is a brief description of the library.
`homepage`|_string_|__required__|The url to the libraries homepage.
`keywords`|_array_|__required__|This is an array of strings that helps people find this library and can literally be anything you think might be helpful.
`categories`|_array_|__required__|Categories, like `keywords` is an array of strings.  The difference being that you should focus on using `categories` that are already in use by this repository so it groups libraries more tightly.
`latest_version`|_string_|__required__|This is the latest __stable__ version of the library.
`versions`|_array_|__required__|This is an array of all supported versions. It also must contain the version listed in `latest_version`.
`versions[i].unstable`|_boolean_|__required__|If this is NOT a production release, set this to true.
`versions[i].version_number`|_string_|__required__|Version number of this library
`versions[i].release_date`|_string_|__required__|Date of release, formatted as `Jan 01, 2016`
`versions[i].documentation_url`|_boolean_|__required__|Relative documentation for this specific version
`versions[i].license`|_array_|__required__|License Type for Library using the [SPDX Identifier Code](https://spdx.org/licenses/)
`versions[i].scripts`|_array_|_optional_|This is a list of Scripts used in this library. It is __required__ if `versions[i].styles` is not set.
`versions[i].scripts[j].url`|_string_|__required__|Absolute path to script file.  Ideally this will be an HTTPS file hosted on a CDN
`versions[i].scripts[j].minified`|_string_|__required__|Whether or not this file has been minified
`versions[i].scripts[j].file_size`|_string_|__required__|File size, written in the format of `300 B`, `21.4 KB`, `1.2 MB` etc
`versions[i].scripts[j].integrity`|_string_|_optional_|This is an optional [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) hash, if one was exists
`versions[i].scripts[j].crossorigin`|_string_|_optional_|This is the `crossorigin` data attribute for the tag, if one is required
`versions[i].scripts[j].description`|_string_|_optional_|This is an optional description of the asset if one would be helpful
`versions[i].styles`|_array_|_optional_|This is a list of Styles used in this library. It is __required__ if `versions[i].scripts` is not set.
`versions[i].styles[j].url`|_string_|__required__|Absolute path to style sheet.  Ideally this will be an HTTPS file hosted on a CDN
`versions[i].styles[j].minified`|_string_|__required__|Whether or not this file has been minified
`versions[i].styles[j].file_size`|_string_|__required__|File size, written in the format of `300 B`, `21.4 KB`, `1.2 MB` etc
`versions[i].styles[j].integrity`|_string_|_optional_|This is an optional [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) hash, if one was exists
`versions[i].styles[j].crossorigin`|_string_|_optional_|This is the `crossorigin` data attribute for the tag, if one is required
`versions[i].styles[j].description`|_string_|_optional_|This is an optional description of the asset if one would be helpful
`versions[i].dependencies`|_array_|_optional_|An array of dependencies that can be added if not already being used.
`versions[i].dependencies[j].name`|_string_|__required__|This should be the `name` slug from this library acting as a dependency
`versions[i].dependencies[j].range`|_string_|__required__|This is a version number setting indicating which version is required. e.g. `*` = any, `^1.2` is anything above version 1.2.  This acts the same is node package dependencies.
`versions[i].plugins`|_array_|_optional_|DESCRIPTION
`versions[i].plugins[j].name`|_string_|__required__|This should be the `name` slug from this library acting as a plugin
`versions[i].plugins[j].range`|_string_|__required__|This is a version number setting indicating which version is required. e.g. `*` = any, `^1.2` is anything above version 1.2.  This acts the same is node package dependencies.


Categories
---

Accordion, Animation, Breadcrumb, Button, Calendar, Charts & Graphs, Component, Dialog, DOM Manipulation, Email, Graphic, Grid, Icon, Map, Menu Icon, Pagination, Progress, Pure Javascript, Slider, Star Ratings, Table, Tabs, Template System, Toggle, Typography, Unit Testing, User Interface, Web Application, Web Tool




Grunt Terminal Commands:
---

You can use the following build commands via terminal ( make sure you are in `/path/to/library-manager` ):

#### Build for Distribution:

The following command will compile Sass Styles into a CSS and Concat JS files for Distribution.

This is the most common command you will want to use and is required to view any changed you made in a browser or simulator.

```bash
grunt build
```

#### Create a Release:

```bash
grunt release
```

#### Create a Major Release:

The following will:

1. Increase the build's major number ( e.g. v __0__.5.1 => v __1__.0.0 )
2. Build & Package Distribution Files
3. Perform a git commit

```bash
grunt release-major
```

#### Create a Minor Release:

The following will:

1. Increase the build's minor number ( e.g. v 0.__5__.1 => v 0.__6__.0 )
2. Build & Package Distribution Files
3. Perform a git commit

```bash
grunt release-minor
```

#### Create a Release Patch:

The following will:

1. Increase the build's patch number ( e.g. v 0.5.__1__ => v 0.5.__2__ )
2. Build & Package Distribution Files
3. Perform a git commit

```bash
grunt release-patch
```

#### Create a Pre-Release:

The following will:

1. Build & Package Distribution Files
2. Perform a git commit

```bash
grunt prerelease
```
