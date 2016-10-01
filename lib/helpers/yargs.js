(function () {
  module.exports = function (app) {
    let argv = require('yargs')
    .options({
      'p': {
        alias: 'port',
        demand: false,
        default: 3000,
        describe: 'The port the web server will listen to.'
      },
      'c': {
        alias: 'coap',
        demand: false,
        default: 5683,
        describe: 'The port the coap server will listen to.'
      },
      'm': {
        alias: 'mqtt',
        demand: false,
        default: 1883,
        describe: 'The port the mqtt server will listen to.'
      },
      'q': {
        alias: 'mqtt-host',
        demand: false,
        default: '0.0.0.0',
        describe: 'The host of the mqtt server.\n Use :: as value for ipv6.'
      },
      'o': {
        alias: 'redis-port',
        demand: false,
        default: 6379,
        describe: 'The port of the redis server.'
      },
      'r': {
        alias: 'redis-host',
        demand: false,
        default: '127.0.0.1',
        describe: 'The host of the redis server.'
      },
      'd': {
        alias: 'redis-db',
        demand: false,
        default: 0,
        describe: 'The redis database to connect.'
      }
    })
    .help('h').alias('h', 'help')
    .epilog('Copyright 2016')
    .argv

    return argv
  }
}).call(this)
