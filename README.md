# npi-utils

npi utils to build the stream

## Install

    npm i @maboiteaspam/npi-utils --save

## Usage

```js
var bubble  = require('@maboiteaspam/npi-utils/bubble');
var spawn   = require('@maboiteaspam/npi-utils/spawn');
var router  = require('stream-message-router')

var npi = router('npi');

npi
  .pipe(spawn('npm', 'init' , '--yes'))
  .pipe(bubble('message', {message: 'file', 'body':'package.json'}))

```
## Read more

- https://github.com/maboiteaspam/npi
- https://github.com/maboiteaspam/stream-messenger
- https://github.com/maboiteaspam/stream-message-router
- https://github.com/maboiteaspam/flower
- https://github.com/maboiteaspam/bubbler
- https://github.com/maboiteaspam/bubbled
- https://github.com/maboiteaspam/event-stream-writer
