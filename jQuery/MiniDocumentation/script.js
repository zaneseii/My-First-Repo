/* jQuery Mini Documentation 
* Author: Louis Zane De Jesus
* Date: 2026-03-27
*/
$(document).ready(function() {

    /* Click Section */
    $('#clickButton').click(function() {
        alert('Button clicked!');
        $('#clickContent').show();
    });

    /* Hide Section */
    $('#hideButton').click(function() {
        $('#hideContent').hide();
    });

    /* Show Section */
    $('#showButton').click(function() {
        $('#showContent').show();
    });

    /* Toggle Section */
    $('#toggleButton').click(function() {
        $('#toggleContent').toggle();
    });

    /* Slide Down Section */
    $('#slideDownButton').click(function() {
        $('#slideDownContent').slideDown();
    });

    /* Slide Up Section */
    $('#slideUpButton').click(function() {
        $('#slideUpContent').slideUp();
    });

    /* Slide Toggle Section */
    $('#slideToggleButton').click(function() {
        $('#slideToggleContent').slideToggle();
    });

    /* Fade In Section */
    $('#fadeInButton').click(function() {
        $('#fadeInContent').fadeIn();
    });

    /* Fade Out Section */
    $('#fadeOutButton').click(function() {
        $('#fadeOutContent').fadeOut();
    });

    /* Fade Toggle Section */
    $('#fadeToggleButton').click(function() {
        $('#fadeToggleContent').fadeToggle();
    });

    /* Add Class Section */
    $('#addClassButton').click(function() {
        $('#addClassContent').addClass('highlight');
    });

    /* Before Section */
    $('#beforeButton').click(function() {
        $('#beforeContent').before('<p>I was inserted before the content!</p>');
    });

    /* After Section */
    $('#afterButton').click(function() {
        $('#afterContent').after('<p>I was inserted after the content!</p>');
    });

    /* Append Section */
    $('#appendButton').click(function() {
        $('#appendContent').append('<p>Appended content added!</p>');
    });

    /* HTML Section */
    $('#htmlButton').click(function() {
        $('#htmlContent').html('<p>HTML content replaced!</p>');
    });

    /* Attribute Section */
    $('#attrButton').click(function() {
        $('#attrContent').attr({
            'src': 'luffy.jpg',
            'alt': 'This is the new image'
        });
    });

    /* Value Section */
    $('#valButton').click(function() {
        let userInput = $('#nameInput').val();
        $('#displayInput').val(userInput);
    });

    /* Text Section */
    $('#textButton').click(function() {
        $('#textContent').text('Text content replaced!');
    });
});