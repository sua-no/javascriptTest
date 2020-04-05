window.addEventListener("DOMContentLoaded",function(){
    const gnb = document.querySelector(".gnb"),
    line = document.querySelector(".line");
    let lineWid, lineOff;

    inIt();
    function inIt(){
        let commonWid = gnb.children[0].offsetWidth;
        let commonOff = gnb.children[0].offsetLeft;
        line.style.width = commonWid+"px";
        line.style.left = commonOff+"px";
    }


    gnb.addEventListener("mouseover",tab);
    function tab(e){
        target = e.target;
        try{
            for (; target.nodeName != "LI"; target = target.parentNode);
            lineWid = target.offsetWidth;
            line.style.width = lineWid+"px";

            lineOff = target.offsetLeft;
            line.style.left = lineOff+"px";
        }
        catch{}
    }

});