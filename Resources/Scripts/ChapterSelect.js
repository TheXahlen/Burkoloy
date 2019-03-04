function ChapterSelect() {

  var x = document.getElementById("myPsw");
  var currentVal = x.value; 

var fruits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", 
"10", "11", "12", "13", "14", "15", "16", "17",  ];
var beasts = ["ddsfdsfds", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", 
"ten", "eleven", "tweleve", "thirteen", "fourteen", "fiftheen", "sixteen", "seventeen"];
var CapitalBeasts = ["ddsfdsfds", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", 
"Ten", "Eleven", "Tweleve", "Thirteen", "Fourteen", "Fiftheen", "Sixteen", "Seventeen"];
var Collor = (beasts.indexOf(currentVal)); 
var Collor2 = (CapitalBeasts.indexOf(currentVal)); 
    var url = "https://xplosivex.github.io/Burkoloy/Chapters/Chapter" + currentVal + ".html";
   var url2 = "https://xplosivex.github.io/Burkoloy/Chapters/Chapter" + Collor + ".html";
    var url3 = "https://xplosivex.github.io/Burkoloy/Chapters/Chapter" + Collor2 + ".html";
if (n = beasts.includes(currentVal)) { 

location.href= url2;
}  
else if (n = CapitalBeasts.includes(currentVal)) {
location.href= url3;
}
else if (n = fruits.includes(currentVal)) {
location.href= url;
} else {
document.getElementById("demo").innerHTML =
    "Not A  Valid Chapter"
}
}

