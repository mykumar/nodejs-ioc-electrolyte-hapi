'use strict';

// Hapi Provides a simple
// way to create our web service. See http://hapijs.com/ 
var Hapi = require('hapi');

// Here we are instantiating our Inversion of Control (IoC) container.
var ioc = require('electrolyte');

ioc.loader('models', ioc.node('models'));
ioc.loader('controllers', ioc.node('controllers'));
ioc.loader('config', ioc.node('config'));

var settings = ioc.create('config/settings');

var server = new Hapi.Server();
server.connection(settings.server.connection);

server.route(ioc.create('config/routes'));

server.start(function() {
  console.log('Server running at:', server.info.uri);
});