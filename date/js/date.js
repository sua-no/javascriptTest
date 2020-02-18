target = document.getElementById("time");

setInterval(function() {
    setInterval(function() {
        var now = new Date();
        target.innerHTML = now.toString();
    }, 1000);
});
