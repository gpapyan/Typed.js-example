$(window).ready(function(){
	var winHeight = $(window).height();

	$(".slide")
	.height(winHeight)
	.scrollie({
		scrollOffset: -50,
		scrollingInView: function(elem){
			var bgColor = elem.data("background");

			$("body").css("background-color", bgColor);
		}
	});
});