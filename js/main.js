jQuery(function($) {'use strict',
	//Preloader
	$(window).load(function(){
		$('.preloader').fadeOut('slow',function(){$(this).remove();});
	});
	//Parallax Scrolling
	$(window).bind('load', function () {
		parallaxInit();						  
	});
	function parallaxInit() {
			$("#promo-one").parallax("50%", 0.3);
			$("#promo-two").parallax("50%", 0.3);
			$("#twitter").parallax("50%", 0.3);
			$("#testimonial").parallax("50%", 0.3);
			$("#contact-us").parallax("50%", 0.3);
	}
	parallaxInit();

	// Navigation Scroll	
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>600 ){
			//$('#navigation .navbar').addClass('navbar-fixed-top');
		} else {
			//$('#navigation .navbar').removeClass('navbar-fixed-top');
		}
	});

	$(window).scroll(function(event) {
		Scroll();
	});
	
	$('.navbar-collapse ul li a').click(function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top -10}, 1000);
		return false;
	});
	
	// User define function
	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   200;
		var rangeBottom =   500;
		$('.navbar-collapse').find('.scroll a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top);
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop ){
				$('.navbar-collapse li.scroll')
				.removeClass('active')
				.eq(i).addClass('active');			
			}
		})

	};	
	
	// Slider Height
	var slideHeight = $(window).height();
	$('#home-carousel .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#home-carousel .item').css('height',slideHeight);
	});
	
	//accordion 
	$('#accordion-two .panel-default .panel-heading').on('click',function(){'use strict',
		$('.panel-heading').removeClass('active');
		$(this).addClass('active');
	});
	
	//Pretty Photo
	 $("a[data-gallery^='prettyPhoto']").prettyPhoto({
	  social_tools: false
	 });
	
	// portfolio filter
	$(window).load(function(){'use strict',
		$portfolio_selectors = $('.portfolio-filter >li>a');
		if($portfolio_selectors!='undefined'){
			$portfolio = $('.portfolio-items');
			$portfolio.isotope({
				itemSelector : '.portfolio-item',
				layoutMode : 'fitRows'
			});
			
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({ filter: selector });
				return false;
			});
		}
	});
	
	// Timer
	$('.timer').each(count);
	function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		$this.countTo(options);
	}
		
	//smoothScroll
	smoothScroll.init();
	
	// Google Map Customization
	(function(){

		var map;

		map = new GMaps({
			el: '#gmap',
			lat: 41.885996,
			lng: -87.682579,
			scrollwheel:false,
			zoom: 14,
			zoomControl : true,
			panControl : false,
			streetViewControl : false,
			mapTypeControl: false,
			overviewMapControl: false,
			clickable: false
		});

		var image = 'img/marker.png';
		map.addMarker({
			lat: 41.885996,
			lng: -87.682579,
			icon: image,
			animation: google.maps.Animation.DROP,
			verticalAlign: 'bottom',
			horizontalAlign: 'center',
			backgroundColor: '#f89628',
		});


		var styles = [ 

		{
			"featureType": "road",
			"stylers": [
			{ "color": "#ffffff" }
			]
		},{
			"featureType": "water",
			"stylers": [
			]
		},{
			"featureType": "landscape",
			"stylers": [
			]
		},{
			"elementType": "labels.text.fill",
			"stylers": [
			]
		},{
			"featureType": "poi",
			"stylers": [
			]
		},{
			"elementType": "labels.text",
			"stylers": [
			{ "saturation": 1 },
			{ "weight": 0.1 },
			{ "color": "#000000" }
			]
		}

		];

		map.addStyle({
			styledMapName:"Styled Map",
			styles: styles,
			mapTypeId: "map_style"
		});

		map.setStyle("map_style");
	}());
});
