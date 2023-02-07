window.cookieconsent.initialise({
"palette": {
    "popup": {
    "background": "#DEECFF",
    "text": "#001a6c"
    },
    "button": {
    "background": "#001a6c"
    }
},
"theme": "classic",
"position": "bottom-left",
"content": {
        "message": "We use cookies to ensure we give you the best browsing experience on our website. Find out more on how we use cookies at ",
        "dismiss": "I Accept Cookie",
        "link": "Cookie Policy",
        "href": "https://www.ippopay.com/cookie-policy.php"
    }
});
$(document).ready(function(){
    $(".nav_bg li").click(function(){
        var leftValue = $(this).index() * 100;
        $(this).closest(".nav_bg").next(".tab_content").find(".slideTabIn").removeClass("slide_tab_active").addClass('slide_tab_inactive');
        $(this).closest(".nav_bg").find("li").removeClass("active");
        $(this).addClass("active");
        $(this).closest(".nav_bg").next(".tab_content").find(".slide_tab_wrapper").css("margin-left",'-'+leftValue+'%');
        $("#tab-"+$(this).data('tab')).removeClass("slide_tab_inactive").addClass('slide_tab_active');
    });
    $('.pricing_tab_btn').click(function() {
        $('.pricing_tab_btn').removeClass('active');  
        $(this).addClass('active');
        $(".pricing_tab_content").hide();
        $("#"+$(this).data('tab')).show();
    });    
    $('.slide_tab').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        pauseOnFocus:false,
        waitForAnimate:false
    });
    $('.current_opening_list li a').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('.current_opening_list li a').removeClass('active');
        $('.tab_content_new').removeClass('current_post');
        $(this).addClass('active');
        $("#" + tab_id).addClass('current_post');
        $(".content_data").removeClass('current');
        $(".content_data:first-child").addClass('current');
    });
    $('.icon_new').hover(function() {
        var tab_id = $(this).attr('data-tab');
        $('.content_data').removeClass('current');
        $("#" + tab_id).addClass('current');
    });
    $('.usecase_slid_wrap').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });
    $(".fp_close_icon").click(function () {
		$('.xs_alignment').removeClass('fp_mb_open');
	});
	$(".fp_icon_open").click(function () {
		$(".xs_alignment").addClass('fp_mb_open');
	});
    $(".our_specification_list li a").click(function(){
        $(".our_specification_list li a").removeClass("active");
        $(".slide_list a").removeClass("active");
        $(".slide_list a[data-thumb='"+$(this).data('slide')+"']").addClass("active");
        if($(this).data('slide') == '1'){
            $(".code_preview_wrap").addClass("visible_view");
            $("#upi_code").removeClass("visible_view");
        }else if($(this).data('slide') == '2'){
            $(".code_preview_wrap").addClass("visible_view");
            $("#banking_code").removeClass("visible_view");
        }
        else{
            $(".code_preview_wrap").addClass("visible_view");
            $("#payments_code").removeClass("visible_view");
        }
        $(this).addClass("active");
    })
    $(".our_specification_list_new li a").click(function(){
        $(this).closest(".our_specification_list_new").find("a").removeClass("active");
        $(this).addClass("active");
    });
    var slideNew = 0;
    setInterval(function(){
        slideNew++;
        if(slideNew == 1){
            $(".our_specification_list_new li a[data-slide='1']").click();
        }  
        else if(slideNew == 2){
            $(".our_specification_list_new li a[data-slide='2']").click();
        }else if(slideNew == 3){
            $(".our_specification_list_new li a[data-slide='3']").click();
        }else{
            slideNew = 1;
            $(".our_specification_list_new li a[data-slide='1']").click();
        }
    }, 3000);
    var slide = 0;
    setInterval(function(){
        slide++;
        if(slide == 1){
            $(".our_specification_list li a[id='upi']").click();
        }  
        else if(slide == 2){
            $(".our_specification_list li a[id='banking']").click();
        }else if(slide == 3){
            $(".our_specification_list li a[id='payment']").click();
        }else{
            slide = 1;
            $(".our_specification_list li a[id='upi']").click();
        }
    }, 3000);
    $(".fp_icon_open").click(function(){
        $(".mobile_navigation_section").addClass("mobile_show");
    });
    $(".fp_xs_menu").click(function(){
        $(".mobile_navigation_section").removeClass("mobile_show");
    });
    $('.contact_link[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 700, function() {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { 
                    return false;
                } else {
                    $target.attr('tabindex','-1'); 
                    $target.focus();
                };
            });
        }
        }
    });





    $(".ip-content-hover").click(function(){
        $(".ip-content-hover").removeClass("active");
        if($(this).data('slide') == '1'){
            $("[data-slideimage]").addClass("slide_visible_view");
            $("[data-slideimage='1']").removeClass("slide_visible_view");
        } else if($(this).data('slide') == '2'){
            $("[data-slideimage]").addClass("slide_visible_view");
            $("[data-slideimage='2']").removeClass("slide_visible_view");
        } else if($(this).data('slide') == '3'){
            $("[data-slideimage]").addClass("slide_visible_view");
            $("[data-slideimage='3']").removeClass("slide_visible_view");
        } else if($(this).data('slide') == '4'){
            $("[data-slideimage]").addClass("slide_visible_view");
            $("[data-slideimage='4']").removeClass("slide_visible_view");
        } else{
            $("[data-slideimage]").addClass("slide_visible_view");
            $("[data-slideimage='5']").removeClass("slide_visible_view");
        }
        $(this).addClass("active");
    })
    $(".ip-content-hover").click(function(){
        $(".ip-content-hover").removeClass("active");
        $(this).addClass("active");
    });
    var slideNew1 = 0;
    setInterval(function(){
        slideNew1++;
        if(slideNew1 == 1){
            $(".ip-content-hover[data-slide='1']").click();
        } else if(slideNew1 == 2){
            $(".ip-content-hover[data-slide='2']").click();
        } else if(slideNew1 == 3){
            $(".ip-content-hover[data-slide='3']").click();
        } else if(slideNew1 == 4){
            $(".ip-content-hover[data-slide='4']").click();
        } else if(slideNew1 == 5){
            $(".ip-content-hover[data-slide='5']").click();
        } else{
            slideNew1 = 1;
            $(".ip-content-hover[data-slide='1']").click();
        }
    }, 3000);
    
    $(".ip-neo-content-hover").click(function(){
        $(".ip-neo-content-hover").removeClass("active");
        if($(this).data('slide') == '1'){
            $("[data-neoimage]").addClass("slide_visible_view");
            $("[data-neoimage='1']").removeClass("slide_visible_view");
        } else if($(this).data('slide') == '2'){
            $("[data-neoimage]").addClass("slide_visible_view");
            $("[data-neoimage='2']").removeClass("slide_visible_view");
        } else if($(this).data('slide') == '3'){
            $("[data-neoimage]").addClass("slide_visible_view");
            $("[data-neoimage='3']").removeClass("slide_visible_view");
        } else if($(this).data('slide') == '4'){
            $("[data-neoimage]").addClass("slide_visible_view");
            $("[data-neoimage='4']").removeClass("slide_visible_view");
        } else{
            $("[data-neoimage]").addClass("slide_visible_view");
            $("[data-neoimage='5']").removeClass("slide_visible_view");
        }
        $(this).addClass("active");
    })

    $(".ip-neo-content-hover").click(function(){
        $(".ip-neo-content-hover").removeClass("active");
        $(this).addClass("active");
    });
    var neoSlide = 0;
    setInterval(function(){
        neoSlide++;
        if(neoSlide == 1){
            $(".ip-neo-content-hover[data-slide='1']").click();
        } else if(neoSlide == 2){
            $(".ip-neo-content-hover[data-slide='2']").click();
        } else if(neoSlide == 3){
            $(".ip-neo-content-hover[data-slide='3']").click();
        } else if(neoSlide == 4){
            $(".ip-neo-content-hover[data-slide='4']").click();
        } else if(neoSlide == 5){
            $(".ip-neo-content-hover[data-slide='5']").click();
        } else{
            neoSlide = 1;
            $(".ip-neo-content-hover[data-slide='1']").click();
        }
    }, 3000);


    if(getCookie('removeFundAlert') == 'remove'){
        $(".header-alert-msg").remove();
    }
});
function removeFundAlert() {
    setCookie("removeFundAlert", "remove" , 365);
    $(".header-alert-msg").remove();
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}