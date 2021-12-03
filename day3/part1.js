let list = require('./day3Data.js').split('\n');

let onesCount = new Array(12).fill(0);
let zeroesCount = new Array(12).fill(0);

list.forEach((report) => {
  for(let i = 0; i < report.length; i ++){
    if(report[i] === '1') {
      onesCount[i] ++;
    } else {
      zeroesCount[i] ++;
    }
  }
})
let gamma = [];
let epsilon = [];
for(let i = 0; i < onesCount.length; i ++) {
  if(onesCount[i] > zeroesCount[i]) {
    gamma[i] = '1';
    epsilon[i] = '0';
  } else {
    gamma[i] = '0';
    epsilon[i] = '1';
  }
}
gamma = parseInt(gamma.join(''), 2);
epsilon = parseInt(epsilon.join(''), 2);

console.log(gamma, epsilon);
console.log(gamma * epsilon);

