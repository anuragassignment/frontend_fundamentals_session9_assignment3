//jquery function collapses the menu if height is less than 300px and shows a caret group, click on which expands the menu
$(document).ready(function () {
    $(window).on('resize', function () {
        var windowHt = $(window).height();
        if (windowHt < 300) {
            $('.nav.navbar-nav').slideUp();
            $('.caret-dropdown').fadeTo('slow', 1);
        }
    });
    $('.caret-dropdown').on('click', function () {
        $('.nav.navbar-nav').slideDown();
        $(this).fadeTo('fast', 0);
    })
});
