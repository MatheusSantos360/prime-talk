$(".menu").on("click", () => {
    if ($(".menu").hasClass("active")) {
        $(".menu").removeClass("active");
        $(".line1").css("transform", "translateY(12px)");
        $(".line2").css("display", "block");
        $(".line3").css("transform", "translateY(-12px)");

        $(".menu-content").css("height", "0px")
        return;
    }
    $(".line1").css("transform", "translateY(2px) rotate(45deg)")
    $(".line2").css("display", "none")
    $(".line3").css("transform", "translateY(-3px) rotate(-45deg)")

    $(".menu-content").css("display", "flex")
    $(".menu-content").css("height", "100%")
    
    $(".menu").addClass("active");
})