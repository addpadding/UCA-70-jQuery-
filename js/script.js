console.log("script");

$(function () {


    $("span").parentsUntil("section").css({
        border: "2px solid #f00"
    })


    $("section").find("ul").css({
        border: "2px solid #00f"
    })


});
