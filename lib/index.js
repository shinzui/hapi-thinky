const thinkyFactory = require('thinky')
const packageJson = require('../package.json')

exports.register = (server, options, next) => {
  const thinky = thinkyFactory(options)

  server.expose('thinky', thinky)
  server.expose('r', thinky.r)

  next()
}

exports.register.attributes = {
  pkg: packageJson
}
