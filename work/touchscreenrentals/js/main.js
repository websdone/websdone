// Drag box using sortable from jquery.ui - Enable a group of DOM elements to be sortable
$(function() {
	$( "#dragBox1, #dragBox2" ).sortable({
	  connectWith: ".dragBox"
	}).disableSelection();
});

function submit(){
   var idsInOrder = [];
   var idsInOrder2 = [];
    // Remove the older entry
	$('.newOrder, .newOrder2').children(':first-child').remove();
	// re-order tiles
	$("ul#dragBox1 li").each(function() { 
		idsInOrder.push($(this).text()) 
	});
	$("ul#dragBox2 li").each(function() { 
		idsInOrder2.push($(this).text()) 
	});
	// re-order text
	$('.newOrder').append("<div><h1> New order column 1: </h1>" + "<p>" + idsInOrder.join('\n') + "</p>" + "</div>");
	$('.newOrder2').append("<div><h1> New order column 2: </h1>" + "<p>" + idsInOrder2.join('\n') + "</p>" + "</div>");
}
