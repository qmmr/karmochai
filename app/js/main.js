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
		$('h1').text('Hello and welcome to requirejs world!')
	})
})
