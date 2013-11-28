var tests = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/spec\.js$/i.test(file)) {
			tests.push(file);
		}
	}
}

requirejs.config({
	// Karma serves files from '/base'
	baseUrl: '/base/app',

	paths: {
		'jquery': '../bower_components/jquery/jquery',
		'chai': '../test/lib/chai',
		'sinon': '../bower_components/sinon/lib/sinon',
		'sinon-chai': '../bower_components/sinon-chai/lib/sinon-chai'

		// 'underscore': '../bower_components/underscore/underscore',
		// 'backbone': '../bower_components/backbone-amd/backbone',
		// 'marionette': '../bower_components/marionette/lib/backbone.marionette',
	},

	packages: [
		{ name: 'lodash', location: '../bower_components/lodash/dist', main: 'lodash' }
	],

	// shim: {
	// 	'underscore': {
	// 		exports: '_'
	// 	},
	// 	'sinon': {
	// 		exports: 'sinon'
	// 	},
	// 	'marionette': {
	// 		exports: 'Marionette',
	// 		deps: ['backbone']
	// 	}
	// },

	// ask Require.js to load these files (all our tests)
	deps: ['chai', 'sinon', 'sinon-chai'].concat(tests),

	// start test run, once Require.js is done
	callback: function(chai, sinon, sinonChai) {
		window.expect = chai.expect;
		window.sinon = sinon;

		chai.use(sinonChai)

		window.__karma__.start()
	}
});
