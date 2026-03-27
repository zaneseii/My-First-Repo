$(document).ready(function() {

    $('img').hover(
        // Mouse enters: show the advice image
        function() {
            var adviceSrc = $(this).attr('data-alt-src');
            $(this).attr('src', adviceSrc);
        },
        // Mouse leaves: bring the cookie back
        function() {
            $(this).attr('src', 'assets/cookie.jpg');
        }
    );

});