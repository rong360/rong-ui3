const less = require('less');

const parser = new less.Parser();

parser.parse('.class { width: (1 + 1) }', function (err, tree) {
  if (err) {
    return console.error(err);
  }
  console.log(tree.toCSS());
});
