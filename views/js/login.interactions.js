$(document).ready(function() {

    $(".registerdivision").hide();
    $(".changerdivision").hide();

    $("#startSession").click(function() {

        $(".logindivision").fadeIn("slow");
        $(".registerdivision").hide();
        $(".changerdivision").hide();
    })
    $("#registerUser").click(function() {

        $(".registerdivision").fadeIn("slow");
        $(".logindivision").hide();
        $(".changerdivision").hide();
    })
    $("#passwordChange").click( function() {

        $(".registerdivision").hide();
        $(".logindivision").hide();
        $(".changerdivision").fadeIn("slow");

    })
})