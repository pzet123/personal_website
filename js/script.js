$(function(){
    if($(window).width() > 768){
        $("#navButton").hide();
    } else {
        $("#toggleMenu").hide();
    }

    $(window).resize(function() {
        if($(window).width() > 768){
            $("#toggleMenu").show()
            $("#navButton").hide()
        }
        if($(window).width() <= 768){
            $("#toggleMenu").hide()
            $("#navButton").show()
        }

    })
});



function toggleMenu(){
    $("#toggleMenu").toggle("height");
}

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
    SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
    SlideShow(slidePosition = n);
}

function SlideShow(n) {
var i;
var slides = document.getElementsByClassName("project2Image");
if (n > slides.length) {slidePosition = 1}
if (n < 1) {slidePosition = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slides[slidePosition-1].style.display = "block";
} 