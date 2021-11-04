
const net = require('net');
const { IP, PORT } = require('./constants');
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', () => {
    console.log('Successfully connected to the game server!');
    let name = 'SDC';
    const up = () => conn.write('Move: up');
    const down = () => conn.write('Move: down');
    const left = () => conn.write('Move: left');
    const right = () => conn.write('Move: right');
    conn.write(`Name: ${name}`);
  });

  conn.on('data', (data) => {
    // console.log("Message from server received!");
    console.log(data);
  });
  

  return conn;
};


module.exports = {connect};

