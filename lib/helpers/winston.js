(function () {
  const winston = require('winston')
  const log = process.env.LOG_LEVEL || 'debug'

  module.exports = (app) => {
    let logger = new (winston.Logger)({
      level: log,
      levels: {
        debug: 4,
        coap: 3,
        mqtt: 2,
        socket: 1,
        error: 0
      },
      transports: [
        new (winston.transports.Console)({
          'level': log,
          'timestamp': () => {
            return (new Date()).toLocaleString().replace(',', '').trim()
          },
          formatter: (options) => {
            return options.timestamp() + ' ' +
              winston.config.colorize(options.level, options.level.toUpperCase()) + ' - ' +
              (undefined !== options.message ? options.message : '')
          },
          'colorize': true
        })
      ],
      colors: {
        debug: 'blue',
        coap: 'green',
        mqtt: 'cyan',
        socket: 'yellow',
        error: 'red'
      }
    })
    return logger
  }
}).call(this)
