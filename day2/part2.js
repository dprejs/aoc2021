const commands = require('./day2Data.js');

const travel = (commands) => {
  let forward = 0;
  let depth = 0;
  let aim = 0;
  commandArr = commands.split('\n');
  commandArr.forEach((command) => {
    const count = parseInt(command.match(/\d+/)[0]);
    if (/forward/.test(command)) {
      forward += count;
      depth += (count * aim);
    } else if (/down/.test(command)) {
      aim += count;
    } else {
      aim -= count;
    }
  })
  return [forward, depth];
}
const position = travel(commands);
console.log(position)

console.log(position[0] * position[1]);