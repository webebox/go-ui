$(document).ready(function () {
    $(".docker-left").click(function () {
        $(this).prev("div").toggle();
        $(this).hide();
    });
    $(".docker-right").click(function () {
        $(this).next("div").toggle();
        $(this).hide();
    });
    $(".rotate").click(function () {
        $(this).parent().parent().next().show();
        $(this).parent().parent().next().next().show();
    });


});