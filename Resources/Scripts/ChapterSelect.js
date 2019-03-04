function ChapterSelect() {

  var x = document.getElementById("myPsw");
  var currentVal = x.value; 
  var url = "https://xplosivex.github.io/Burkoloy/Chapters/Chapter" + currentVal + ".html";
var fruits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", 
"10", "11", "12", "13", "14", "15", "16", "17",  ];
if (n = fruits.includes(currentVal)) {
location.href= url;
} else {
document.getElementById("demo").innerHTML =
    "<p> Not a chapter </p>" 
}
}
