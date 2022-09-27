//barra de navegacion
const navigator = document.querySelector(".navigation");
document.querySelector(".bars").addEventListener("click", ()=> navigator.classList.add('show'));
document.querySelector(".closebar").addEventListener("click", ()=> navigator.classList.remove('show'));

//Reduce Header
const header = document.querySelector("header");

window.addEventListener('scroll', () => (window.scrollY > 300) ? header.classList.add('reduce_header') :  header.classList.remove('reduce_header')  );
//Reduce Header

//barra de navegacion


// sliders

$(document).ready(()=>{
	$(".slider").slick({
		dots: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: false
	});

	$('.slider2').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
		adaptiveHeight: true

    });
    
    $(".carousel-arrows .left2").click( () => {
		$(".slider2").slick('slickPrev');
	});

	$(".carousel-arrows .right2").click( () => {
		$(".slider2").slick('slickNext');
	});

	$('.slider3').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
		adaptiveHeight: true

    });
    
    $(".carousel-dots .left3").click( () => {
		$(".slider2").slick('slickPrev');
	});

	$(".carousel-dots .right3").click( () => {
		$(".slider3").slick('slickNext');
	});

});
// sliders


//accordeon

	const showAccordeon = (elem, height) => {
		elem.parentElement.classList.add('show');
		elem.style.height = height + "px"
	};
	const closeAccordeon = (elem) => {
		elem.parentElement.classList.remove('show');
		elem.style.height = "0px"
	};

	if(document.querySelector(".accordeon"))
	document.querySelector(".accordeon").addEventListener('click', (elem) => {
		let show= elem.target.parentElement.classList.contains("show");        
		!show ? showAccordeon(elem.target.nextElementSibling, elem.target.nextElementSibling.scrollHeight) : closeAccordeon(elem.target.nextElementSibling);
	});

//accordeon

//dropkick

$(document).ready(()=>{
	$('select').dropkick();
});

//fancybox

$(document).ready(()=>{
	$(".fancybox").fancybox();
});

//aos

AOS.init();


//Scroll Drageable


const Drageable = document.querySelector(".radar-cards");
let isDown = false;
let startX;
let scrollLeft;


Drageable.addEventListener('mousedown', (e) =>{
	isDown = true;
	Drageable.classList.add('active');
	startX = e.pageX - Drageable.offsetLeft;
	scrollLeft = Drageable.scrollLeft; 
});

Drageable.addEventListener('mouseleave', () =>{
	isDown = false;
	Drageable.classList.remove('active');

});

Drageable.addEventListener('mouseup', () =>{
	isDown = false
	Drageable.classList.remove('active');

});

Drageable.addEventListener('mousemove', (e) =>{
	if(!isDown) return;
	e.preventDefault();
	const x = e.pageX - Drageable.offsetLeft;
	const walk = x - startX;
	Drageable.scrollLeft = scrollLeft - walk;

});

//Scroll Drageable