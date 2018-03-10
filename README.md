# mysqldump-search-replace-node
A node.js module that replaces a string in a MySQL dump and fixes serialized data. This is helpful when migrating a WordPress database from one host to another and the urls change.

## Installation
Install the module via `npm install`:
```
$ npm install --save mysqldump-search-replace
```

## Usage
The module consists of a simple function that takes a dump string, a search string and a replace string. It then replaces all occurrences of the search string by the replace string. Afterwards, serialized data length values in the dump are fixed. 

```js
var fs = require('fs');
var mysqldumpSearchReplace = require('mysqldump-search-replace');

var content = fs.readFileSync('dump.sql', 'utf-8');

content = mysqldumpSearchReplace(content, 'http://local-project.here', 'http://live-project.com');
```

**Caution**: Only string lengths are fixed currently. Array values might also become inconsistent, but which shouldn't be the case in the WordPress scenario.
