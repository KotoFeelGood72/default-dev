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
	toggleCalls();
	// scrollNav();
	if (windowWidth < mediaPoint3) {

		const servicesSlider = new Swiper('.services_mobile', {
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
			pagination: {
				el: '.services-pagination',
			}
		});
		const requireSlider = new Swiper('.require__list ', {
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
			pagination: {
				el: '.require-pagination',
			}
		});
	}
	if (windowWidth > mediaPoint1) {
		popup('14px', '.form_open', '.popup_form');
		popup('14px', '.addservices_item', '.popup_info');
	} else {
		popup('0', '.form_open', '.popup_form');
		popup('0', '.addservices_item', '.popup_info');
		burgerMobile();
	}
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



const btnSubmit = document.querySelectorAll('input[type="submit"]')
Array.from(btnSubmit).map((item) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		close('.close')
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























const heroSlider = new Swiper('.hero_slider', {
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
	pagination: {
		el: '.hero-pagination',
		clickable: true,
	},

});



function goToSlide(index, e) {
	const allItems = document.querySelectorAll('.services_main ul li');
	allItems.forEach(item => item.classList.remove('active'));
	e.currentTarget.classList.add('active');
	if (heroSlider && typeof index === 'number') {
		heroSlider.slideToLoop(index);
	}
}




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


document.addEventListener('DOMContentLoaded', () => {
	/* ---------- элементы ---------- */
	const hidden = document.getElementById('loanRange');
	const slider = document.querySelector('.calculator__slider');
	const track = slider.querySelector('.slider__track');
	const fill = slider.querySelector('.slider__progress');
	const out = document.getElementById('loanValue');

	const radios = document.querySelectorAll('.calculator__months__select input[type="radio"]');
	const payOut = document.getElementById('paymentOut');

	/* ---------- настройки ---------- */
	const min = +hidden.min;
	const max = +hidden.max;
	const step = +hidden.step || 1;
	const mRate = 0.015; // 1,5 % в месяц  (= 18 % годовых)

	const fmt = n => n.toLocaleString('ru-RU') + ' ₽';

	const valueToPercent = v => ((v - min) * 100) / (max - min);
	const percentToValue = p => Math.round((min + p * (max - min) / 100) / step) * step;

	/* ---------- расчёт платежа ---------- */
	function calcPayment(sum, months) {
		/* аннуитетная формула: P = S*r / (1 - (1+r)^-n) */
		const r = mRate;
		const k = r / (1 - Math.pow(1 + r, -months));
		return Math.round(sum * k);
	}

	/* ---------- отрисовка суммы и платежа ---------- */
	function render(val) {
		const pct = valueToPercent(val);
		fill.style.width = `calc(${pct}% - 12px)`;
		out.textContent = fmt(val);
		hidden.value = val;

		const months = +document.querySelector('.calculator__months__select input:checked')?.value || 12;
		payOut.textContent = fmt(calcPayment(val, months));
	}

	/* ---------- стартовое состояние ---------- */
	render(+hidden.value || +slider.dataset.initial || min);

	/* ---------- движение ползунка ---------- */
	const move = e => {
		const rect = track.getBoundingClientRect();
		let pct = ((e.clientX - rect.left) / rect.width) * 100;
		pct = Math.max(0, Math.min(100, pct));
		render(percentToValue(pct));
	};

	slider.addEventListener('pointerdown', e => {
		move(e);
		const onMove = e => move(e);
		const onUp = () => {
			document.removeEventListener('pointermove', onMove);
			document.removeEventListener('pointerup', onUp);
		};
		document.addEventListener('pointermove', onMove);
		document.addEventListener('pointerup', onUp, {
			once: true
		});
	});

	/* ---------- переключение срока ---------- */
	radios.forEach(radio =>
		radio.addEventListener('change', () => render(+hidden.value))
	);
});


$(document).ready(function () {
	$('.faq_item__head').on('click', function () {
		const $item = $(this).closest('.faq_item');
		$('.faq_item').not($item).removeClass('active').find('.faq_item__content').slideUp();
		$item.toggleClass('active');
		$item.find('.faq_item__content').stop(true, true).slideToggle();
	});
});

function toggleCalls() {
	const flyBtn = document.querySelector('.fly_btn')
	const fly = document.querySelector('.fly')

	if (flyBtn && fly) {
		flyBtn.addEventListener('click', () => {
			fly.classList.toggle('active')
		})
	}
}