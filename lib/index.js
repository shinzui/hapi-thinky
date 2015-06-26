var Hoek = require('hoek')

exports.register = function(server, options, next) {
  var thinky = require('thinky')(options)

  server.expose('thinky', thinky)
  server.expose('r', thinky.r)

  next()
}

exports.register.attributes = {
  pkg: require('../package.json')
}
