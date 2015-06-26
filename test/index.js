var Hapi = require('hapi')
var Lab = require('lab')
var Code = require('code')
var Path = require('path')

var ThinkyPlugin = require('../lib')

var internals = {}

internals.manifest = {
  connections: [
    {
      port: 0
    }
  ],
  plugins: {
    './index': {
      host: 'localhost',
      port: '28015',
      db: 'test'
    }
  }
}

internals.composeOptions = {
  relativeTo: Path.resolve(__dirname, '../lib')
}

var lab = exports.lab = Lab.script()
var expect = Code.expect
var it = lab.test

it('register the plugin', function(done) {
  var server = new Hapi.Server()
  var Plugin = {
    register: ThinkyPlugin,
    options: {}
  }

  server.register(Plugin, function (err) {
    expect(err).to.not.exist()
  })

  expect(server.plugins['hapi-thinky']).to.be.an.object()
  expect(server.plugins['hapi-thinky'].thinky).to.be.an.object()
  expect(server.plugins['hapi-thinky'].r).to.be.a.function()

  done()
})
