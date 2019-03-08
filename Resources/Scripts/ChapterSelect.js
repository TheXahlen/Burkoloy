function ChapterSelect() {

  var x = document.getElementById("myPsw");
  var currentVal = x.value; 
var zeros = [ "0" , "Zero" , "zero"];
var arraynumbers = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", 
"10", "11", "12", "13", "14"  ];
var arraylower = ["sajfdijafidsjifsd", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", 
"ten", "eleven", "tweleve", "thirteen", "fourteen"];
var arraycapital = ["asfjsajkfodasjkfoskf", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", 
"Ten", "Eleven", "Tweleve", "Thirteen", "Fourteen"];
var Collor = (arraylower.indexOf(currentVal)); 
var Collor2 = (arraycapital.indexOf(currentVal)); 
    var url1 = "https://xplosivex.github.io/Burkoloy/Chapters/Chapter" + currentVal + ".html";
   var url2 = "https://xplosivex.github.io/Burkoloy/Chapters/Chapter" + Collor + ".html";
   var url3 = "https://xplosivex.github.io/Burkoloy/Chapters/Chapter" + Collor2 + ".html";
  var url4 = "https://xplosivex.github.io/Burkoloy/";
  
 if (n = zeros.includes(currentVal)) {
 location.href= url4;
 }
else if (n = arraylower.includes(currentVal)) { 

location.href= url2;
}  
else if (n = arraycapital.includes(currentVal)) {
location.href= url3;
}
else if (n = arraynumbers.includes(currentVal)) {
location.href= url1;
} else {
   document.getElementById("demo").style.color = "Red";
document.getElementById("demo").style.textDecoration = "Underline";
  setTimeout(function(){ 
  document.getElementById("demo").style.color = "Black";
  document.getElementById("demo").style.textDecoration = "None";
  }, 500);
}
}

