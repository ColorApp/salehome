$(document).ready(function() {
    // Initital image slider
    $('#imageGallery').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        thumbItem:4,
        slideMargin:0,
        thumbMargin: 15,
        galleryMargin: 20,
        controls: false,
        currentPagerPosition: 'middle',
        currentCounterPosition: 'middle',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    controls: true,
                    enableTouch: false
                }
            }
        ]
    }); 

    // Initital owl carousel gallery №!
    $(".owl-carousel.gallery").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsiveRefreshRate: 1,
        responsive: {
            0: {
                touchDrag: false
            },
            576: {
                touchDrag: true
            }
        }
    });
});