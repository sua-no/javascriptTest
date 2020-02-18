var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDay();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
target = document.getElementById("time");
function time() {
    target.innerHTML += date;
}
time();
