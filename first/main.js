
$(document).ready(function() {

    $(".images").click(function(){
        var img = $(this);

        var src = img.attr('src');
        $("body").append("<div class='popup'>"+
            "<div class='popup_bg'></div>"+
            "<img src='"+src+"' class='popup_img' />"+
            "</div>");
        $(".popup").fadeIn(800);
        $(".popup_bg").click(function(){
            $(".popup").fadeOut(800);
            setTimeout(function() {
                $(".popup").remove();
            }, 800);
        });
    });

})

var main = function() {

    $('.icon-menu').click(function() {

        $('.menu').animate({

            left: '0px'

        }, 200);

        $('body').animate({

            left: '285px'

        }, 200);
    });




    $('.icon-close').click(function() {

        $('.menu').animate({

            left: '-285px'

        }, 200);



            $('body').animate({

            left: '0px'

        }, 200);
    });
};


$(document).ready(main);

////////////////////////////////////////////////
$('#butc').click(function() {
    $('.flippy').dblclick();
    $('.flippy1').dblclick()
    $('.flippy2').dblclick()
    $('.flippy3').dblclick()
    $('.flippy4').dblclick()
    $('.flippy5').dblclick()
    $('.flippy6').dblclick()
    $('.flippy7').dblclick()

    $('.flippy').dblclick(function(){
    $("#leave").attr("src","images/brush.jpg");

    if ($(this).attr('flipped'))
        $(this).removeAttr('flipped');
    else $(this).attr('flipped','flipped'); });
    $('.flippy1').dblclick(function(){

        $("#coconut").attr("src","images/hands.jpg");
        if ($(this).attr('flipped'))
            $(this).removeAttr('flipped');
        else $(this).attr('flipped','flipped');
    });
    $('.flippy2').dblclick(function(){

        $("#sky").attr("src","images/bir.png");
        if ($(this).attr('flipped'))
            $(this).removeAttr('flipped');
        else $(this).attr('flipped','flipped');
    });
    $('.flippy3').dblclick(function(){

        $("#lem").attr("src","images/field.jpg");
        if ($(this).attr('flipped'))
            $(this).removeAttr('flipped');
        else $(this).attr('flipped','flipped');
    });
    $('.flippy4').dblclick(function(){

        $("#fruit").attr("src","images/mauntin.jpg");
        if ($(this).attr('flipped'))
            $(this).removeAttr('flipped');
        else $(this).attr('flipped','flipped');
    });
    $('.flippy5').dblclick(function(){

        $("#b").attr("src","images/dandelion.jpg");
        if ($(this).attr('flipped'))
            $(this).removeAttr('flipped');
        else $(this).attr('flipped','flipped');
    });


   $('.flippy6').dblclick(function(){

    $("#m").attr("src","images/bird.jpg");
    if ($(this).attr('flipped'))
        $(this).removeAttr('flipped');
    else $(this).attr('flipped','flipped');
});

$('.flippy7').dblclick(function(){

    $("#d").attr("src","images/rose.jpeg");
    if ($(this).attr('flipped'))
        $(this).removeAttr('flipped');
    else $(this).attr('flipped','flipped');
});});
///////////////////////////////////////////////////////////////
$('#butb').click(function() {
    $('.flippy').dblclick();
    $('.flippy1').dblclick()
    $('.flippy2').dblclick()
    $('.flippy3').dblclick()
    $('.flippy4').dblclick()
    $('.flippy5').dblclick()
    $('.flippy6').dblclick()
    $('.flippy7').dblclick()

$('.flippy').dblclick(function(){
    $("#leave").attr("src","images/pink.jpg");

    if ($(this).attr('flipped'))
        $(this).removeAttr('flipped');
    else $(this).attr('flipped','flipped'); });
$('.flippy1').dblclick(function(){

    $("#coconut").attr("src","images/street.jpg");
    if ($(this).attr('flipped'))
        $(this).removeAttr('flipped');
    else $(this).attr('flipped','flipped');
});
$('.flippy2').dblclick(function(){

    $("#sky").attr("src","images/venice.jpg");
    if ($(this).attr('flipped'))
        $(this).removeAttr('flipped');
    else $(this).attr('flipped','flipped');
});
$('.flippy3').dblclick(function(){

    $("#lem").attr("src","images/seas.jpg");
    if ($(this).attr('flipped'))
        $(this).removeAttr('flipped');
    else $(this).attr('flipped','flipped');
});
$('.flippy4').dblclick(function(){

    $("#fruit").attr("src","images/oldb.jpg");
    if ($(this).attr('flipped'))
        $(this).removeAttr('flipped');
    else $(this).attr('flipped','flipped');
});
$('.flippy5').dblclick(function(){

    $("#b").attr("src","images/bloom.jpg");
    if ($(this).attr('flipped'))
        $(this).removeAttr('flipped');
    else $(this).attr('flipped','flipped');
});


$('.flippy6').dblclick(function(){

    $("#m").attr("src","images/moon.jpg");
    if ($(this).attr('flipped'))
        $(this).removeAttr('flipped');
    else $(this).attr('flipped','flipped');
});

$('.flippy7').dblclick(function(){

    $("#d").attr("src","images/dask.jpg");
    if ($(this).attr('flipped'))
        $(this).removeAttr('flipped');
    else $(this).attr('flipped','flipped');
});

});
document.getElementById('button').ondblclick = (function() {
    document.getElementsByTagName('audio')[0].play();
    document.getElementsByTagName('span')[0].innerHTML = 'Colecttions!';
    return false;
});

$('.carousel').carousel({
    interval: 5000
})
