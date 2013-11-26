var tests = [];
for (var file in window.__karma__.files) {
	if (window.__karma__.files.hasOwnProperty(file)) {
		if (/spec\.js$/.test(file)) {
			tests.push(file);
		}
	}
}

requirejs.config({
	// Karma serves files from '/base'
	baseUrl: '/base/app',

	paths: {
		'jquery': 'components/jquery/jquery',
		'chai': 'components/chai/chai',
		// 'chai': '../node_modules/chai/chai',
		'sinon': 'components/sinon/lib/sinon',
		'sinon-chai': 'components/sinon-chai/lib/sinon-chai'

		// 'underscore': '../components/underscore/underscore',
		// 'backbone': '../components/backbone-amd/backbone',
		// 'marionette': '../components/marionette/lib/backbone.marionette',
	},

	packages: [
		{ name: 'lodash', location: 'components/lodash', main: 'lodash' }
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
