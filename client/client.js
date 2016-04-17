var app = angular.module('ticketApp', []);

app.controller('MainController', ['$http', function($http){
  var vm = this;
  vm.tickets = [];
  vm.ticket = {};

  vm.getTickets = function(){
    $http.get('/tickets/all').then(function(response){
      console.log(response);
      vm.tickets = response.data;
      vm.tickets.map(function(ticket){
        var cleanCreate = moment(ticket.created).format('MMMM Do YYYY, h:mm:ss a');
        ticket.createdString = cleanCreate;
        var cleanUpdate = moment(ticket.updated).format('MMMM Do YYYY, h:mm:ss a');
        ticket.updatedString = cleanUpdate;
        console.log(moment(ticket.created).format('MMMM Do YYYY, h:mm:ss a'));
      })
    })
  }

  vm.makeTicket = function(){
    $http.post('/tickets/makeTicket', vm.ticket).then(function(response){
      console.log(response);
      vm.ticket = {};
      vm.getTickets();
    })
  }

  vm.deleteTicket = function(ticket){
    console.log('deleteTicket function ran');
    $http.delete('/tickets/remove/' + ticket._id).then(function(response){
      console.log('Ticket removed');
      vm.getTickets();
    });

  }

  vm.getTickets();




//closes controller
}]);
