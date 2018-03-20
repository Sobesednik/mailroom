const { equal, assert } = require('zoroaster/assert')
const context = require('../context')
const mailroom = require('../..')

const mailroomTestSuite = {
    context,
    'should be a function'() {
        equal(typeof mailroom, 'function')
    },
    'should call package without error'() {
        assert.doesNotThrow(() => {
            mailroom()
        })
    },
}

module.exports = mailroomTestSuite
