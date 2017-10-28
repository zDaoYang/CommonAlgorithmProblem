var readline = require('readline');
var r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var n = 0; arr = [];
r1.on('line', function (data) {
  if (n === 0) {
    n = parseInt(data);
  } else {
    arr.push(parseInt(data));
    if (arr.length === n) {
      for (var i = 0; i < n; i++) {
        printRest(arr[i]);
      }
      n = 0;
      arr = [];
    }
  }
});

function printRest(n) {
  var arr = [];
  var resut
  for (var i = 1; i <= n; i++) {
    arr.push(i);
  }
  var count = 2;
  while (arr.length > 3) {
    var i = 0;
    while (i++ < arr.length) {
      if ((i + 1) % count === 0) {
        arr.splice(i, 1, undefined); // 填充undefined防止i移位
      }
    }

    for (var j = 0; j < arr.length; j++) { //　清除undefined
      if (arr[j] === undefined) {
        arr.splice(j, 1);
      }
    }
    count = count === 2 ? 3 : 2; // 重新设置count
  }
  var result = '';
  for (var i = 0; i < arr.length; i++) {
    result += (arr[i] + ' ');
  }
  console.log(result);
}
