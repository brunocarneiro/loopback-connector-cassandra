var DataSource = require('loopback-datasource-juggler').DataSource;

var config = require('rc')('loopback', {test: {cassandra: {
  host: 'localhost',
  keyspace: 'test'
}}}).test.cassandra;

console.log(require('../'));
global.getDataSource = global.getSchema = function() {
  var db = new DataSource(require('../'), config);
  return db;
};

global.sinon = require('sinon');
