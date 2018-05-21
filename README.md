# changed-lines v1.0.0

Compare strings just like `git diff` does! 😎

Thanks to the amazing [diff-sequences][1] package. 😇

[1]: https://www.npmjs.com/package/diff-sequences

```js
const diff = require('changed-lines');

// The result is an array.
let res = diff(input, output);

// Optional ansi colors.
const chalk = require('chalk');
res = diff(input, output, {
  green: chalk.green,
  red: chalk.red,
});
```

The `input` and `output` values can be a string or array of strings.

