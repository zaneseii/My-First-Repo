$(document).ready(function() {

    $('img').click(function() {
        var currentSrc = $(this).attr('src');
        var altSrc = $(this).attr('data-alt-src');

        $(this).attr('src', altSrc);
        $(this).attr('data-alt-src', currentSrc);
    });

    $('#reset-btn').click(function() {
        $('img').each(function() {
            var src = $(this).attr('src');
            var alt = $(this).attr('data-alt-src');

            if (!src.includes('card-back')) {
                $(this).attr('src', alt);
                $(this).attr('data-alt-src', src);
            }
        });
    });

});