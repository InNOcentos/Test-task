// Form

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
//  Burger menu 



$('.header-navigation-mobile_menu').on('click', function (event) {
    event.preventDefault();
    $('#menuBtn').toggleClass('menu-active');
    $('.header-navigation-list_mobile').toggleClass('menu-active');
})

// header

let headerTop = $('.header-navigation').offset().top;

$(window).scroll(function () {
    if ($(window).scrollTop() > headerTop) {
        $('headerTop').css({ position: 'fixed', top: '0px' });
    } else {
        $('headerTop').css({ position: 'static' });
    }



})




// search.addEventListener('click',function() {
//     input.style.display = 'block';
//     input.style.transition = '2s';
//     input.classList.add('lightSpeedIn');
// })
// document.addEventListener('click',function(evt) {
//     let formClose = getElementById('myInput');
//     if (evt.target!= formClose[0] && formClose.has(evt.target).length === 0) {
//        input.style.display = 'none';

//     }
// })
