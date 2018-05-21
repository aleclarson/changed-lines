const compare = require('diff-sequences').default;

function diff(input, output, ansi) {
  if (!Array.isArray(input)) {
    input = input.split('\n');
  }
  if (!Array.isArray(output)) {
    output = output.split('\n');
  }

  function compareLines(i, j) {
    return input[i] === output[j];
  }

  let x = 0; // current input line
  let y = 0; // current output line

  const diff = [];
  compare(input.length, output.length, compareLines, function(n, nx, ny) {
    let change;
    while (x !== nx) {
      change = '- ' + input[x++];
      diff.push(ansi ? ansi.red(change) : change);
    }
    while (y !== ny) {
      change = '+ ' + output[y++];
      diff.push(ansi ? ansi.green(change) : change);
    }
    while (--n !== -1) {
      diff.push('  ' + output[y++]);
      x++;
    }
  });

  let change;
  while (x !== input.length) {
    change = '- ' + input[x++];
    diff.push(ansi ? ansi.red(change) : change);
  }
  while (y !== output.length) {
    change = '+ ' + output[y++];
    diff.push(ansi ? ansi.green(change) : change);
  }
  return diff;
}

module.exports = diff;
