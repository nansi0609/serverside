const express = require('express');
var http = require('http');
const app = express();
var path = require('path');
const PORT = 8080;
var jsdom = require('JSDOM')
var events = require('events');

app.use(express.json());
console.log(__dirname)  ; 
app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));
app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
});
app.get('/Ex1_Basic_Json.json', function (req, res) {
  res.sendFile( __dirname + "/" + "Ex1_Basic_Json.json" );
});
