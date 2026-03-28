$(document).ready(function () {
    /*  Plugin 1: Typed.js  */
    new Typed('#typed-text', {
        strings: [
            'Specialty coffee from Philippine highlands.',
            'Slow-brewed. Honestly sourced.',
            'Your third place. Your daily ritual.',
            'From the farm. Into your cup.'
        ],
        typeSpeed: 45,
        backSpeed: 25,
        backDelay: 2000,
        loop: true
    });

    /*  Plugin 2: Slick Carousel */
    $('.menu-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 }
            }
        ]
    });

    /*  Plugin 3: AOS (Animate On Scroll) */
    AOS.init({
        duration: 700,
        easing: 'ease-out',
        once: true
    });
});
