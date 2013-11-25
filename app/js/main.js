requirejs.config({
	baseUrl: 'app',
	paths: {
		'jquery': '../components/jquery/jquery'
	}
})

require(['jquery'], function ($) {
	$(function () {
		$('h1').text('This is jQuery - loaded from main.js')
	})
})
