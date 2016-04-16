var express = require('express');
var path = require('path');
var Ticket = require('../../models/ticket.js');


var router = express.Router();

router.get('/all', function(request, response){
  Ticket.find({}, function(err, tickets){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      response.send(tickets);
    }
  })
})

router.post('/makeTicket', function(request, response){
  console.log('Requested with a body of', request.body);

  var data = request.body

  var newTicket = new Ticket ({
    name: data.name,
    type: data.type,
    priority: data.priority,
    description: data.description,
    assignee: data.assignee,
    reporter: data.reporter,
    created: new Date(),
    updated: new Date()
  })
  newTicket.save(function(err){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      console.log('Ticket saved!');
      response.sendStatus(200);
    }
  })
})


module.exports = router;
