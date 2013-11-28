module.exports = function (grunt) {

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			karma: {
				files: ['app/js/**/*.js', 'test/spec/**/*.spec.js'],
				tasks: ['karma:unit:run']
			}
		},

		karma: {
			options: {
				configFile: 'karma.conf.js',
				runnerPort: 9999,
			},
			unit: {
				browsers: ['Chrome'],
				background: true
			},
			continuous: {
				singleRun: true,
				browsers: ['PhantomJS']
			},
			dev: {
				singleRun: false,
				browsers: ['Chrome'],
				reporters: ['dots']
			}
		}
	})

	/* load tasks from tasks dir */
	grunt.loadTasks('tasks')

	grunt.registerTask('test', 'Run Karma test', ['karma:continuous'])
	grunt.registerTask('default', ['karma:unit', 'watch'])
};
