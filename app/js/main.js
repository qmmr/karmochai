requirejs.config({
	baseUrl: 'app',
	paths: {
		'jquery': '../components/jquery/jquery'
	}
})

require(['jquery'], function ($) {
	$(function () {
		console.log('This is jQuery - loaded from main.js')
	})
})
