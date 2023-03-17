"use strict";
const preloader = document.querySelector(".preloader");
$(document).ready(function () {

	//parallax init
	if (document.getElementById('scene')) {
		var parallax = new Parallax(document.getElementById('scene'));
	}

	if (document.getElementById('scene1')) {
		var parallax1 = new Parallax(document.getElementById('scene1'));
	}

	if (document.getElementById('scene2')) {
		var parallax2 = new Parallax(document.getElementById('scene2'));
	}

	if (document.getElementById('scene3')) {
		var parallax3 = new Parallax(document.getElementById('scene3'));
	}
	//progressbar
	if ($('#Progress').length > 0) {
		var delay = 500;
		$(".progress-bar").each(function (i) {
			$(this).delay(delay * i).animate({ width: $(this).attr('aria-valuenow') + '%' }, delay);

		})
	};
	// Skroll init. On mobile destroy
	if ($('#banner-cards').length > 0) {
		var s = skrollr.init({ forceHeight: false });
		if (s.isMobile()) {
			s.destroy();
		}
	};

	if ($('#skrollr-body').length > 0) {
		var s = skrollr.init({ forceHeight: false });
		if (s.isMobile()) {
			s.destroy();
		};
	};


	if ($('#Home-white').length > 0) {
		var s = skrollr.init({ forceHeight: false });
		if (s.isMobile()) {
			s.destroy();
		}
	};
	// Nav Scroll Animate
	$('a[href^="#"]').bind('click', function (e) {
		e.preventDefault();
		var target = $(this).attr("href");
		$('html, body').stop().animate({
			scrollTop: $(target).offset().top
		}, 1000, 'swing', function () {
			location.hash = target;
		});
		return false;
	});

	//Nav Active Link
	$(window).scroll(function () {
		var scrollDistance = $(window).scrollTop();
		$('section[id]').each(function (i) {
			if ($(this).position().top - 76 <= scrollDistance) {
				$('nav ul li a.active').removeClass('active');
				$('nav ul li a').eq(i).addClass('active');
			}
		});
	}).scroll();

	//preloader
	if ($(".preloader").length > 0) {
		// Preloader timeout
		setTimeout(function () {
			$('.preloader').addClass('d-none');
		}, 2000);
	};

});
preloader.addEventListener("transitionend", () => {
	preloader.classList.add("active");
})