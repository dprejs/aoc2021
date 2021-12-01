let list =  require('./aoc1Data.js');
list = list.split('\n');
list = list.map((x) => parseInt(x));

let count = 0;
for (var i = 3; i < list.length; i ++) {
  const prevSum = list[i-1] + list[i-2] + list[i-3];
  const currentSum = list[i] + list[i-1] + list[i-2];
  if (currentSum > prevSum) {
    count ++;
  }
}

console.log(count);
