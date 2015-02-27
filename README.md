
Highland Line Split
===================

[![Build Status](https://travis-ci.org/thriqon/highland-line-split.svg?branch=master)](https://travis-ci.org/thriqon/highland-line-split)
[![Dependency Status](https://david-dm.org/thriqon/highland-line-split.svg)](https://david-dm.org/thriqon/highland-line-split)

[![NPM](https://nodei.co/npm/highland-line-split.png)](https://nodei.co/npm/highland-line-split/)

    npm install --save highland-line-split

Introduction
------------

Splits a stream of strings into single lines. Watch:

```javascript
_([
"Test1\nTest2",
"Test3"
]).consume(lineSplit()).toArray(function (res) {
// res == ["Test1", "Test2Test3"]
})
```

License
-------
Copyright (c) 2015, Jonas Weber

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

