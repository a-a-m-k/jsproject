



function tw(text, n) {
    if (n < (text.length)) {
        $('.test').html(text.substring(0, n+1));
        n++;
        setTimeout(function() {
            tw(text, n)

       }, 100);

    }
}





window.onload=function(e) {
    e.stopPropagation();

    var text = $('.test').data('text');

    tw(text, 0);


        Sound();



};

function Sound() {

    var embed = document.createElement('EMBED');

    embed.src = 'audio/tw1.mp3';

    document.body.appendChild(embed);

}
var paper = document.getElementById('wrap');

paper.onmousedown = function(e) {
    paper.style.position = 'absolute';
    paper.style.backgroundColor="white";
    paper.style.height="400px";


    moveAt(e);

    document.body.appendChild(paper);

    paper.style.zIndex = 1000;


    function moveAt(e) {
        paper.style.left = e.pageX - paper.offsetWidth / 2 + 'px';
        paper.style.top = e.pageY - paper.offsetHeight / 2 + 'px';
    }


    document.onmousemove = function(e) {
        moveAt(e);
    }

    paper.onmouseup = function() {
        document.onmousemove = null;
        paper.onmouseup = null;
    }
}
paper.ondragstart = function() {
    return false;
};