/* ---- mixitup.js our work sorting ---- */
$('#thework').mixItUp({
    animation: {
        duration: 1000
    }
});

/* ---- our ideology hover ---- */
// $('.process-box').hover(function() {
// 	$(this).find('.process-intro').hide();
// 	$(this).find('.process-content').fadeIn();
// }, function() {
// 	$(this).find('.process-content').hide();
// 	$(this).find('.process-intro').fadeIn();
// });


/* ---- contact form ---- */
var $form = $("#contactForm");
$form.validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        event.preventDefault();
        submitForm();
    }
});

function submitForm() {
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    $.ajax({
        type: $form[0].method,
        url: $form[0].action,
        dataType: "json",
        data: {name: name, email: email, message: message, type: $('.selectpicker').val()},
        success: function (text) {
            console.log(text);
            if (text.success === "email sent") {
                formSuccess();
            } else {
                formError();
                submitMSG(false, text.success.toTitleCase());
            }
        }
    });
}

function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!");
}

function formError() {
    $("#contactForm").removeClass().addClass('shake animated').one(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function () {
            $(this).removeClass();
        });
}

function submitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "text-success";
    } else {
        var msgClasses = "text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

/* ---- our work gallery ---- */
$('#work').magnificPopup({
    delegate: 'a.zoom',
    type: 'image',
    fixedContentPos: false,
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
        preload: [0, 2]
    }
});

/* ---- popup image ---- */
$('.popup-img').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade'
});

/* ---- popup video ---- */
$(document).ready(function () {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

/* ---- nav smooth scroll ---- */
$(document).ready(function () {
    $('.scroll-link').on('click', function (event) {
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
    });
    $('.scroll-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1200);
    });
});

/* ---- navbar offset ---- */
function scrollToID(id, speed) {
    var offSet = 69;
    var targetOffset = $(id).offset().top - offSet;
    $('html,body').animate({
        scrollTop: targetOffset
    }, speed);
}

/* ---- animations ---- */
if (typeof sr == 'undefined') {
    window.sr = ScrollReveal({
        duration: 1500,
        delay: 50
    });
}
Royal_Preloader.config({
    onComplete: function () {
        triggerReveals();
    }
});

function triggerReveals() {
    sr.reveal('.bottomReveal', {
        origin: 'bottom'
    }).reveal('.leftReveal', {
        origin: 'left'
    }).reveal('.rightReveal', {
        origin: 'right'
    }).reveal('.topReveal', {
        origin: 'top'
    });

    sr.reveal('.rotateBottomReveal', {
        origin: 'bottom',
        rotate: {
            x: 90
        }
    }).reveal('.rotateLeftReveal', {
        origin: 'left',
        rotate: {
            x: 90
        }
    }).reveal('.rotateRightReveal', {
        origin: 'right',
        rotate: {
            x: 90
        }
    }).reveal('.rotateTopReveal', {
        origin: 'top',
        rotate: {
            x: 90
        }
    })

    sr.reveal('.scaleReveal', {
        origin: 'top',
        scale: 0.6
    });
}

/* ---- close mobile nav on click ---- */
$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
        $(this).collapse('hide');
    }
});

/* ---- rotater text ---- */
var current = 1;
var height = jQuery('.ticker').height();
var numberDivs = jQuery('.ticker').children().length;
var first = jQuery('.ticker h1:nth-child(1)');
setInterval(function () {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 2500);

var s_menu = $('#nav');
var origOffsetY = s_menu.offset().top;

document.onscroll = function () {
    if ($(window).scrollTop() >= origOffsetY) {
        $(s_menu).removeClass('navbar-static-top').addClass('navbar-fixed-top');
        $(about).css('padding-top', $(s_menu).height() * 2);
    } else {
        $(s_menu).removeClass('navbar-fixed-top').addClass('navbar-static-top');
        $(about).css('padding-top', $(s_menu).height());
    }
};

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false
    });

    $('.selectpicker').selectpicker({
        style: 'btn-info',
        size: 4
      });
      
});

$('.carouselTicker').carouselTicker();