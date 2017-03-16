function showLinks() {
    var x = document.getElementById("myTopnav1");
    if (x.className === "nav_links") {
        x.className += " responsive";
    } else {
        x.className = "nav_links";
    }
}