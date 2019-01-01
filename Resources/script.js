function openNav() {
    document.getElementById("myNav").style.display = "block";
}
function closeNav() {
    document.getElementById("myNav").style.display = "none";
}



window.onscroll = function() {myFunction()};
var title = document.getElementById("header-title");
var menu = document.getElementById("menu");
var customSpace = document.getElementById("customSpace");
var custom = customSpace.offsetTop;
function myFunction() {
    if (window.pageYOffset >= custom) {
        title.classList.add("onScroll")
        menu.classList.add("onScroll")
    } else {
        title.classList.remove("onScroll");
        menu.classList.remove("onScroll");
    }
}