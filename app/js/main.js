$(document).ready(function () {
    
    // === Form ===

    let search = $('#mySearch');
    let input = $('#myInput');
    let label = $('.label');

    search.on('click', function () {
        input.addClass('active');
        input.addClass('flipInX');
        $(this).css('display', 'none');
        input.focus();
    })

    $(document).mouseup(function (e) {
        if (!input.is(e.target)
            && input.has(e.target).length === 0) {
            input.removeClass('active');
            search.css('display', 'block');
        }
    });

    // === Sticky header ===


    $(window).scroll(function () {
        if ($(window).width() > 767 && $(window).scrollTop() > 35) {
            $('.header-wrapper').css('display', 'none');
            $('.header-navigation').addClass('sticky');
            $('.header-navigation-logo_link').css({ 'display': 'flex', 'justify-content': 'center' });
        } else {
            $('.header-wrapper').css('display', 'block');
            $('.header-navigation').removeClass('sticky');
        }
    });

    // === Burger menu === 

    $('.header-navigation-mobile_menu').on('click', function (event) {
        event.preventDefault();
        $('#menuBtn').toggleClass('menu-active');
        $('.header-navigation-list_mobile').toggleClass('menu-active');
    })
})