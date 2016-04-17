var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var ticketSchema = new Schema({
  name: {type: String, required: true},
  type: {type: String, required: true},
  priority: {type: String, required: true},
  description: {type: String, required: true},
  assignee: {type: String, required: true},
  reporter: {type: String, required: true},
  created: Date,
  createdString: String,
  updated: Date,
  updatedString: String
})

var Ticket = mongoose.model('ticket', ticketSchema);

module.exports = Ticket;
