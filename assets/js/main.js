$(function() {
    $('[data-spy="scroll"]').each(function () {
        $(this).scrollspy('refresh');
    })

    $('[data-toggle="tooltip"]').tooltip();

    // Animations initialization
    new WOW().init();
});