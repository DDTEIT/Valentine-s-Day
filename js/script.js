jQuery(document).ready(function($){

    $( "#arrow1" ).click(function(){
        if (!$("#bl1").hasClass('clicked')){
            $("#bl1").addClass('clicked');
            $(".sp1").css({"top": "387px", "background": "#FFE1FF", "box-shadow": "0 0 10px rgba(0,0,0,0.5)"});
            $("#bl1").css({"height": "600px", "top": "540px"}); 
            $(".img1-3").css({"z-index": "-1", "top": "220px", "opacity": "1"});
            $(".description").css({"color": "#444444"});
            $("#arrow1").css({"top": "550px", "transform": "rotate(180deg)", "left": "46.5%"});
            $("#bl2").css({"top": "1007px"});

            $("#bl2").removeClass('clicked');
            $("#bl2").css({"height": "220px","top": "1007px"});
            $(".sp2").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img2-3").css({"top": "0px", "opacity": "0"});
            $(".description2").css({"color": "transparent"});
            $("#arrow2").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl3").removeClass('clicked');
            $("#bl3").css({"height": "220px","top": "1277px"});
            $(".sp3").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img3-3").css({"top": "0px", "opacity": "0"});
            $(".description3").css({"color": "transparent"});
            $("#arrow3").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl4").removeClass('clicked');
            $("#bl4").css({"height": "220px","top": "1547px"});
            $(".sp4").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img4-3").css({"top": "0px", "opacity": "0"});
            $(".description4").css({"color": "transparent"});
            $("#arrow4").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl5").removeClass('clicked');
            $("#bl5").css({"height": "220px","top": "1817px"});
            $(".sp5").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img5-3").css({"top": "0px", "opacity": "0"});
            $(".description5").css({"color": "transparent"});
            $("#arrow5").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

        }else{
            $("#bl1").removeClass('clicked');
            $("#bl1").css({"height": "220px","top": "350px"});
            $(".sp1").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img1-3").css({"top": "0px", "opacity": "0"});
            $(".description").css({"color": "transparent"});
            $("#arrow1").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl2").removeClass('clicked');
            $("#bl2").css({"height": "220px","top": "620px"});
            $(".sp2").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img2-3").css({"top": "0px", "opacity": "0"});
            $(".description2").css({"color": "transparent"});
            $("#arrow2").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl3").removeClass('clicked');
            $("#bl3").css({"height": "220px","top": "890px"});
            $(".sp3").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img3-3").css({"top": "0px", "opacity": "0"});
            $(".description3").css({"color": "transparent"});
            $("#arrow3").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl4").removeClass('clicked');
            $("#bl4").css({"height": "220px","top": "1160px"});
            $(".sp4").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img4-3").css({"top": "0px", "opacity": "0"});
            $(".description4").css({"color": "transparent"});
            $("#arrow4").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl5").removeClass('clicked');
            $("#bl5").css({"height": "220px", "top": "1420px"});
            $(".sp5").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img5-3").css({"top": "0px", "opacity": "0"});
            $(".description5").css({"color": "transparent"});
            $("#arrow5").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});
        }
    });

    $( "#arrow2" ).click(function(){
        if (!$("#bl2").hasClass('clicked')){
            $("#bl2").addClass('clicked');
            $(".sp2").css({"top": "387px", "background": "#FFE1FF", "box-shadow": "0 0 10px rgba(0,0,0,0.5)"});
            $("#bl2").css({"height": "600px", "top": "810px"});
            $(".img2-3").css({"z-index": "-1", "top": "220px", "opacity": "1"});
            $(".description2").css({"color": "#444444"});
            $("#arrow2").css({"top": "550px", "transform": "rotate(180deg)", "left": "46.5%"});

            $("#bl1").removeClass('clicked');
            $("#bl1").css({"height": "220px","top": "350px"});
            $(".sp1").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img1-3").css({"top": "0px", "opacity": "0"});
            $(".description").css({"color": "transparent"});
            $("#arrow1").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl3").removeClass('clicked');
            $("#bl3").css({"height": "220px","top": "1277px"});
            $(".sp3").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img3-3").css({"top": "0px", "opacity": "0"});
            $(".description3").css({"color": "transparent"});
            $("#arrow3").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl4").removeClass('clicked');
            $("#bl4").css({"height": "220px","top": "1547px"});
            $(".sp4").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img4-3").css({"top": "0px", "opacity": "0"});
            $(".description4").css({"color": "transparent"});
            $("#arrow4").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl5").removeClass('clicked');
            $("#bl5").css({"height": "220px","top": "1817px"});
            $(".sp5").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img5-3").css({"top": "0px", "opacity": "0"});
            $(".description5").css({"color": "transparent"});
            $("#arrow5").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

        }else{
            $("#bl1").removeClass('clicked');
            $("#bl1").css({"height": "220px","top": "350px"});
            $(".sp1").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img1-3").css({"top": "0px", "opacity": "0"});
            $(".description").css({"color": "transparent"});
            $("#arrow1").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl2").removeClass('clicked');
            $("#bl2").css({"height": "220px","top": "620px"});
            $(".sp2").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img2-3").css({"top": "0px", "opacity": "0"});
            $(".description2").css({"color": "transparent"});
            $("#arrow2").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl3").removeClass('clicked');
            $("#bl3").css({"height": "220px","top": "890px"});
            $(".sp3").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img3-3").css({"top": "0px", "opacity": "0"});
            $(".description3").css({"color": "transparent"});
            $("#arrow3").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl4").removeClass('clicked');
            $("#bl4").css({"height": "220px","top": "1160px"});
            $(".sp4").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img4-3").css({"top": "0px", "opacity": "0"});
            $(".description4").css({"color": "transparent"});
            $("#arrow4").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl5").removeClass('clicked');
            $("#bl5").css({"height": "220px", "top": "1420px"});
            $(".sp5").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img5-3").css({"top": "0px", "opacity": "0"});
            $(".description5").css({"color": "transparent"});
            $("#arrow5").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});
        }
    });

    $( "#arrow3" ).click(function(){
        if (!$("#bl3").hasClass('clicked')){
            $("#bl3").addClass('clicked');
            $(".sp3").css({"top": "387px", "background": "#FFE1FF", "box-shadow": "0 0 10px rgba(0,0,0,0.5)"});
            $("#bl3").css({"height": "600px", "top": "1080px"});
            $(".img3-3").css({"z-index": "-1", "top": "220px", "opacity": "1"});
            $(".description3").css({"color": "#444444"});
            $("#arrow3").css({"top": "550px", "transform": "rotate(180deg)", "left": "46.5%"});

            $("#bl1").removeClass('clicked');
            $("#bl1").css({"height": "220px","top": "350px"});
            $(".sp1").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img1-3").css({"top": "0px", "opacity": "0"});
            $(".description").css({"color": "transparent"});
            $("#arrow1").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl2").removeClass('clicked');
            $("#bl2").css({"height": "220px","top": "620px"});
            $(".sp2").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img2-3").css({"top": "0px", "opacity": "0"});
            $(".description2").css({"color": "transparent"});
            $("#arrow2").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl4").removeClass('clicked');
            $("#bl4").css({"height": "220px","top": "1547px"});
            $(".sp4").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img4-3").css({"top": "0px", "opacity": "0"});
            $(".description4").css({"color": "transparent"});
            $("#arrow4").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl5").removeClass('clicked');
            $("#bl5").css({"height": "220px","top": "1817px"});
            $(".sp5").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img5-3").css({"top": "0px", "opacity": "0"});
            $(".description5").css({"color": "transparent"});
            $("#arrow5").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

        }else{
            $("#bl1").removeClass('clicked');
            $("#bl1").css({"height": "220px","top": "350px"});
            $(".sp1").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img1-3").css({"top": "0px", "opacity": "0"});
            $(".description").css({"color": "transparent"});
            $("#arrow1").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl2").removeClass('clicked');
            $("#bl2").css({"height": "220px","top": "620px"});
            $(".sp2").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img2-3").css({"top": "0px", "opacity": "0"});
            $(".description2").css({"color": "transparent"});
            $("#arrow2").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl3").removeClass('clicked');
            $("#bl3").css({"height": "220px","top": "890px"});
            $(".sp3").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img3-3").css({"top": "0px", "opacity": "0"});
            $(".description3").css({"color": "transparent"});
            $("#arrow3").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl4").removeClass('clicked');
            $("#bl4").css({"height": "220px","top": "1160px"});
            $(".sp4").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img4-3").css({"top": "0px", "opacity": "0"});
            $(".description4").css({"color": "transparent"});
            $("#arrow4").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl5").removeClass('clicked');
            $("#bl5").css({"height": "220px", "top": "1420px"});
            $(".sp5").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img5-3").css({"top": "0px", "opacity": "0"});
            $(".description5").css({"color": "transparent"});
            $("#arrow5").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});
        }
    });

    $( "#arrow4" ).click(function(){
        if (!$("#bl4").hasClass('clicked')){
            $("#bl4").addClass('clicked');
            $(".sp4").css({"top": "387px", "background": "#FFE1FF", "box-shadow": "0 0 10px rgba(0,0,0,0.5)"});
            $("#bl4").css({"height": "600px", "top": "1350px"});
            $(".img4-3").css({"z-index": "-1", "top": "220px", "opacity": "1"}); 
            $(".description4").css({"color": "#444444"});
            $("#arrow4").css({"top": "550px", "transform": "rotate(180deg)", "left": "46.5%"});

            $("#bl1").removeClass('clicked');
            $("#bl1").css({"height": "220px","top": "350px"});
            $(".sp1").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img1-3").css({"top": "0px", "opacity": "0"});
            $(".description").css({"color": "transparent"});
            $("#arrow1").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl3").removeClass('clicked');
            $("#bl3").css({"height": "220px","top": "890px"});
            $(".sp3").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img3-3").css({"top": "0px", "opacity": "0"});
            $(".description3").css({"color": "transparent"});
            $("#arrow3").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl2").removeClass('clicked');
            $("#bl2").css({"height": "220px","top": "620px"});
            $(".sp2").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img2-3").css({"top": "0px", "opacity": "0"});
            $(".description2").css({"color": "transparent"});
            $("#arrow2").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl5").removeClass('clicked');
            $("#bl5").css({"height": "220px","top": "1817px"});
            $(".sp5").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img5-3").css({"top": "0px", "opacity": "0"});
            $(".description5").css({"color": "transparent"});
            $("#arrow5").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

        }else{
            $("#bl1").removeClass('clicked');
            $("#bl1").css({"height": "220px","top": "350px"});
            $(".sp1").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img1-3").css({"top": "0px", "opacity": "0"});
            $(".description").css({"color": "transparent"});
            $("#arrow1").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl2").removeClass('clicked');
            $("#bl2").css({"height": "220px","top": "620px"});
            $(".sp2").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img2-3").css({"top": "0px", "opacity": "0"});
            $(".description2").css({"color": "transparent"});
            $("#arrow2").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl3").removeClass('clicked');
            $("#bl3").css({"height": "220px","top": "890px"});
            $(".sp3").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img3-3").css({"top": "0px", "opacity": "0"});
            $(".description3").css({"color": "transparent"});
            $("#arrow3").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl4").removeClass('clicked');
            $("#bl4").css({"height": "220px","top": "1160px"});
            $(".sp4").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img4-3").css({"top": "0px", "opacity": "0"});
            $(".description4").css({"color": "transparent"});
            $("#arrow4").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl5").removeClass('clicked');
            $("#bl5").css({"height": "220px", "top": "1420px"});
            $(".sp5").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img5-3").css({"top": "0px", "opacity": "0"});
            $(".description5").css({"color": "transparent"});
            $("#arrow5").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});
        }
    });

    $( "#arrow5" ).click(function(){
        if (!$("#bl5").hasClass('clicked')){
            $("#bl5").addClass('clicked');
            $(".sp5").css({"top": "387px", "background": "#FFE1FF", "box-shadow": "0 0 10px rgba(0,0,0,0.5)"});
            $("#bl5").css({"height": "600px", "top": "1620px"});
            $(".img5-3").css({"z-index": "-1", "top": "220px", "opacity": "1"}); 
            $(".description5").css({"color": "#444444"});
            $("#arrow5").css({"top": "550px", "transform": "rotate(180deg)", "left": "46.5%"});

            $("#bl1").removeClass('clicked');
            $("#bl1").css({"height": "220px","top": "350px"});
            $(".sp1").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img1-3").css({"top": "0px", "opacity": "0"});
            $(".description").css({"color": "transparent"});
            $("#arrow1").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl3").removeClass('clicked');
            $("#bl3").css({"height": "220px","top": "890px"});
            $(".sp3").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img3-3").css({"top": "0px", "opacity": "0"});
            $(".description3").css({"color": "transparent"});
            $("#arrow3").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl2").removeClass('clicked');
            $("#bl2").css({"height": "220px","top": "620px"});
            $(".sp2").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img2-3").css({"top": "0px", "opacity": "0"});
            $(".description2").css({"color": "transparent"});
            $("#arrow2").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl4").removeClass('clicked');
            $("#bl4").css({"height": "220px","top": "1160px"});
            $(".sp4").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img4-3").css({"top": "0px", "opacity": "0"});
            $(".description4").css({"color": "transparent"});
            $("#arrow4").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

        }else{
            $("#bl1").removeClass('clicked');
            $("#bl1").css({"height": "220px","top": "350px"});
            $(".sp1").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img1-3").css({"top": "0px", "opacity": "0"});
            $(".description").css({"color": "transparent"});
            $("#arrow1").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl2").removeClass('clicked');
            $("#bl2").css({"height": "220px","top": "620px"});
            $(".sp2").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img2-3").css({"top": "0px", "opacity": "0"});
            $(".description2").css({"color": "transparent"});
            $("#arrow2").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl3").removeClass('clicked');
            $("#bl3").css({"height": "220px","top": "890px"});
            $(".sp3").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img3-3").css({"top": "0px", "opacity": "0"});
            $(".description3").css({"color": "transparent"});
            $("#arrow3").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl4").removeClass('clicked');
            $("#bl4").css({"height": "220px","top": "1160px"});
            $(".sp4").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img4-3").css({"top": "0px", "opacity": "0"});
            $(".description4").css({"color": "transparent"});
            $("#arrow4").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});

            $("#bl5").removeClass('clicked');
            $("#bl5").css({"height": "220px", "top": "1420px"});
            $(".sp5").css({"top": "167px", "background": "transparent", "box-shadow": "0 0 0px rgba(0,0,0,0)"});
            $(".img5-3").css({"top": "0px", "opacity": "0"});
            $(".description5").css({"color": "transparent"});
            $("#arrow5").css({"top": "190px", "transform": "rotate(-0deg)", "left": "50%", "transform": "translate(-50%, -50%)"});
        }
    });
	
	$(function() {
		$('.scroll_up').click(function() {
			$("html, body").animate({scrollTop:0},1000);
		})
		})
		$(window).scroll(function() {
		if ($(this).scrollTop()>200) {
			$('.scroll_up').fadeIn();
		}
		else {
			$('.scroll_up').fadeOut();
		}
	});
});

