
var _ = require('highland');

module.exports = function () {
	var curLine = ""
	return function (err, x, push, next) {
		if (err) {
			push(err)
			next()
		} else if (x === _.nil) {
			if (curLine.length > 0) {
				push(null, curLine)
			}
			push(null, x)
		} else {
			var i, parts = (curLine + x).split('\n')
			curLine = parts[parts.length - 1]
			for (i = 0; i < parts.length - 1; i++) {
				if (parts[i].length > 0) {
					push(null, parts[i])
				}
			}
			next()
		}
	}
}
