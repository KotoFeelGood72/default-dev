let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
const win = document.body

$(document).ready(function ($) {
	$body = $('body');

});

$(window).on('load', function () {
	updateSizes();
	// popup('14px', '.form_open', '.popup_form');
	// popup('14px', '.addservices_item', '.popup_info');
	// if (windowWidth > mediaPoint1) {
	// } else {
	// 	popup('0', '.form_open', '.popup_form');
	// 	popup('0', '.addservices_item', '.popup_info');
	// 	burgerMobile();
	// }
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});


function resizeFunc() {
	updateSizes();
}

function scrollFunc() {}



function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

function succes(success) {
	$(success).toggleClass('active');
	setTimeout(function () {
		$(success).removeClass('active')
	}, 3000)
}

function close(closes) {
	$(closes).toggleClass('active');
	setTimeout(function () {
		$(closes).removeClass('active')
	}, 3000)
}






$(document).ready(function () {
	const btns = document.querySelectorAll('.btn')

	btns.forEach(el => {
		el.addEventListener('click', function (e) {
			let
				size = Math.max(this.offsetWidth, this.offsetHeight),
				x = e.offsetX - size / 2,
				y = e.offsetY - size / 2,
				wave = this.querySelector('.wave')

			// Create an element if it doesn't exist
			if (!wave) {
				wave = document.createElement('span')
				wave.className = 'wave'
			}
			wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
			this.appendChild(wave)
		})
	})
})







function burgerMobile() {
	const triggerBurger = document.querySelector('.burger-btn');
	const burgerPopup = document.querySelector('.burger');

	console.log('Good');

	triggerBurger.addEventListener('click', () => {
		burgerPopup.classList.toggle('active');
		triggerBurger.classList.toggle('active');
	});
}

// $(document).ready(function() {

// 	$(".forms_action input").on("blur input focus", function() {
// 		var $field = $(this).closest("li");
// 		if (this.value) {
// 			$field.addClass("filled");
// 		} else {
// 			$field.removeClass("filled");
// 		}
// 	});

// 	$(".forms_action input").on("focus", function() {
// 		var $field = $(this).closest("li");
// 		if (this) {
// 			$field.addClass("filled");
// 		} else {
// 			$field.removeClass("filled");
// 		}
// 	});
// })

// function accordion(title, content) {
// 	// hide all content	
// 	let accordionTitle = $(title),
// 		accordionContent = $(content);
// 	$(accordionContent).not(":nth-child(1)")

// 	$(accordionTitle).on('click', function () {
// 		let $this = $(this);
// 		$this.parent().toggleClass('active_mod').siblings().removeClass('active_mod');
// 		$(accordionContent).slideUp();

// 		if (!$this.next().is(":visible")) {
// 			$this.next().slideDown();
// 		}
// 	});
// };

// accordion('.faq_item_head', '.faq_item_content');

function popup(style, btnSelector, popupSelector) {
	const triggers = document.querySelectorAll(btnSelector);
	const popup = document.querySelector(popupSelector);
	const closeButtons = popup.querySelectorAll('.remove');
	const win = document.documentElement || document.body;

	// Открытие попапа
	triggers.forEach(trigger => {
		trigger.addEventListener('click', () => {
			// Закрыть все активные попапы
			document.querySelectorAll('.popup.active').forEach(activePopup => {
				activePopup.classList.remove('active');
			});

			// Открыть текущий попап
			popup.classList.add('active');
			win.style.overflow = 'hidden';
			win.style.paddingRight = style;
		});
	});

	// Закрытие попапа по кнопке .remove
	closeButtons.forEach(button => {
		button.addEventListener('click', () => {
			popup.classList.remove('active');
			clearBodyIfNoPopup();
		});
	});

	// Закрытие по клавише ESC
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			// Закрыть текущий попап (если активен)
			if (popup.classList.contains('active')) {
				popup.classList.remove('active');
				clearBodyIfNoPopup();
			}
		}
	});

	// Функция очистки body, если попапов не осталось
	function clearBodyIfNoPopup() {
		if (!document.querySelector('.popup.active')) {
			win.style.overflow = '';
			win.style.paddingRight = '';
		}
	}
}


$(document).ready(function () {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})

// https://twitter.com/uixmat

// function scrollNav() {
// 	$('.smooth_scroll').click(function () {
// 		$(".active").removeClass("active");
// 		$(this).addClass("active");

// 		$('html, body').stop().animate({
// 			scrollTop: $($(this).attr('href')).offset().top - 160
// 		}, 600);
// 		return false;
// 	});
// }

$(window).on("scroll", function () {
	var scrolled = $(this).scrollTop();
	if (scrolled > 50) {
		$('.header').addClass('fixed');
	}
	if (scrolled <= 50) {
		$('.header').removeClass('fixed');
	}
});























// const heroSlider = new Swiper('.hero_slider', {
// 	allowTouchMove: true,
// 	// loop: true,
// 	grabCursor: true,
// 	a11y: true,
// 	slidesPerView: 1,
// 	spaceBetween: 30,
// 	keyboard: {
// 		enabled: true,
// 		onlyInViewport: false,
// 	},
// 	pagination: {
// 		el: '.hero-pagination',
// 		clickable: true,
// 	},

// });







const reviewsSlider = new Swiper('.reviews_slider ', {
	allowTouchMove: true,
	// loop: true,
	grabCursor: true,
	a11y: true,
	slidesPerView: 1,
	spaceBetween: 30,
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	navigation: {
		nextEl: '.reviews_nav_next',
		prevEl: '.reviews_nav_prev',
	},
	pagination: {
		el: '.reviews-pagination',
	}
});




// $(document).ready(function () {
// 	$('.faq_item__head').on('click', function () {
// 		const $item = $(this).closest('.faq_item');
// 		$('.faq_item').not($item).removeClass('active').find('.faq_item__content').slideUp();
// 		$item.toggleClass('active');
// 		$item.find('.faq_item__content').stop(true, true).slideToggle();
// 	});
// });