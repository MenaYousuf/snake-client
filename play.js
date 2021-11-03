const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  conn.setEncoding("utf8");

  return conn;
};

console.log("connecting...");
 connect();

// const connect = function () {
//   const conn = net.createConnection({
//     host: "165.227.47.243",
//     port: 50541,
//   });

// conn.setEncoding('utf8');

// conn.on('connect', () => {
//   console.log("Connected to SERVER!");
//   conn.write("Name: PVL");
// });

// conn.on('data', data => {
//   console.log(data);
// });

// return conn()
// };



// // const net = require("net");

// // const connect = function() {
// //   const conn = net.createConnection({
// //     host: "165.227.47.243",
// //     port: 50541
// //   });

// //   conn.setEncoding('utf8');

// // conn.on('connect', () => {
// //   console.log("Connected to SERVER!");
// //   conn.write("Name: Kude");
// // });

// // conn.on('data', data => {
// //   console.log(data);
// // });

// // return net;
// // };