$(function(){
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

	function anim_scroll(elem, speed){
		$("html").animate(
      {scrollTop: $(elem).offset().top}, speed);
	}
	// animate scrolling
	let speed = 400;

	// top button
	$(".top").click(function(e) {
		anim_scroll("header", speed)
	});
	// projects button
	$(".projects").click(function(e) {
		anim_scroll("#projects", speed)
	});
	// about button
	$(".about").click(function(e) {
		anim_scroll("#about", speed)
	});
	// contact button
	$(".contact").click(function(e) {
		anim_scroll("#contact", speed)
	});

	// wait until page is fully loaded to play animation
	// body fade in
	$("body").css("animation-play-state", "running");

	// header image/logo slide
	$("header img").css("animation-play-state", "running");

	// $("header").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
	// 	console.log("anim ended");
	// });
	// $('#blue').animate({opacity: '1'}, 3500).delay(500).queue(function() {
  //   $('#blue').fadeOut('fast');
  //   $('#orange').animate({opacity: '1'}, 3500).delay(1000).queue(function() {
  //       $(this).fadeOut('fast');
  //       $('#green').animate({opacity: '1'}, 3500);
  //   });
	// });
	function done(){
		console.log("done");
	}

	// $(".wrapperhide")
	// .animate({opacity: "0"}, 2000), function(){

	// done()

	// }
	alert('page is loaded then anims start')
	function header_anim(){
		$('header img').animate(
			{ top: "0px" },
			400, function() {
		});
	}

	$('.wrapperhide').animate({
		opacity: 0,
	},
     400, function() {
			$('.wrapperhide').css("display","none");
			header_anim();
  });
	// .animate({fontSize: "46px"})
	// .animate({borderWidth: 30})


	});


