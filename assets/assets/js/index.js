$(".pkg_list ul").slimScroll({
    height: "230px",
    color: "#ffb900"
});

$('.main_header .nav-item').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
}, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
});
AOS.init({
    disable: function () {
        return window.innerWidth < 991;
    }
});

window.location.hash || setTimeout(function () {
    $("#autopop").trigger('click')
}, 10000);


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $(".main_header").addClass("sticky");
        $(".logo_header").attr('src', 'assets/images/logo/logo_white.png');
    } else {
        $(".main_header").removeClass("sticky");
        $(".logo_header").attr('src', 'assets/images/logo/logo_black.png');
    }
});

$('.bannerbottom_slide ul').not('.slick-initialized').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,

    responsive: [{
            breakpoint: 999,
            settings: {
                arrows: false,
                slidesToShow: 4
            }
        },
        {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false,
                slidesToShow: 1
            }
        }
    ]

});
if ($(window).width() <= 991) {

    $('.bannerbottom_slide ul').not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        adaptiveHeight: true

    });


}

if ($(window).width() <= 768) {

    $('.responsive-slider').not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        adaptiveHeight: true

    });

    $('.process_steps .row').not('.slick-initialized').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        adaptiveHeight: true

    });


}

$('.service-ltr').not('.slick-initialized').slick({
    dots: false,
    arrows: true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    centerMode: true,
    rtl: false,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1601,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1101,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                slidesToScroll: 1,
                infinite: true,
                adaptiveHeight: true
            }
        }
    ]
});


$('.service-rtl').not('.slick-initialized').slick({
    dots: false,
    arrows: true,
    prevArrow: $('.slick-previ'),
    nextArrow: $('.slick-nexti'),
    rtl: true,
    autoplay: true,
    autoplayspeed: 4000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1601,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1101,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                adaptiveHeight: true
            }
        }
    ]

});

$('.testi-slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,

});

//popup form
$(document).ready(function () {
    const form = $("#popup_form");

    form.validate({
        rules: {
            pop_name: { required: true },
            pop_email: { required: true, email: true },
            pop_tel: { required: true }
        },
        messages: {
            pop_name: { required: "Please enter your name" },
            pop_email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            pop_tel: { required: "Please enter your phone number" }
        },
        submitHandler: function () {
            const name = $("#pop_name").val();
            const email = $("#pop_email").val();
            const phone = $("#pop_tel").val();
            const message = $("#pop_message").val();
            const submitBtn = $("#pop_submit");

            submitBtn.addClass("disabled_button");

            $.ajax({
                type: "POST",
                url: "popup-form-handler.php",
                data: {
                    name: name,
                    email: email,
                    phone: phone,
                    message: message
                },
                success: function (response) {
                    submitBtn.removeClass("disabled_button");
                    $("#pop_name, #pop_email, #pop_tel, #pop_message").val("");

                    // SweetAlert2 Toast
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 4000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Email Sent Successfully"
                    });

                    // Optional: redirect after short delay
                    setTimeout(() => {
                        window.location.href = "thankyou.html";
                    }, 1500);
                },
                error: function (xhr, status, error) {
                    submitBtn.removeClass("disabled_button");
                    console.error("AJAX Error:", status, error);
                    Swal.fire({
                        icon: "error",
                        title: "Oops!",
                        text: "Something went wrong. Please try again."
                    });
                }
            });
        }
    });
});
$('.sitelogo_slide').not('.slick-initialized').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,

    responsive: [{
            breakpoint: 999,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                slidesToShow: 1
            }
        }
    ]

});