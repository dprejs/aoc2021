let list =  require('./aoc1Data.js');
list = list.split('\n');
list = list.map((x) => parseInt(x));
let count = 0;
for (let i = 1; i < list.length; i++) {
  if (list[i] > list[i-1]) {
    count ++;
  }
}
console.log(count);
