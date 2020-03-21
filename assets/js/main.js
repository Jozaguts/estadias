// let toggleBtn = document.getElementById('toggleBtn')
//
// let toggleStatus = false;
// function toggleClass() {
//     let navBar = document.getElementById('navBar')
//     if(!toggleStatus) {
//         navBar.classList.remove('d-none');
//         toggleStatus = !toggleStatus;
//     }else {
//         navBar.classList.add('d-none');
//         toggleStatus = !toggleStatus;
//     }
// }
// toggleBtn.addEventListener('click',toggleClass);
//
// //carrusel
// (function($) {
//     "use strict";
//
//     // manual carousel controls
//     $('.next').click(function(){ $('.carousel').carousel('next');return false; });
//     $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
//
// })(jQuery);
//

//
// //galeria proveedores
//
//
//
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed:1000,
    responsive:{
        0:{
            items:1            
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
$('.next-btn').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.prev-btn').click(function() {
    owl.trigger('prev.owl.carousel');
})