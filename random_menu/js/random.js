var select = document.getElementById("select");
var btn = select.getElementsByClassName("btn");
var ul = document.querySelectorAll("ul");
var options = document.querySelector(".option");
var target; //=event.target; 선택한 li넘버. ul의 인덱스로 사용
var selectBtn = false;
var random = document.getElementById("random");

//선택된 btn의 인덱스 찾는 함수
function index(target){
    var hole = 0;
    while((target = target.previousSibling) != null){ //previousSibling 특정자식 찾기
        if(target.nodeType != 3){ //nodeType 3은 텍스트 
            hole += 1;
        }
    }
    return hole; //인덱스 함수에 hole값 반환
}
//눌려진 btn 있을 때 메뉴고르기 클릭 이벤트 실행
function menu(){
    if(selectBtn == true){
        //메뉴고르기 클릭시 해당 ul의 li 랜덤으로 배경색 변화
        var li = options.querySelectorAll("li");
        var randomMenu = Math.floor(Math.random() * li.length);
        li[randomMenu].style.background = "rgb(74, 71, 240)";
        //랜덤으로 선택된 메뉴 내용 alert
        alert(li[randomMenu].innerHTML + "드세요");
        selectBtn = false;
        console.log("메뉴 함수의 if");
    }else{
        console.log("메뉴 함수의 else");
        alert("음식 종류를 선택 후 눌러주세요");
    }
}
random.addEventListener("click", menu);

//btn 클릭 이벤트 반복문
for(var i = 0; i < btn.length; i++){
    btn[i].addEventListener("click",function(){
        options = document.querySelector(".option"); //options 재선언. 새로 클릭한 버튼에 .option 넣기위해
        if(options != null){ //클래스가 options인 btn이 있으면
            console.log("aa1 : " + options);
            target.style.background = "rgb(209, 238, 47)";
            target.style.color = "#000";
            options.classList.remove("option"); //제거
            options2 = document.querySelector(".option"); //눌려진 btn값 options2에 담음
            selectBtn = false;
            console.log(selectBtn);
        }else{ //클래스가 options인 btn이 없으면
            event.target.style.background = "rgb(74, 71, 240)";
            event.target.style.color = "#fff";
            ul[index(event.target)].className = "option"; //추가
            target = event.target;
            selectBtn = true;
            options = document.querySelector(".option");
            console.log(selectBtn);
            console.log("aaaa : " + options);
        }
    });
}







