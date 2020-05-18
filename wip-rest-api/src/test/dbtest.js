const test = require('tape')
const build = require('../database/build')
const model = require('../model')

test('Test to see if this runs', t => {
    t.equal(1 + 1, 2, '1+1 should equal 2')
    t.end()
  })

test('Check model is exporting getAllUsers function', t => {
    build()
      .then(() => {
        t.equal('getAllUsers' in model, true)
        t.end()
      })
      .catch(error => {
        t.error(error)
        t.end()
      })
  })