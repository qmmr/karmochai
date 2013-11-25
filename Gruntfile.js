module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		karma: {
			options: {
				cofigFile: 'karma.conf.js',
				runnerPort: 9876,
				browsers: ['Chrome', 'Firefox']
			},
			continuous: {
				singleRun: true,
				browsers: ['PhantomJS']
			},
			dev: {
				reporters: 'dots'
			}
		}
	})

	grunt.loadNpmTasks()

	grunt.registerTask('default', ['karma'])
};
