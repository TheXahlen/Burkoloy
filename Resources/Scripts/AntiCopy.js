function AntiCopy(){
document.getElementById("Copy").style.opacity = "0.0";
document.getElementById("Copied").innerHTML = "Do Not Copy";
document.getElementById("Copied").style.fontSize = "100px";
document.getElementById("Copied").style.paddingbottom = "1000px";
  setTimeout(function(){
  document.getElementById("Copied").style.paddingbottom = "0px";
  document.getElementById("Copied").style.fontSize = "0px"
document.getElementById("Copy").style.opacity = "1.0";
  document.getElementById("Copied").innerHTML = "";
  }, 500);
  
}
var z = 0;
document.addEventListener('copy', function(e) {
  AntiCopy();
  var x = z++;
  
  console.log(x)
  if (x == 0) {
  var Copy = "Please Don't Copy Or Reproduce This Content";  
  }
  if (x == 1) {
  var Copy = "Please Do Not Copy This Material";
  }
if (x == 2) {
  var Copy = "Don't Make Me Ask Again.";
  }
  if (x == 3) {
  var Copy = "Joe Will Smite You";
  }
  if (x > 3) {
  var Copy = "STOP FUCKING COPYING THIS";
  }
  
  e.clipboardData.setData('text/plain', Copy);
  e.preventDefault();
});
