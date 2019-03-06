function Dynamic {
var url = window.location.href;
var numb = url.match(/\d/g);
numb = numb.join("");
document.getElementById(numb).className = "active";
}
