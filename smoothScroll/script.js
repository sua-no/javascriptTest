window.addEventListener("DOMContentLoaded",function(){
    const wrap = document.querySelector(".wrap");
    let num = 0;
    console.log(wrap.offsetHeight - window.innerHeight);
    wrap.style.transform = `translateY(${num}px)`;
    window.addEventListener("wheel",scrollE);
    function scrollE(){

        if (event.deltaY > 0) {
            if(num==100){return;}
            num += -10;
            
            wrap.style.transform = `translateY(${num}%)`;
            console.log(num);

            
        } else{
            if(num==100){return;}
            num += 10;
            
            wrap.style.transform = `translateY(${num}%)`;
            console.log(num);

        }
    }
});