'use strict';

// Our controller will use this local module scoped variable
// to access the data our web service will return. This object will be
// created by an IoC dependency injected component.
var emp;

// This function will ultimately be returned as the export of this module.
// It is what Hapi will use to process requests for the '/employee' end point.
function employeeController(request, reply) {
  // Hapi will take care of serializing the `foo` object for us and send
  // the result as the reply.
  
  if(request.params.name === 'Jessie') {
    reply(emp);  
  } else {
    reply("Please enter the employee name as Jessie");  
  }
  
}

// When Electrolyte encounters a module that merely exports a function, and
// doesn't have a '@literal' annotation, then it recognizes that function
// as a factory function. Electrolyte will invoke this function to create an
// instance of the desired module, in this case 'employeeController', and return
// the result. The parameters of the factory function map 1-to-1 to
// components listed in a '@require' annotation 
exports = module.exports = function(Employee) {
  
  emp = new Employee();
  var personal_details = {
    "Name" : "Jessie",
    "Age" : "24",
    "Department" : "Research Department",
  };
  
  var Address = {
    "City" : "Auckland",
    "Subrub" : "Mt. Albert",
  }; 

  var research_info = {
    "analysis" : "Principles of the business",
  }; 

  
  emp.addData(personal_details);
  emp.addData(Address);
  emp.addData(research_info);

  return employeeController;
};

// This is an Electrolyte annotation that defines the components the
// 'employeeController' module dependes upon. 
exports['@require'] = [ 'models/Employee' ];

// The Electrolyte annotation to indicate that the 'employeeController' component
// should only be instantiated once.
exports['@singleton'] = true;


