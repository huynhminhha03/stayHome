
// Lắng nghe sự kiện click vào nút header__navbar-list btn 

$(document).ready(function () {
    $('.header__navbar-list-btn').click(function () {
        $('.modal').css('display', 'flex');
        $('.header__navbar-list').css( "display", "block");
        $('.header__navbar-list').animate({
            "left": "0",
        }, "medium");
    });
    $('.header__navbar-escaped-btn').click(function () {
        $('.modal').css('display', 'none');
        $('.header__navbar-list').animate({
            "left": "-50%",
        }, "medium");
    });
    $('.modal').click(function () {
        $('.modal').css('display', 'none');
        $('.header__navbar-list').animate({
            "left": "-50%",
        }, "medium");
    });


    // Pegination
    // Lắng nghe sự kiện click các nút pegination

    $(".pegination-item").click(function () {
        $(".pegination-item").removeClass("pegination-item--active");
        $(this).addClass("pegination-item--active");
    });
    $(".pegination-item:last-child").click(function () {
        $(".pegination__icon-back").removeClass("pegination__icon--inactived");
        $(".pegination__icon-next").addClass("pegination__icon--inactived");
    });

    $(".pegination-item:first-child").click(function () {
        $(".pegination__icon-next").removeClass("pegination__icon--inactived");
        $(".pegination__icon-back").addClass("pegination__icon--inactived");
    });


    // DialogBox

    setTimeout(function () {
        $(".dialog-box").animate({
            "right": "8px",
            'opacity': '1',
        }, "medium");
    }, 2000);
    $(".dialog-box__closed").click(function () {
        $('.dialog-box').animate({
            "right": "-208px",
            'opacity': '0',
        }, "fast");
    });


    // Lắng nghe sự kiện onclick trên các hộp màu 
    var dialogBoxsColor = document.querySelectorAll(".dialog-box__color");
    if (dialogBoxsColor) {
        dialogBoxsColor.forEach( function(dialogBoxColor, index) {
            $(dialogBoxColor).click(function () {
                // var primaryColor = 
               switch (index) {
                    case 0:
                        document.documentElement.style.setProperty('--primary-color', '#2273BE');
                       break;
                    case 1:
                        document.documentElement.style.setProperty('--primary-color', '#EE4F34');
                        break;
                    case 2:
                        document.documentElement.style.setProperty('--primary-color', 'rgb(239, 113, 128');
                        break;
                    default:
                        break;
               }
            });
        })
    }


    // Footer Banner

    setTimeout(function () {
        $('.footer__banner').animate ({
            'bottom': '0',
            'opacity': '1',
        }, 'medium');
        $('.footer__banner-escaped-btn').click( function() {
            $('.footer__banner').animate ({
                'bottom': '-100px',
                'opacity': 0,
            }, 'medium');
        });
    }, 1000);

});



// kéo xuống khoảng cách 500px thì xuất hiện nút Top-up

var offset = 500;

// thời gian di trượt 0.75s ( 1000 = 1s )

var duration = 750;
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset)
            $('#top-up').fadeIn(duration);
        else
            $('#top-up').fadeOut(duration);
    });
    $('#top-up').click(function () {
        $('body,html').animate({ scrollTop: 0 }, duration);
    });
});



