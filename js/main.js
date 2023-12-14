AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


// function initComparisons() {
// 	let x = document.getElementsByClassName("img-comp-overlay");
// 	for (let i = 0; i < x.length; i++) {
// 		compareImages(x[i]);
// 	}
// 	function compareImages(img) {
// 		let slider, clicked;
// 		let w = img.offsetWidth;
// 		let h = img.offsetHeight;
// 		img.style.width = w / 2 + "px";
// 		slider = document.createElement("DIV");
// 		slider.setAttribute("class", "img-comp-slider");
// 		img.parentElement.insertBefore(slider, img);
// 		slider.style.top = h / 2 - slider.offsetHeight / 2 + "px";
// 		slider.style.left = w / 2 - slider.offsetWidth / 2 + "px";
// 		slider.addEventListener("mousedown", slideReady);
// 		window.addEventListener("mouseup", slideFinish);
// 		slider.addEventListener("touchstart", slideReady);
// 		window.addEventListener("touchend", slideFinish);
// 		


function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("slider");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}
