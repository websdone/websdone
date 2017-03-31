(function($) {

var container = $('<div />', {css: {margin: 'auto', width:1920, height:1080} })
	.appendTo($('#sample-viewer'));

	$('<div />', {'class': 'sample-flipbook', 'id' : 'flipbook'})
		.appendTo(container)
		.html(
			
			'<div class="hard">Page 1</div>' +
			'<div class="hard">Page 2</div>' +
			'<div class="hard">Page 3</div>' +
			'<div class="hard">Page 4</div>' 
		);

Wait until it renders
	
$('#flipbook').turn({
	width:1920,
	height:1080,
	page: 1,
	autoCenter: true,
	shadows: $.isTouch,
	acceleration: $.isTouch,
	when: {
			turned: function(event, page, pageObj) {
			alert(‘the current page is ’ + page);
		}
	}
});



})(jQuery);