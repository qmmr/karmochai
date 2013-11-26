requirejs.config({
	baseUrl: '',
	paths: {
		'jquery': '../components/jquery/jquery'
	},
	packages: [
		{ name: 'lodash', location: '../components/lodash', main: 'lodash' }
	]
})

require(['jquery', 'lodash', 'js/app'], function ($, _, App) {
	$(function () {
		$('h1').text('Hello and welcome to requirejs world!')
		$('#hero').append($('<ul>'))
		console.log('%cMARCIN => App.truthyValues', 'background: #222; color: lime', App.truthyValues)
	})
})
