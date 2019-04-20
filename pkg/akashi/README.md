# @augu/akashi <img src="https://azurlane.koumakan.jp/w/images/1/1f/Akashi.png" align="right" width="400px" height="497px">

> Logger utility for my projects

## Usage

```js
const Akashi = require('@augu/akashi');
const logger = Akashi
    .create()
    .globalize();

console.info('Heyo!'); // Similar to logger.info('Heyo!')
```