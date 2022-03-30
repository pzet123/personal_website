$(function(){

    if($(window).width() > 768){
        $("#navButton").hide();
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