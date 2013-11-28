module.exports = function (grunt) {
	grunt.registerMultitask('bower-install', function () {
		var done = this.async()
		var bower = require('bower')
		bower.commands.install()
			.on('log', function (resp) {
				grunt.log.oklns(resp)
			})
			.on('error', function (resp) {
				grunt.fail.warn(resp)
			})
			.on('end', function (resp) {
				grunt.subhead()
				done()
			})
	})
}
