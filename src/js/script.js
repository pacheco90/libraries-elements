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


//Pay bpage

function showNumberCard(){
  var x = document.getElementById("credit-card");
  var y = document.getElementById("hide2");
  var z = document.getElementById("hide1");
  
  if(x.type === 'text'){
    x.type = "password";
    y.style.display = "block";
    z.style.display = "none";
  }else{
    x.type = "text";
    y.style.display = "none";
    z.style.display = "block";
  }
}


$(document).ready(function(){

  $('#num-id').inputmask({
    "mask": "99999999-9", "placeholder" : "-", "clearMaskOnLostFocus": false
  });

  $('#exp').inputmask({
    "mask": "99 / 99", "placeholder" : "MM / YY", "clearMaskOnLostFocus": false
  });

  $('#credit-card').inputmask({
    "mask": "9999 9999 9999 9999 9999", "placeholder" : "-", "clearMaskOnLostFocus": true
  });

  $('#ccv').inputmask({
    "mask": "999", "placeholder" : "-", "clearMaskOnLostFocus": true
  });
});




const showAlert = ()=>{
Swal.fire({
  title: '¿Esta seguro que quiere cancelar su orden?',
  showDenyButton: false,
  showCancelButton: true,
  confirmButtonText: 'Cancelar mi orden',
  cancelButtonText:'Regresar',
  denyButtonText: `Don't save`,
  }).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire('Fue cancelada con éxito!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
  })
}




//ClickHold


const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const startEvent = isMobile ? 'touchstart' : 'mousedown';
const endEvent = isMobile ? 'touchend' : 'mouseup';

//add styles to stylesheet
const sheet = document.styleSheets[0];
sheet.insertRule(".hf_noSelect {-webkit-touch-callout: none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none; user-select: none; -webkit-tap-highlight-color: transparent; }", sheet.cssRules.length);
sheet.insertRule(".hf_buttfill { height: 100%;width: 100%;position: absolute;-webkit-clip-path: inset(0% 50%);clip-path: inset(0% 50%); }", sheet.cssRules.length);
sheet.insertRule(".hf_clicked .hf_buttfill {-webkit-clip-path: inset(0% 0%);clip-path: inset(0% 0%); }", sheet.cssRules.length);


let holdFill = function (element, fillColor, textColor, holdTime, callBack) {

  //add the noselect class to the element to prevent browser BS
  element.classList.add('hf_noSelect');

  //add the style for the timing to the element
  element.setAttribute("style", "-webkit-transition: " + holdTime + "ms ease-in-out;transition: " + holdTime + "ms ease-in-out;");

  //create the backfill element and add it to the DOM.
  let newDiv = document.createElement("div");
  newDiv.classList.add('hf_buttfill');
  element.insertBefore(newDiv, element.firstChild);

  //add color and timing styles to .hf_buttfill
  element.querySelector('.hf_buttfill').setAttribute("style", "background-color: " + fillColor + ";-webkit-transition: " + holdTime + "ms ease-in-out;transition: " + holdTime + "ms ease-in-out;");

  //define the functions to be used
  let addClickClass = function (e) {
      element.classList.add('hf_clicked');
      element.setAttribute("style", "color: " + textColor + ";-webkit-transition: " + holdTime + "ms ease-in-out;transition: " + holdTime + "ms ease-in-out;");
      element.addEventListener('transitionend', callBack);
  };
  let removeClickClass = function (e) {
      element.classList.remove('hf_clicked');
      element.setAttribute("style", "-webkit-transition: " + holdTime + "ms ease-in-out;transition: " + holdTime + "ms ease-in-out;");
      element.removeEventListener('transitionend', callBack);
  };

  //prevent context menu on longpress for mobile devices
  if (isMobile) {
      element.oncontextmenu = function (event) {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          return false;
      };
  }

  //add or remove the clicked classes on the button
  element.addEventListener(startEvent, addClickClass);
  document.body.addEventListener(endEvent, removeClickClass);

};

holdFill(document.getElementById('theButton'), '#6C53E4', '#fff', 800, function () {
  // document.querySelector('.callbackdiv').classList.add('show');
showAlert();
  // document.getElementById('theButton').classList.add('clickedClone');

  setTimeout(() => {
      // document.querySelector('.callbackdiv').classList.remove('show');
      // document.getElementById('theButton').classList.remove('clickedClone');
  }, 4000);
});

//pay page