$(function() {
	var scrollOffset = 100;
	$(window).on('scroll', function() {

		/*=========================================================================
		 导航条由透明改为白色
		 =========================================================================*/
		if($(window).scrollTop() < scrollOffset) {
			$('body').removeClass('scrolled');
		} else {
			$('body').addClass('scrolled');
		}

		/*=========================================================================
		 导航条 ScrollSpy
		 =========================================================================*/
		var scrollPos = $(document).scrollTop(),
			nav_height = $('#navbar').outerHeight();

		$('.navbar li a').each(function() {
			var currLink = $(this),
				refElement = $(currLink.attr('href'));
			if(refElement.size() > 0) {
				if((refElement.position().top - nav_height) <= scrollPos) {
					$('.navbar li').removeClass('active');
					currLink.closest('li').addClass('active');
				} else {
					currLink.removeClass('active');
				}
			}
		});
	});

	var $li = $("#list").find("li");

	$li.hover(function() {

		$(this).find("div").stop().animate({ "top": -30 }, 200);
		$(this).addClass('on')

	}, function() {
		$(this).find("div").stop().animate({ "top": 0 }, 200);
		$(this).removeClass('on')
	});

	//初始化smoothscroll插件
	smoothScroll.init({
		updateURL: false
	});

	//WOW.js 初始化
	new WOW().init({
		mobile: false
	});

	/*=========================================================================
	 隐藏页面加载时预紧器
	 =========================================================================*/
	$(window).on('load', function() {
		$('body').addClass('loaded');
	});

	/*=========================================================================
	 Initialize Material Design Ripples
	 =========================================================================*/
	Waves.attach('.btn-custom', 'waves-classic');
	Waves.init();

	/*=========================================================================
	 截图滑块
	 =========================================================================*/
	$('.screenshots-slider').owlCarousel({
		center: true,
		items: 2,
		loop: false,
		margin: 15,
		startPosition: 1,
		responsive: {
			600: {
				items: 4
			},
			0: {
				startPosition: 0
			}
		}
	});

	/*=========================================================================
	 奖状滑块
	 =========================================================================*/
	$('.testimonials-slider').owlCarousel({
		items: 1,
		loop: true,
		startPosition: 1
	});

	$(window).on('resize', function() {
		// To fix the parallax.js bug
		window.setTimeout(function() {
			$(window).resize();
		}, 500);
	});

	// To fix the parallax.js bug
	var isMobile = {
		Android: function() { return navigator.userAgent.match(/Android/i); },
		BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
		iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
		Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
		Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
		any: function() { return(isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
	};
	jQuery(function($) {
		if(isMobile.any()) {
			document.documentElement.className = document.documentElement.className + " touch";
			$('.parallax').each(function(i, obj) {
				$(this).css("background-image", 'url(' + $(this).data('image-src') + ')');
				$(this).css("background-color", "#FFFFFF");
				$(this).css("background-size", "cover");
				$(this).css("background-position", "center center");
			});
		}
	});

	/*=========================================================================
	 particles.min.js:cavas画布创建粒子原子颗粒效果参数
	 =========================================================================*/
	var particlesSettings = {
		particles: {
			number: {
				value: 3,
				density: {
					enable: !0,
					value_area: 70
				}
			},
			color: {
				value: "#FFF"
			},
			shape: {
				type: "circle", // "circle", "edge" or "triangle"
				stroke: {
					width: 0,
					color: "#F0F0F0"
				},
				polygon: {
					nb_sides: 5
				},
				image: {
					src: "img/github.svg",
					width: 100,
					height: 100
				}
			},
			opacity: {
				value: .5,
				random: !1,
				anim: {
					enable: !1,
					speed: .5,
					opacity_min: .1,
					sync: !1
				}
			},
			size: {
				value: 3,
				random: !0,
				anim: {
					enable: !1,
					speed: 10,
					size_min: .1,
					sync: !1
				}
			},
			line_linked: {
				enable: !0,
				distance: 150,
				color: "#FFF",
				opacity: .4,
				width: 1
			},
			move: {
				enable: !0,
				speed: 1,
				direction: "none",
				random: !1,
				straight: !1,
				out_mode: "out",
				bounce: !1,
				attract: {
					enable: !1,
					rotateX: 600,
					rotateY: 1200
				}
			}
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onhover: {
					enable: !0,
					mode: "grab"
				},
				onclick: {
					enable: !0,
					mode: "push"
				},
				resize: !0
			},
			modes: {
				grab: {
					distance: 140,
					line_linked: {
						opacity: 1
					}
				},
				bubble: {
					distance: 400,
					size: 40,
					duration: 2,
					opacity: 8,
					speed: 1.5
				},
				repulse: {
					distance: 200,
					duration: .4
				},
				push: {
					particles_nb: 4
				},
				remove: {
					particles_nb: 2
				}
			}
		},
		retina_detect: !0
	};
	if($('#particles').length != 0) {
		particlesJS('particles', particlesSettings);
	}
	
});