function openNav() {
    document.getElementById("myNav").style.display = "block";
}
function closeNav() {
    document.getElementById("myNav").style.display = "none";
}



window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var customSpace = document.getElementById("customSpace");
var custom = customSpace.offsetTop;
function myFunction() {
    if (window.pageYOffset >= custom) {
        navbar.classList.add("onScroll")
    } else {
        navbar.classList.remove("onScroll");
    }
}