$(document).ready(function() {

	new WOW().init();
	
	//Tiltedpage Activator
	$(".main").tiltedpage_scroll({
    sectionContainer: "> section",     // In case you don't want to use <section> tag, you can define your won CSS selector here
    angle: 50,                         // You can define the angle of the tilted section here. Change this to false if you want to disable the tilted effect. The default value is 50 degrees.
    opacity: true,                     // You can toggle the opacity effect with this option. The default value is true
    scale: true,                       // You can toggle the scaling effect here as well. The default value is true.
    outAnimation: true                 // In case you do not want the out animation, you can toggle this to false. The defaul value is true.
});
	//Counterup Activator
	$('.counter').counterUp({
		delay: 1,
		time: 10000
	});
	//Owl Carousel Activator
	$('.owl-carousel').owlCarousel();
	//Slick Slider Activator
	$('.slick-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});
	//Round Slider Activator
	$(".slider_01").roundSlider({
    radius: 90,
    width: 10,
    handleSize: "+10",
    sliderType: "min-range",
    value: "60"
});
	$(".slider_02").roundSlider({
    radius: 80,
    width: 14,
    handleSize: "+8",
    handleShape: "dot",
    sliderType: "min-range",
    value: 40
});
	$(".slider_03").roundSlider({
    radius: 90,
    width: 14,
    handleSize: "+0",
    sliderType: "range",
    value: "5,55"
});
	$(".slider_04").roundSlider({
    radius: 80,
    width: 22,
    handleSize: "+0",
    sliderType: "min-range",
    value: 55
});


});