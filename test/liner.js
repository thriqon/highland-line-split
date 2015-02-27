
var chai = require('chai'),
    expect = chai.expect,
    _ = require('highland')

var liner = require('../index.js')

function parsedTo(source, target, done) {
	_(source)
		.consume(liner())
		.toArray(function (res) {
			expect(res).to.be.eql(target)
			done()
		})
}


describe('liner', function () {
	it('splits simple line', function (done) {
		parsedTo(['ASD'], ['ASD'], done)
	})

	it('splits lines of a simple string', function (done) {
		parsedTo(['ASD\nDSA'], ['ASD', 'DSA'], done)
	})

	it('splits lines of a simple string ending with newline', function (done) {
		parsedTo(['ASD\nDSA\n'], ['ASD', 'DSA'], done)
	})

	it('splits lines of a simple string starting with newline', function (done) {
		parsedTo(['\nASD\nDSA\n'], ['ASD', 'DSA'], done)
	})

	it('splits lines of a simple string from multiple parts', function (done) {
		parsedTo(['\nASD', '\nDSA\n'], ['ASD', 'DSA'], done)
	})

	it('splits lines of a simple string from many parts', function (done) {
		parsedTo(['ASD', '\n', '\n', '\nDSA\n'], ['ASD', 'DSA'], done)
	})

	it('splits an empty string to nothing', function (done) {
		parsedTo([''], [], done)
	})

	it('splits a string with newlines to nothing', function (done) {
		parsedTo(['\n', '\n\n'], [], done)
	})

	it('splits nothing to nothing', function (done) {
		parsedTo([], [], done)
	})

	it('forwards errors', function (done) {
		var errors = []

		_(function (push, next) {
			push(5)
			push(null, _.nil)
		})
			.consume(liner())
			.errors(function (err, push) {
				errors.push(err)
			})
			.toArray(function (res) {
				expect(res.length).to.be.equal(0)
				expect(errors.length).to.be.equal(1)
				done()
			})
	})
})

