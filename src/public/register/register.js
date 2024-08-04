window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        $(".menu").removeClass("active");
        $(".line1").css("transform", "translateY(12px)");
        $(".line2").css("display", "block");
        $(".line3").css("transform", "translateY(-12px)");

        $(".menu-content").css("height", "0px")
    }
})

$(".menu").on("click", () => {
    if ($(".menu").hasClass("active")) {
        $(".menu").removeClass("active");
        $(".line1").css("transform", "translateY(12px)");
        $(".line2").css("display", "block");
        $(".line3").css("transform", "translateY(-12px)");

        $(".menu-content").css("height", "0")
        return;
    }
    $(".line1").css("transform", "translateY(2px) rotate(45deg)")
    $(".line2").css("display", "none")
    $(".line3").css("transform", "translateY(-3px) rotate(-45deg)")

    $(".menu-content").css("display", "block")
    $(".menu-content").css("height", "calc(100% - 75px)")
    
    $(".menu").addClass("active");
})