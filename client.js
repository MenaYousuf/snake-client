const net = require('./play');
// const { IP, PORT } = require('./play');

const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Connected to SERVER!");
    conn.write("Name: Rumi");
  });
  
  conn.on('data', data => {
    console.log(data);
  });

  return conn;
};

module.exports = { net };