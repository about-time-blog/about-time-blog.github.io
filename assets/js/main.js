// Unhide the content and jump to the right place on the page at the same time
function restoreAndSkipContent() {
    var topPaddingInPixels = $('body').css('padding-top');
    var topPadding = parseInt(topPaddingInPixels);

    var hidden = $('.skip-me');
    var hiddenHeight = hidden.outerHeight();

    var x = hiddenHeight + topPadding;

    hidden.addClass('unhide');
    window.scroll(0, x);
};


$(function() {
    // restoreAndSkipContent();

    $('[data-spy="scroll"]').each(function () {
        $(this).scrollspy('refresh');
    })

    $('[data-toggle="tooltip"]').tooltip();

    // Animations initialization
    new WOW().init();    
});