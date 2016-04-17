var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var moment = require('moment');

var index = require('./routes/index.js');
var tickets = require('./routes/ticketRouter.js');

moment().format('yyyy-mm-dd');



//[[[[[[[[[[[[[[[[[[[[[[[[[[[[MongoDB]]]]]]]]]]]]]]]]]]]]]]]]]]]]
var MongoDB = mongoose.connect('mongodb://localhost/work_tickets').connection;

MongoDB.on('error',function(err){
  console.log('MongoDB connection error:', err);
});
MongoDB.once('open', function(){
  console.log('MongoDB connection open');
})

//[[[[[[[[[[[[[[[[[[[[[[[[[[[[[Express]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
var app = express();


app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/', index);
app.use('/tickets', tickets);


var server = app.listen('3000', function(){
  var port = server.address().port;
  console.log('Listening on port:', port + '. Press ctrl-c to stop.');
})
