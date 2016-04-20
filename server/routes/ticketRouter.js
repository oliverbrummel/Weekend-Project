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

  var newTicket = new Ticket (request.body);
    newTicket.created = new Date();
    newTicket.updated = new Date();

  // var newTicket = new Ticket ({
  //   name: data.name,
  //   type: data.type,
  //   priority: data.priority,
  //   description: data.description,
  //   assignee: data.assignee,
  //   reporter: data.reporter,
  //   created: new Date(),
  //   updated: new Date()
  // })
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

router.delete('/remove/:id', function(request, response){
  // var id = request.params.id;
  Ticket.findOneAndRemove({_id: request.params.id}, function(err, ticket){
    if(err){
      response.sendStatus(500);
    } else {
      console.log('router.delete going through');
      console.log(request.params.id);
      response.sendStatus(200);
    }
  })
})

router.put('/editTicket', function(request, response){

  var newTicket = new Ticket(request.body);
  newTicket.updated = new Date();

  Ticket.findOneAndUpdate({_id: request.body._id}, newTicket, function(err, ticket){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      console.log('router.put going through');
      response.sendStatus(200);
    }
  })
})




module.exports = router;
