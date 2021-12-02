const commands = require('./day2Data.js');

const travel = (commands) => {
  let forward = 0;
  let depth = 0;
  commandArr = commands.split('\n');
  // commandArr = commandArr.map((command) => command.split(' '));
  commandArr.forEach((command) => {
    const count = parseInt(command.match(/\d+/)[0]);
    if (/forward/.test(command)) {
      forward += count;
    } else if (/down/.test(command)) {
      depth += count;
    } else {
      depth -= count;
    }
  })
  return [forward, depth];
}
const position = travel(commands);
console.log(position)

console.log(position[0] * position[1]);