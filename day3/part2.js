const list = require('./day3Data.js').split('\n');
const getBitCounts = require('./part1.js');

let oxygen = list;
let co2 = list;

const getPopularBit = (list, i, unpopular = false) => {
  let zeroes = 0;
  let ones = 0;
  list.forEach((report) => {
    if (report[i] === '1') {
      ones ++;
    } else {
      zeroes ++;
    }
  })
  if(unpopular){
    if (ones >= zeroes) {
      return '0';
    } else {
      return '1';
    }
  } else {
    if (ones >= zeroes) {
      return '1';
    } else {
      return '0';
    }
  }
}
const filterRatings = (list, bitIndex, popularBit) => {
  let pass = [];
  let fail = [];
  const reg = new RegExp(`^[0-9]{${bitIndex}}${popularBit}`)
  list.forEach((report) => {
    if(reg.test(report)) {
      pass.push(report);
    } else {
      fail.push(report);
    }
  });
  return [pass, fail];
}

for(let i = 0; i < 12; i++) {
  if (oxygen.length > 1) {
    const popularBit = getPopularBit(oxygen, i);
    const oxygenFiltered = filterRatings(oxygen, i, popularBit);
    oxygen = oxygenFiltered[0];
  }
  if (co2.length > 1) {
    const unpopularBit = getPopularBit(co2, i, true);
    const co2Filtered = filterRatings(co2, i, unpopularBit);
    co2 = co2Filtered[0];
  }
}
const oxygenReport = parseInt(oxygen[0], 2);
const co2Report = parseInt(co2[0], 2);
console.log('report', co2Report * oxygenReport);
console.log(oxygenReport);
console.log(co2Report);