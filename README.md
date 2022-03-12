## لیستی وشە نابەجێکان لە زمانی کوردیدا

 

داگرتن:

Installation:
```console
npm i kurdish-profanity
```

بەکارهێنان:

Usage:

```javascript
const words = require('kurdish-profanity');

const arg = 'وشەی نابەجێ';

if (words.includes(arg.toLowerCase())) {
  console.warn('Watch your mouth!');
} else {
  console.warn('Thank you for using safe words');
}

```
