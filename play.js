// const net = require("net");

// const connect = function () {
//   const conn = net.createConnection({
//     host: "165.227.47.243",
//     port: 50541,
//   });

//   conn.setEncoding("utf8");

//   return conn;
// };

// console.log("connecting...");
//  connect();



const { UPKEY, LEFTKEY, DOWNKEY, RIGHTKEY } = require('./play.js');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};

let func;

const handleUserInput = (key) => {
  const stdout = process.stdout;
  const interval = function(key) {
    func = setInterval(() => {
      connection.write(key);
    }, 100);
  };

  if (key === 'a') {
    clearInterval(func);
    interval(UPKEY);
  }
  if (key === 's') {
    clearInterval(func);
    interval(LEFTKEY);
  }
  if (key === 'd') {
    clearInterval(func);
    interval(DOWNKEY);
  }
  if (key === 'f') {
    clearInterval(func);
    interval(RIGHTKEY);
  }
};
module.exports = { setupInput };

const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();