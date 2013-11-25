requirejs.config({
	baseUrl: 'app',
	paths: {
		'jquery': '../components/jquery/jquery'
	},
	packages: [
		{ name: 'lodash', location: '../components/lodash', main: 'lodash' }
	]
})

require(['jquery', 'lodash'], function ($, _) {
	$(function () {
		$('h1').text('This is jQuery - loaded from main.js')
		var truthies = _.compact([0, undefined, 1, null, 2, '', 3, false, 4, NaN, 5])
		console.log(truthies)
	})
})
