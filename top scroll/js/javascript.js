var docHeight = 0;
var docElem = document.documentElement;
var scrollHeight = document.documentElement.scrollHeight;
var offsetHeight = document.documentElement.offsetHeight;
var scrollPos = document.documentElement.scrollTop;
var btn = document.getElementById('back-to-top');


//브라우저의 높이 찾는다 scrollHeight / offsetHeight 비교
function height (){
    docHeight = Math.max(scrollHeight,offsetHeight);
    scrollPos = document.documentElement.scrollTop;
    var offset = (docHeight * 0.25);
    console.log(offset + " -- " + scrollPos);
    if(scrollPos > offset){
        btn.classList.add('visible');
        console.log("true");
    }else{
        btn.classList.remove('visible');
        console.log("fauls");
    }
}
window.addEventListener('scroll',function(){
    height();
})
//클릭했을때 up실행
var scrollInterval;
btn.addEventListener('click',function(e){
    e.preventDefault();
    scrollInterval = setInterval(up,15);
    //숫자마다 할일을 시행함
});

//천천히 1초에 -50씩 이동
function up(){
    window.scrollBy(0,-50);
    //윈도우 스크롤의 축을 x,y만큼 움직인다.
    console.log('loading' + "--" + scrollPos);
    if(scrollPos == 0){
        clearInterval(scrollInterval);
        console.log('stop');
    }

}
