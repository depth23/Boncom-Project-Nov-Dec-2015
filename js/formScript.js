$(document).ready(function(){
//Form Show Hide Settings

$('.requestForm').on("click", function(e) {
    $('.form-head_free-copy').hide()
    $('.form-head-two_free-copy-bom').hide();
    $('.showTest').fadeIn('medium');
    e.stopPropagation();
});
$(document).on("click", function(){
    $('.showTest').hide();
    $('.form-head_free-copy').fadeIn('medium');
    $('.form-head-two_free-copy-bom').fadeIn('medium');
});
$('.showTest').hide();

//Page Scroll Settings 

$(".scroll-main").onepage_scroll({
   sectionContainer: ".section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: false,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});

// Page Scroll functions 

$('.scroll-p1').on("click", function(){
    $(".main").moveTo(1);
});

$('.scroll-p2').on("click", function(){
    $(".main").moveTo(2);
});

$('.scroll-p3').on("click", function(){
    $(".main").moveTo(3);
})

$('.scroll-p4').on("click", function(){
    $(".main").moveTo(4);
});

$('.scroll-p5').on("click", function(){
    $(".main").moveTo(5);
});

$('.scroll-p6').on("click", function(){
    $(".main").moveTo(6);
});

})
