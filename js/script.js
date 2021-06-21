// everything inside this runs after page load
$(function(){

	// art gallery code
	$(".artwork ol li img").click(function(e) {
			// grab url src and desc from the image that was clicked
			let desc = $(this).attr("alt");
			let src = $(this).attr("src");
			let url = '<img src="' + src + '" />';

			// change html contents of .artwork-image to correct image <img src>
			$(".artwork-image .imagebox").html(url);
			// change imagebox-desc text
			$(".artwork-image .imagebox-desc").html(desc);
			// show overlay when clicked
			$(".overlay").css("display","flex");
	});
	
	// make sure we can close the overlay if the image is clicked
	$(".artwork-image").click(function(e) {
			$(".overlay").css("display","none");
	});
	
	// make sure we can close the overlay if the overlay is clicked
	$(".overlay").click(function(e) {
			$(".overlay").css("display","none");
	});

	// animate scrolling to each section
	function anim_scroll(elem, speed){
		$("html").animate(
      {scrollTop: $(elem).offset().top}, speed);
	}

	// scroll speed
	let speed = 400;

	// top button
	$(".top").click(function() {
		anim_scroll("header", speed)
	});

	// projects button
	$(".projects").click(function() {
		anim_scroll("#projects", speed)
	});

	// about button
	$(".about").click(function() {
		anim_scroll("#about", speed)
	});

	// contact button
	$(".contact").click(function() {
		anim_scroll("#contact", speed)
	});


	var tl = new TimelineMax();
	// body fade in animation 
	tl.fromTo(".wrapperhide", 5.5, {opacity:1}, {opacity:0, display:'none'});
	// logo slide in from bottom animation
	tl.fromTo("header img", 0.5, {y:380}, {y:0});
	// nav fade in animation
	let nav = "nav ul li a";
	tl.staggerFromTo(nav, 1, {opacity:0, y:100}, {opacity:1, y:0}, 0.2);
	});
