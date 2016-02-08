'use strict';

// Here we are using Node.js's module caching to retrieve a reference to the
// IoC container we created in server.js. That means we have immediate access
// to all of the component namespaces we defined previously, as well as any
// singleton objects that have already been instantiated.
var ioc = require('electrolyte');

var routes = [];

routes.push({
  method: 'GET',
  path: '/employee/{name}',

  
  handler: ioc.create('controllers/employeeController')
});

// This is a standard Node.js export. When this module is loaded by Electrolyte,
// Electrolyte will detect that it is a literal object and behave accordingly.
exports = module.exports = routes;

exports['@singleton'] = true;