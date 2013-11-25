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
		var uppers = _(['one', 'two', 'three']).map(function (str) {
			return str.toUpperCase()
		})
		console.log(uppers)
	})
})
