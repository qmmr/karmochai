module.exports = function (grunt) {

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		karma: {
			options: {
				cofigFile: 'karma.conf.js',
				runnerPort: 9876,
				browsers: ['Chrome']
			},
			continuous: {
				// singleRun: true,
				browsers: ['PhantomJS']
			},
			dev: {
				reporters: 'dots'
			}
		}
	})

	// grunt.loadNpmTasks()

	grunt.registerTask('default', ['karma'])
};
