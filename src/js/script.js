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


//Range

const inputRange = $('#html-input-range');
let htmlInputRange = {
  idNotThere : '<p>Note: Missing input tag id name e.g html-input-range</p>',
  init () {
    if (inputRange.length > 0) {
      let inputRanges = $('#html-input-range');
      inputRanges.parent().addClass('html-inupt-range');
      // if too many input ranges there for now hiding this part.
      // inputRanges.each(function( index ) {
      //   let $this = $(this);
      // });
      let $this = inputRanges;
        // default input range starts at 0 and ends at 100
        $this.attr({
          min: 0,
          max: 100,
          value: 0,
          step: 1
        });
    } else {
      $('input[type=range]').parent().append(htmlInputRange.idNotThere);
    }
  },
  options (inputs) {
    htmlInputRange.init();
    let options = inputs;
    // custom tracker
    $('input[type=range]').parent().addClass('html-input-range-custom');
    $('input[type=range]').parent().append('<div class="hir-tracker-bg"></div><div class="hir-tracker-thumb"></div>');
    
    let min = 0;
    let max = 100;

    if (options.tooltip === true) {
      if (options.max && options.min) {
        max = options.max;
        min = options.min;

        $(inputRange).attr({
          max: options.max,
          min: options.min
        });
      }
      
      $('input[type=range]').parent().append('<div class="tooltip">'+ min +'</div>');
    }

    if (options.labels === true) {
      $(inputRange).parent().append('<ul class="hir-labels"></ul>');
      let setWidth;
      if (options.max) {
        setWidth = options.max/10;
      } else {
        setWidth = max/10; 
      }
      for (let i = 0; i < setWidth; i++) {
        $('.hir-labels').append('<li class="col-'+ setWidth +' "></li>');
      }
    }
  }
}

$(inputRange).on('input change', inputRange, function (e) {

  let inputMin = parseInt(inputRange.attr('min'));
  let inputMax = parseInt(inputRange.attr('max'));
  let selectedValue = inputRange.val();

  let distance = (selectedValue - inputMin) / Math.abs(inputMin - inputMax);

  let trackerTooltipMove = (distance * 100);
  $('.html-inupt-range .tooltip').css('left', trackerTooltipMove + '%');
  $('.html-input-range-custom .hir-tracker-thumb').css('width', trackerTooltipMove + '%');
  // updating tooltip value based on the range from to.
  $('.html-inupt-range .tooltip').text(selectedValue);
});


$(document).ready(function () {
  // initiating html input range plugin
  // htmlInputrange.default();
  // if you want to customize html input range plugin
  htmlInputRange.options({
    tooltip: true,
    min: 1,
    max: 10,
    value: 1,
  });
});

//Range