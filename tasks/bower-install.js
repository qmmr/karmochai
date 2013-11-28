module.exports = function (grunt) {
	grunt.registerTask('bower-install', 'Install bower dependencies.', function () {
		var done = this.async()
		var bower = require('bower')

		grunt.log.subhead('Initialize bower install...')

		bower.commands.install()
			.on('log', function (resp) {
				grunt.log.oklns(resp.id + ' ' + resp.message)
			})
			.on('error', grunt.fail.warn)
			.on('end', function (resp) {
				grunt.log.subhead('All bower components have been installed, cheers!')
				done()
			})
	})
}
