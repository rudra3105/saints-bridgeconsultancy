(function($) {
    "use strict";

    var windowOn = $(window)
    ///////////////////////////////////////////////////
    // 01. PreLoader Js
    windowOn.on('load', function() {
        $('#preloader').fadeOut(500);
    });

    ///////////////////////////////////////////////////
    // 03. scroll-to-target 
    windowOn.on('scroll', function() {
        var scroll = windowOn.scrollTop();
        if (scroll < 500) {
            $('.scroll-to-target').removeClass('open');

        } else {
            $('.scroll-to-target').addClass('open');
        }
    });

    ///////////////////////////////////////////////////
    // 04. Scroll Up Js
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }

    ///////////////////////////////////////////////////
    // 05. wow animation
    var wow = new WOW({
        mobile: true,
    });
    wow.init();
    var windowOn = $(window);


    windowOn.on('scroll', function() {
        var scroll = windowOn.scrollTop();
        if (scroll < 400) {
            $("#header-sticky").removeClass("header-sticky");
        } else {
            $("#header-sticky").addClass("header-sticky");
        }
    });

    if ($('.tr-header-height').length > 0) {
        var headerHeight = document.querySelector(".tr-header-height");
        var setHeaderHeight = headerHeight.offsetHeight;
        $(".tr-header-height").each(function() {
            $(this).css({
                'height': setHeaderHeight + 'px'
            });
        });

        $(".tr-header-height.header-sticky").each(function() {
            $(this).css({
                'height': inherit,
            });
        });
    }

    // 09. Sidebar Js
    $(".tr-menu-bar").on("click", function() {
        $(".tr-offcanvas").addClass("opened");
        $(".body-overlay").addClass("apply");
    });
    $(".close-btn").on("click", function() {
        $(".tr-offcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });
    $(".body-overlay").on("click", function() {
        $(".tr-offcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });

    ////////////////////////////////////////////////////
    // 13. Swiper Js
    const projectswiper = new Swiper('.tr-project-active', {
        // Optional parameters
        speed: 1500,
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
        autoplay: false,
        roundLengths: true,
        breakpoints: {
            '1400': {
                slidesPerView: 5,
            },
            '1200': {
                slidesPerView: 4,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 2,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        navigation: {
            prevEl: '.project-prev',
            nextEl: '.project-next',
        },

    });
    ////////////////////////////////////////////////////
    // 13. Swiper Js
    const serviceswiper = new Swiper('.tr-service-active', {
        // Optional parameters
        speed: 1500,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: false,
        roundLengths: true,
        breakpoints: {
            '1800': {
                slidesPerView: 3,
            },
            '1600': {
                slidesPerView: 3,
            },
            '1400': {
                slidesPerView: 2,
            },
            '1200': {
                slidesPerView: 2,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        pagination: {
            el: ".tr-service-dots",
            clickable: true,
        },

    });

    ////////////////////////////////////////////////////
    // 13. Swiper Js
    const tripswiper = new Swiper('.tr-testimonial-active', {
        // Optional parameters
        speed: 1500,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: false,
        roundLengths: true,
        breakpoints: {
            '1400': {
                slidesPerView: 1,
            },
            '1200': {
                slidesPerView: 1,
            },
            '992': {
                slidesPerView: 1,
            },
            '768': {
                slidesPerView: 1,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        navigation: {
            prevEl: '.testi-prev',
            nextEl: '.testi-next',
        },

    });

    ////////////////////////////////////////////////////
    // 13. Swiper Js
    const missionswiper = new Swiper('.tr-mission-active', {
        // Optional parameters
        speed: 1500,
        loop: true,
        slidesPerView: 4,
        spaceBetween: 25,
        autoplay: false,
        roundLengths: true,
        breakpoints: {
            '1400': {
                slidesPerView: 4
            },
            '1200': {
                slidesPerView: 4,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        navigation: {
            prevEl: '.mission-prev',
            nextEl: '.mission-next',
        },

    });

    ////////////////////////////////////////////////////
    // 13. Swiper Js
    var tr_text_slider = new Swiper(".tr-text-active", {
        loop: true,
        freemode: true,
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
        allowTouchMove: false,
        speed: 4000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });

    if ($('.tr-menu-content').length && $('.tr-menu-mobile').length) {
        let navContent = document.querySelector(".tr-menu-content").outerHTML;
        let mobileNavContainer = document.querySelector(".tr-menu-mobile");
        mobileNavContainer.innerHTML = navContent;

        let arrow = $(".tr-menu-mobile .has-dropdown > a");

        arrow.each(function() {
            let self = $(this);
            let arrowBtn = document.createElement("BUTTON");
            arrowBtn.classList.add("dropdown-toggle-btn");
            arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";
            self.append(function() {
                return arrowBtn;
            });

            self.find("button").on("click", function(e) {
                e.preventDefault();
                let self = $(this);
                self.toggleClass("dropdown-opened");
                self.parent().toggleClass("expanded");
                self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
                self.parent().parent().children(".tr-submenu").slideToggle();
            });

        });
    }

    ///////////////////////////////////////////////////
    // 10. Magnific Js
    $(".popup-video").magnificPopup({
        type: "iframe",
    });

    ////////////////////////////////////////////////////
    // 14. magnificPopup Js
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    ////////////////////////////////////////////////////
    // 11. Data CSS Js
    $("[data-background").each(function() {
        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
    });

    $("[data-width]").each(function() {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function() {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

    ////////////////////////////////////////////////////
    // 12. Counter Js
    if ($(".purecounter").length) {
        new PureCounter({
            filesizing: true,
            selector: ".filesizecount",
            pulse: 2,
        });
        new PureCounter();
    }

    // 08. Nice Select Js
    $('select').niceSelect();


    ////////////////////////////////////////////////////
    //26.isotope
    $('.grid').imagesLoaded(function() {
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item',
            },

        });
        // filter items on button click
        $('.masonary-menu').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue,
                animationOptions: {
                    duration: 100,
                    easing: "linear",
                    queue: true
                }
            });

        });

        //for menu active class
        $('.masonary-menu button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

    });

    // for header
    if ($("#tr-header-top__category-toogle").length > 0) {
        window.addEventListener('click', function(e) {

            if (document.getElementById('tr-header-top__category-toogle').contains(e.target)) {
                $(".tr-header-top__category").toggleClass("open");
            } else {
                $(".tr-header-top__category").removeClass("open");
            }
        });
    }

    ////////////////////////////////////////////////////
    // 03. Search Js
    $(".search-open-btn").on("click", function() {
        $(".search__popup").addClass("search-opened");
    });

    $(".search-close-btn").on("click", function() {
        $(".search__popup").removeClass("search-opened");
    });


    if ($('[data-mask-src]').length > 0) {
        $('[data-mask-src]').each(function() {
            var mask = $(this).attr('data-mask-src');
            $(this).css({
                'mask-image': 'url(' + mask + ')',
                '-webkit-mask-image': 'url(' + mask + ')'
            });
            $(this).removeAttr('data-mask-src');
        });
    };


})(jQuery);