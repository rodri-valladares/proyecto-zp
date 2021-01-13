const express = require("express");
const engine=require('ejs-mate');

//initializations
var app = express();

//settings
app.engine('ejs', engine);
app.set('view engine', 'ejs');

//RUTAS
app.get('/', (req,res)=>{
  res.render('index');
});

// starting the server
app.listen(3000, ()=>{
  console.log('Server on port 3000');
});
