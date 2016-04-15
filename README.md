#Weekend Assignment

In this weekend assignment you will br creating a ticket management sysystem using the MEAN Stack with the option to swap out AngularJS with jQuery. If you choose to use AngularJS, your controllers should use the 'controller as' syntax.  You app's index.html should load with a series of inputs with the following fields:

* Type (String)
* Priority (String)
* Description (String)
* Assignee (String)
* Reporter (String)

The following fields should be on the Ticket model, but updated on the server:
* Created (Date)
* Updated (Date)

You should be able to submit the ticket to the server and it should be saved into MongoDB. As tickets are added, they should appear below listed 2 per row each within their own Bootstrap 'well'. The remainder of the page should be styled with Bootstrap as well. If the page is refreshed, the tickets listed below should remain.   


##Hard Mode
Add buttons to each ticket to allow them to be removed (the button should read 'completed'). 

##Pro mode
Allow all of the tickets fields to be updated and saved. 
