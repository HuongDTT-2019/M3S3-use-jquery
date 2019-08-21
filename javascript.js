$(document).ready(function () {
    $("#hide").click(function () {
        $("p").hide();
    });
    $("#show").click(function () {
        $("p").show();
    })
});

// demo2
$(document).ready(function () {
    $("#animation").click(function () {
        var div = $("div");
        div.animate({left:"250px"},"slow");
        div.animate({fontSize:"50px"},"slow");
    });
});