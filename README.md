# mysqldump-search-replace-node
A node.js module that replaces a string in a MySQL dump and fixes serialized data. This is helpful when migrating a WordPress database from one host to another and the urls change.

## Installation
Install the module via `npm install`:

```bash
$ npm install --save mysqldump-search-replace
```

## Usage
The module consists of a simple function that takes a dump string, a search string and a replace string. It then replaces all occurrences of the search string by the replace string. Afterwards, serialized data length values in the dump are fixed.

```js
var fs = require('fs');
var mysqldumpSearchReplace = require('mysqldump-search-replace');

var content = fs.readFileSync('dump.sql', 'utf-8');

var newContent = mysqldumpSearchReplace(
  content,
  'http://local-project.here',
  'http://live-project.com'
);
```

**Caution**: Only string lengths are fixed currently. Array values might also become inconsistent, but which shouldn't be the case in the WordPress scenario.

## License

MIT License

Copyright (c) 2018 Dword

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
