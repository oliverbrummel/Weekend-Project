var app = angular.module('ticketApp', []);

app.controller('MainController', ['$http', function($http){
  var vm = this;
  vm.tickets = [];
  vm.ticket = {};

  vm.getTickets = function(){
    $http.get('/tickets/all').then(function(response){
      console.log(response);
      vm.tickets = response.data;
    })
  }

  vm.makeTicket = function(){
    $http.post('tickets/makeTicket', vm.ticket).then(function(response){
      console.log(response);
      vm.ticket = {};
      vm.getTickets();
    })
  }

  vm.getTickets();




//closes controller
}]);
