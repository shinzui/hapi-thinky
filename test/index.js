const Hapi = require('hapi')
const Lab = require('lab')
const Code = require('code')
const Path = require('path')

const ThinkyPlugin = require('../lib')

const internals = {}

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

const lab = exports.lab = Lab.script()
const expect = Code.expect
const it = lab.test

it('register the plugin', (done) => {
  const server = new Hapi.Server()
  const Plugin = {
    register: ThinkyPlugin,
    options: {}
  }

  server.register(Plugin, (err) => {
    expect(err).to.not.exist()
  })

  expect(server.plugins['hapi-thinky']).to.be.an.object()
  expect(server.plugins['hapi-thinky'].thinky).to.be.an.object()
  expect(server.plugins['hapi-thinky'].r).to.be.a.function()

  done()
})
