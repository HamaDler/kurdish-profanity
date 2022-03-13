## لیستی وشە نابەجێکان لە زمانی کوردیدا

 

داگرتن:

Installation:
```console
npm i kurdish-profanity
```

بەکارهێنان:

Usage:

```javascript
const {dataset, isProfane} = require('kurdish-profanity');

const arg = 'وشەی نابەجێ';

if (isProfane(arg)) {
  console.warn('Watch your mouth!');
} else {
  console.warn('Thank you for using safe words');
}

```
