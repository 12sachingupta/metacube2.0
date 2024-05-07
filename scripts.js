
var lastScroll;
var $scroll = 0;

$(window).load(function () {

    var id = $("#token").val();
    
    $.ajax({
        url: 'include/social.php',
        type: 'post',
        data: {},
        beforeSend: function (request)
        {
            request.setRequestHeader("token", id);
        },
        success: function (data) {
            var obj = jQuery.parseJSON(data);
            $.each(obj.Records, function (key, value) {
                if (value.TWITTER_LINK != '') {
                    $('.twitter').attr('href', value.TWITTER_LINK);    
                }else{
                    $('.twitter').css('display', 'none');
                }
                
                if (value.FACEBOOK_LINK != '') {
                    $('.facebook').attr('href', value.FACEBOOK_LINK);
                }else{
                    $('.facebook').css('display', 'none');
                }
                
                if (value.GOOGLE_PLUS_LINK != '') {
                    $('.googleplus').attr('href', value.GOOGLE_PLUS_LINK);
                }else{
                    $('.googleplus').css('display', 'none');
                }
                
                if (value.INSTAGRAM_LINK != '') {
                    $('.instagram').attr('href', value.INSTAGRAM_LINK);
                }else{
                    $('.instagram').css('display', 'none');
                }
                
                if (value.GLASSDOOR_LINK != '') {
                    $('.glassdoor').attr('href', value.GLASSDOOR_LINK);
                }else{
                    $('.glassdoor').css('display', 'none');
                }
                
                if (value.LINKEDIN_LINK != '') {
                    $('.linkedin').attr('href', value.LINKEDIN_LINK);
                }else{
                    $('.linkedin').css('display', 'none');
                }  
            });
        },
        error: function (e) {

        }
    });
});
$(document).scroll(function() {
    didScroll = true;
    $scroll = $(document).scrollTop();
    if ($scroll > 1) {
        $('<div id="metacube-header"></div>').addClass('onScroll');
    } else {
        $('#metacube-header').removeClass('onScroll');
    }
    if($scroll > 1) lastScroll = $scroll;
    else if($scroll <= 1) $(document).scrollTop(lastScroll);
});

$(window).resize(function() {
wrapperMargin();
homeRawHeight();
});

function wrapperMargin() {
var dImg = $('.designation_main img').height();
}

function homeRawHeight() {
var rawHeight = $('#homepage-section-one .mobile').height() / 3;
}
$(document).ready(function() {
$('.no-fouc').removeClass('no-fouc');
$('.bgMove').hover(function(e) {
    var dir = determineDirection($(this), {
        x: e.pageX,
        y: e.pageY
    });
    $(this).addClass('direction_' + dir);
}, function() {
    $(this).removeClass('direction_3 direction_1 direction_2 direction_0');
});
$('.smallCont').css({
    'top': '-30px',
    'left': '-30px'
});
$('.connectedHover').hover(function(e) {
    var dir = determineDirection($(this), {
        x: e.pageX,
        y: e.pageY
    });
    $('#HoverTarget' + $(this).attr('data-target')).addClass('OtherHover direction_' + dir);
    if ($('#HoverTarget' + $(this).attr('data-target')).hasClass('direction_1')) {
        $('#HoverTarget' + $(this).attr('data-target')).stop(true, true).animate({
            'left': '-60px',
            'top': '-30px',
            'opacity': '0.7'
        }, 300);
    } else if ($('#HoverTarget' + $(this).attr('data-target')).hasClass('direction_2')) {
        $('#HoverTarget' + $(this).attr('data-target')).stop(true, true).animate({
            'left': '-30px',
            'top': '-60px',
            'opacity': '0.7'
        }, 300);
    } else if ($('#HoverTarget' + $(this).attr('data-target')).hasClass('direction_3')) {
        $('#HoverTarget' + $(this).attr('data-target')).stop(true, true).animate({
            'left': '0',
            'top': '-30px',
            'opacity': '0.7'
        }, 300);
    } else if ($('#HoverTarget' + $(this).attr('data-target')).hasClass('direction_0')) {
        $('#HoverTarget' + $(this).attr('data-target')).stop(true, true).animate({
            'left': '-30px',
            'top': '0',
            'opacity': '0.7'
        }, 300);
    }
}, function() {
    $('.smallCont.direction_1, .smallCont.direction_2, .smallCont.direction_3, .smallCont.direction_0').stop(true, true).animate({
        'left': '-30px',
        'top': '-30px',
        'opacity': '1'
    }, 300);
    $('#HoverTarget' + $(this).attr('data-target')).removeClass('OtherHover direction_3 direction_1 direction_2 direction_0');
});
$('.smallCont').hover(function(e) {
    $('.connectedHover' + $(this).attr('data-target')).addClass('textHover');
}, function() {
    $('.connectedHover' + $(this).attr('data-target')).removeClass('textHover');
});
$('.mainContP').hover(function(e) {
    var dir = determineDirection($(this), {
        x: e.pageX,
        y: e.pageY
    });
    var $move = $(this).find('.smallCont');
    $(this).find('.cssCount').addClass('direction_' + dir);
    $move.addClass('direction_' + dir);
    if ($move.hasClass('direction_1')) {
        $move.stop(true, true).animate({
            'left': '-60px',
            'top': '-30px',
            'opacity': '0.7'
        }, 300);
    } else if ($move.hasClass('direction_2')) {
        $move.stop(true, true).animate({
            'left': '-30px',
            'top': '-60px',
            'opacity': '0.7'
        }, 300);
    } else if ($move.hasClass('direction_3')) {
        $move.stop(true, true).animate({
            'left': '0',
            'top': '-30px',
            'opacity': '0.7'
        }, 300);
    } else if ($move.hasClass('direction_0')) {
        $move.stop(true, true).animate({
            'left': '-30px',
            'top': '0',
            'opacity': '0.7'
        }, 300);
    }
}, function() {
    $('.smallCont.direction_1, .smallCont.direction_2, .smallCont.direction_3, .smallCont.direction_0').stop(true, true).animate({
        'left': '-30px',
        'top': '-30px',
        'opacity': '1'
    }, 300);
    $(this).find('.mainCont').removeClass('direction_3 direction_1 direction_2 direction_0');
    $(this).find('.cssCount').removeClass('direction_3 direction_1 direction_2 direction_0');
});
$('.OpenPopUp').click(function(e) {
    $('#popUp' + $(this).attr('data-target')).show(10, function() {
        $(this).addClass('show-popup');
    });
    $('body').addClass('popUpScroll');
    e.preventDefault();
});
$('.closebtnIconJS').click(function(e) {
    $('.popUp3_col').removeClass('show-popup');
    $('.popUp3_col').delay(300).hide(10);
    $('body').removeClass('popUpScroll');
    e.preventDefault();
});
$("#menu").load("assets/controls/menu.html");
$("#metacube-footer").load("assets/controls/footer.html");
$("#metacube-header").load("assets/controls/header.html");
banners();
});

function determineDirection($el, pos) {
var w = $el.width(),
    h = $el.height(),
    x = (pos.x - $el.offset().left - (w / 2)) * (w > h ? (h / w) : 1),
    y = (pos.y - $el.offset().top - (h / 2)) * (h > w ? (w / h) : 1);
return Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180)) / 90 + 3) % 4;
}

function banners() {
var page = 'index.php';
if (document.location.pathname != '/') {
    page = document.location.pathname.match(/[^\/]+$/)[0];
}
var id = $("#token").val();
$.ajax({
    url: 'include/banners.php',
    type: 'post',
    data: {},
    beforeSend: function(request) {
        request.setRequestHeader("token", id);
    },
    success: function(data) {
        var obj = jQuery.parseJSON(data);
        $.each(obj.Records, function(key, value) {
            if (page == 'index.php') {
                $('#homepage-image-banner').css("background", "url('uploads/" + value.HOMEBANNER + "')");
                $('#homepage-image-banner').css("background-size", "cover");
                $('#homepage-image-banner').css("background-position", "center");
            } else if (page == 'about.php') {
                $('#about-image-banner').css("background", "url('uploads/" + value.ABOUTBANNER + "')");
                $('#about-image-banner').css("background-size", "cover");
                $('#about-image-banner').css("background-position", "center");
            } else if (page == 'news.php') {
                $('#news-image-banner').css("background", "url('uploads/" + value.NEWSBANNER + "')");
                $('#news-image-banner').css("background-size", "cover");
                $('#news-image-banner').css("background-position", "center");
            } else if (page == 'blog.php') {
                $('#blog-image-banner').css("background", "url('uploads/" + value.BLOGBANNER + "')");
                $('#blog-image-banner').css("background-size", "cover");
                $('#blog-image-banner').css("background-position", "center");
            } else if (page == 'people.php') {
                $('#people-image-banner').css("background", "url('uploads/" + value.OURPEOPLEBANNER + "')");
                $('#people-image-banner').css("background-size", "cover");
                $('#people-image-banner').css("background-position", "center");
            } else if (page == 'careers.php') {
                $('#careers-image-banner').css("background", "url('uploads/" + value.CAREERSBANNER + "')");
                $('#careers-image-banner').css("background-size", "cover");
                $('#careers-image-banner').css("background-position", "center");
            } else if (page == 'contact.php') {
                $('#contact-image-banner').css("background", "url('uploads/" + value.CONTACTBANNER + "')");
                $('#contact-image-banner').css("background-size", "cover");
                $('#contact-image-banner').css("background-position", "center");
            }
        });
    },
    error: function(e) {}
});
}

var openMenu = function() {
    $('.ui-page').addClass('menu-open');
    $('.mainNav').animate({'left':'0'},'300');
}
var closeMenu = function() {
    $('.ui-page').removeClass('menu-open');
    $('.mainNav').animate({'left': -$('.mainNav').outerWidth()-20},'300');
}
$('.menu_overlay').click(function(e){
    $('.ui-page').removeClass('menu-open');
    $('.mainNav').animate({'left': -$('.mainNav').outerWidth()-20},'300');
    e.preventDefault();
});

    
function cutString(s, n){
    var cut= s.indexOf(' ', n);
    if(cut== -1) return s;
    return s.substring(0, cut)
}


