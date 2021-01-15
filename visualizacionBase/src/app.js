const express = require("express");
const engine=require('ejs-mate');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

//initializations
var app = express();
const server = http.createServer(app);
const io=socketIO(server);
//settings
app.engine('ejs', engine);
app.set('view engine', 'ejs');

//RUTAS
app.use(require('./routes/'));

//socket
require('./socket')(io);

// static files
app.use(express.static(path.join(__dirname, 'public')));


// starting the server
server.listen(3000, ()=>{
  console.log('Server on port 3000');
});
