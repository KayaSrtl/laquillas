var transNum = 1;
var animation_on_going = true;
var click_count = 0;
var navicon_button_click_control = true;
var search_bar_focus_control = false;

//http://css3.bradshawenterprises.com/cfimg/#cfimg1



$( document ).ready(function() { 
	//do something after document all loaded
	$( ".trans_click" ).hover(function() {
		$(this).addClass('hover_trans_click');
	}, function() {
		$(this).removeClass('hover_trans_click');
	});
	
	
	$('div.top_button').click(function() {
		$('html, body').animate({scrollTop: '0'}, 400);
	});
	
	$('.search_part_a').click(function() {
		if(!search_bar_focus_control){
			$('.search_bar').animate({width: '400'}, 200);
			$('.search_bar').focus();
			search_bar_focus_control = true;
		}
		$(".img_slogan").text("clk_tmp:" + " " + click_temp + " " + "control:" + " " + search_bar_focus_control);
	});
	
	$('.search_bar').blur(function() {
		var click_temp = false;
		$('.submit_button').click(function() {
			click_temp = true;
			$('.search_bar').animate({width: '0'}, 200);
			setTimeout(function() { search_bar_focus_control = false;}, 200);
		});
		if(search_bar_focus_control && !click_temp){
			$('.search_bar').animate({width: '0'}, 200);
			search_bar_focus_control = false;
		}
		$(".product_top_header").text("clk_tmp:" + " " + click_temp + " " + "control:" + " " + search_bar_focus_control);
	});
	
	$( ".navicon_button_click, .close_nav" ).click(function() {
		if(navicon_button_click_control) {
			navicon_button_click_control = false;
			$(".navicon_button_click").addClass('navi_change');
			$(".fixed_menu a:not(.contect a, .navicon_button_click, .home_button)").animate({left: '0'}, 250);
			$(".close_nav").fadeIn(250);
		}
		else {
			navicon_button_click_control = true;
			$(".navicon_button_click").removeClass('navi_change');
			$(".fixed_menu a:not(.contect a, .navicon_button_click, .home_button)").animate({left: '-150'}, 250);
			$(".close_nav").fadeOut(250);
		}
	});
	
	/*$(window).keypress(function(e) {
		e.preventDefault();
		var key = e.which;
		if(key>48 && key<57)
			transImg(key-48);
		$(".product_top_header").text(key);
	});*/
	
	$(document).keydown(function(e){
		//e.preventDefault();
		var key = e.which;
		if(key>48 && key<57)
			transImg(key-48);
		switch(key) {
			case 37:
				transLeft();
				break;
			case 33:
				$('html, body').animate({scrollTop: '0'}, 300);
				break;
			case 39:
				transRight();
				break;
			case 34:
				$('html, body').animate({scrollTop: '1700'}, 300);
				break;
		}
		$(".product_top_header").text($( document ).prop("scrollHeight"));
	});
	
	$( ".fixed_menu a" ).hover(function() {
		$(this).css("background-color", "black");
		$(this).css("color", "white");
	}, function() {
		if (navicon_button_click_control)
			$(this).css("background-color", "transparent");
		else
			$(this).css("background-color", "white");
		$(this).css("color", "black");
	});
	
	$( ".navicon_button_click" ).hover(function() {
		$(".bar1").css("background-color", "white");
		$(".bar2").css("background-color", "white");
		$(".bar3").css("background-color", "white");
	}, function() {
		$(".bar1").css("background-color", "black");
		$(".bar2").css("background-color", "black");
		$(".bar3").css("background-color", "black");
	});
	
	
	if($(window).scrollTop() > 100) {
		$("div.top_button").fadeIn(200);
	}
	
	beReadyPage();
	//var dir = <?php echo $dir ?>;
	//var file_count = <?php echo $file_count ?>;

	//alert('File count in folder ' + dir + ' is ' + file_count);
	
	$(".icon.youtube").on('click', function(){
		window.open('https://www.youtube.com/channel/UCBKk4Cv_tXeIh1co755xSzQ', '_blank');
	});
	$(".icon.instagram").on('click', function(){
		window.open('https://www.instagram.com/laquillas_ladyshirt/', '_blank');
	});
});

window.onscroll = function() {
		if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			$(".top_div").css("height", 80 + parseInt($(".fixed_menu").height()));
			$(".fixed_menu").css("position", "fixed");
		} else {
			$(".top_div").css("height", 80);
			$(".fixed_menu").css("position", "relative");
		}
		
	};

$( window ).resize(function() {
	beReadyPage();
	setTimeout(function() { beReadyPage();}, 100);
});

$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	if(scroll < 200) {
		$("div.top_button").fadeOut(200); //$('div.top_button').hide();  //$("#id").css("display", "none");
	} else {
		$("div.top_button").fadeIn(200); //$('div.top_button').show();
	}
	
});


function transImg(elementNum) {
	click_count++;
	if(elementNum == 9) {
		elementNum = 1;
	}
	if(elementNum != transNum) {
		changePhoto(elementNum);
		var elementID = "transClick_";
		elementID += elementNum;
		document.getElementById(elementID).className = "trans_click selected";
		elementID = elementID.replace(elementNum,transNum);
		document.getElementById(elementID).className = "trans_click";
		transNum = elementNum;
	}
}


function beReadyPage () {
	var window_height = parseInt($( window ).height());
	var window_width = parseInt($( window ).width());
	
	$(".main_div").css("width", window_width);
	$(".photo_part").css("height", window_height);
	$(".all_photos").css("height", $( ".photo_part" ).height());
	$(".img_slogan").css("top", window_height - $( ".img_slogan" ).height() - 50);
	$(".img_slogan").css("left", (window_width - $( ".img_slogan" ).width())/2);
	$(".image_trans").css("height", $( ".photo_part" ).height());
	$(".image_trans").css("width", window_width); 
	$(".transition_sign").css("top", $( window ).height() - $( ".transition_sign" ).height() - ($(".transition_sign").outerHeight() - $(".transition_sign").innerHeight()));
	$(".transition_sign").css("margin-left", beReverseSign(parseInt($( ".transition_sign" ).width())/2));
	$(".trans_button").css("top", window_height/2);
	$(".trans_div").css("height", window_height);
	$(".trans_div").css("width", window_width);
	$(".photos").css("width", window_width);
	$(".photos").css("height", window_height);
	
	
	var total_product_card_in_line;
	var one_card_width = parseInt($( ".product_card" ).width() + parseInt($(".transition_sign").outerHeight() - $(".transition_sign").innerHeight()));
	var one_card_height = parseInt($( ".product_card" ).height() + parseInt($(".transition_sign").outerHeight() - $(".transition_sign").innerHeight()));
	var total_product_card = $( ".product_card" ).length;
	if(one_card_width*4 + parseInt($( ".product_card" ).css('margin-left'))*5 < window_width) {
		total_product_card_in_line = 4;
	} else if(one_card_width*3 + parseInt($( ".product_card" ).css('margin-left'))*4-19 < window_width) {
		total_product_card_in_line = 3;
	} else if(one_card_width*2 + parseInt($( ".product_card" ).css('margin-left'))*3-23 < window_width) {
		total_product_card_in_line = 2;
	} else {
		total_product_card_in_line = 1;
	}
	
	if(window_width > 800) {
		$(".img_slogan").css("font-size", 150);
		$(".imgClick").css("font-size", 100);
		$(".product_top_header").css("font-size", 150);
		$(".product_top_header").css("padding-top", 40);
		$(".product_top_header").css("margin-bottom", 0);
		$(".trans_button").css("width", 93);
		$(".copywrite_text").css("font-size", 20);
		$(".copywrite_text").css("padding-top", 12);
		$(".go_top").css("height", 50);
		$(".go_top").css("width", 50);
		$(".top_button").css("bottom", 10);
		$(".top_button").css("right", 10);
		$(".fa-arrow-circle-up").css("margin-top", 5);
		$(".fa-arrow-circle-up").css("font-size", 70);
		$(".fixed_menu a").css("display", "inline-block");
		$(".navicon_button_click").css("display", "none");
		$(".fixed_menu a:not(.contect a, .navicon_button_click, .home_button)").css("left", "auto");
		$(".fixed_menu a:not(.contect a, .navicon_button_click, .home_button)").css("background-color", "transparent");
		$(".close_nav").css("display", "none");
		$(".home_button").css("top", 0);
		$(".home_button").css("display", "inline-block");
		$(".home_button").css("padding-top", 2);
		$(".home_button").css("padding-bottom", 11);
	} else {
		$(".img_slogan").css("font-size", 100);
		$(".imgClick").css("font-size", 80);
		$(".product_top_header").css("font-size", 100);
		$(".product_top_header").css("padding-top", 20);
		$(".product_top_header").css("margin-bottom", -40);
		$(".trans_button").css("width", 75);
		$(".copywrite_text").css("font-size", 18);
		$(".copywrite_text").css("padding-top", 14);
		$(".go_top").css("height", 30);
		$(".go_top").css("width", 30);
		$(".top_button").css("bottom", 5);
		$(".top_button").css("right", 5);
		$(".fa-arrow-circle-up").css("margin-top", 8);
		$(".fa-arrow-circle-up").css("font-size", 50);
		$(".fixed_menu a:not(.contect a, .navicon_button_click, .home_button)").css("background-color", "white");
		$(".fixed_menu a:not(.contect a, .navicon_button_click, .home_button)").css("display", "block");
		if(navicon_button_click_control) {
			$(".close_nav").css("display", "none");
			$(".fixed_menu a:not(.contect a, .navicon_button_click, .home_button)").css("left", -150);
		}
		else {
			$(".close_nav").css("display", "block");
			$(".fixed_menu a:not(.contect a, .navicon_button_click, .home_button)").css("left", 0);
		}
		$(".navicon_button_click").css("display", "inline-block");
		$(".home_button").css("top", -10);
		$(".home_button").css("display", "inline-block");
		$(".home_button").css("padding-top", 3);
		$(".home_button").css("padding-bottom", 9);
	}
	
	if(window_width > 1700) {
		$(".contect_part").css("height", 440);
		$(".YouTube_video").css("padding-left", (window_width - $(".YouTube_video").width())/2);
		$(".YouTube_video").css("margin-top", -500);
		$(".YouTube_video").css("padding-bottom", 90);
		$(".YouTube_video").css("top", 0);
		$(".social_media_part").css("margin-right", 70);
		$(".social_media_part").css("padding-bottom", 0);
		$(".contect_social_header").css("text-align", "right");
		$(".contect_social_header").css("margin-right", 85);
		$(".mapouter").css("margin-left", 10);
		$(".mapouter").css("top", 0);
		
	} else if(window_width > 1200) {
		$(".contect_part").css("height", 520);
		$(".YouTube_video").css("padding-left", window_width - $(".YouTube_video").width() - 70);
		$(".YouTube_video").css("margin-top", -1100);
		$(".YouTube_video").css("padding-bottom", 0);
		$(".YouTube_video").css("top", 60);
		$(".social_media_part").css("margin-right", 70);
		$(".social_media_part").css("padding-bottom", 0);
		$(".contect_social_header").css("text-align", "right");
		$(".contect_social_header").css("margin-right", 85);
		$(".mapouter").css("margin-left", 10);
		$(".mapouter").css("top", 45);
	} else {
		$(".contect_part").css("height", 950);
		$(".YouTube_video").css("padding-left", (window_width - $(".YouTube_video").width())/2);
		$(".YouTube_video").css("margin-top", 220);
		$(".YouTube_video").css("padding-bottom", 0);
		$(".YouTube_video").css("top", 0);
		$(".social_media_part").css("margin-right", (window_width - $( ".social_media_part" ).width())/2);
		$(".social_media_part").css("padding-bottom", 20);
		$(".contect_social_header").css("text-align", "center");
		$(".contect_social_header").css("margin-right", 0);
		$(".mapouter").css("margin-left", (window_width - $( ".mapouter" ).width())/2);
		$(".mapouter").css("top", 0);
	}
	
	$(".product_card").css("left", (window_width - (total_product_card_in_line * one_card_width + (total_product_card_in_line+1)*parseInt($( ".product_card" ).css('margin-left'))))/2);
	
	//var total_card_height = 1;
	var total_card_height = (parseInt(total_product_card/total_product_card_in_line) < total_product_card/total_product_card_in_line) ? (total_product_card/total_product_card_in_line+1) : (total_product_card/total_product_card_in_line);
	$(".product_background_gradient").css("height", parseInt($( ".product_top_header" ).height()) + parseInt($( ".product_top_header" ).css('padding-top')) + (parseInt($( ".product_card" ).css('margin-top')) + parseInt($( ".product_card" ).height()))*total_card_height + 100);
	
	
}

function transLeft() {
	if(transNum == 1) 
		transImg(8)
	 else 
		transImg(transNum - 1);
}

function transRight() {
	if(transNum == 8)
		transImg(1)
	 else 
		transImg(transNum + 1);
}

function beReverseSign(num) {
	num = -num;
	return num;
}

function changePhoto(eleNum) {
	var elementID = "photo_";
	elementID += eleNum;
	document.getElementById(elementID).className = "photos top";
	elementID = elementID.replace(eleNum,transNum);
	document.getElementById(elementID).className = "photos";
}

for(var i = 1; i < 10; ++i) {
	
	setTimeout(function() { transImg(transNum+1); }, i*5000);
	
}

setTimeout(function() { beReadyPage();}, 200);
setTimeout(function() { beReadyPage();}, 500);