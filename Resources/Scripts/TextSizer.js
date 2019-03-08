function Enlarge() {
  var x = document.getElementsByTagName("DIV")[0];

if (x.id == "Normal") { 
 document.getElementById("Sizeable").style.fontSize = "25px";
  document.getElementById("Sizeable2").style.fontSize = "25px";
  document.getElementById("Sizeable3").style.fontSize = "25px";
  document.getElementById("Sizeable4").style.fontSize = "25px";
 document.getElementById("Normal").id = "Big1";
} else if (x.id == "Big1")  {
document.getElementById("Sizeable").style.fontSize = "30px";
  document.getElementById("Sizeable2").style.fontSize = "30px";
  document.getElementById("Sizeable3").style.fontSize = "30px";
  document.getElementById("Sizeable4").style.fontSize = "30px";
document.getElementById("Big1").id = "Big2";
} else if (x.id == "Small2") {
document.getElementById("Sizeable").style.fontSize = "12px";
  document.getElementById("Sizeable2").style.fontSize = "12px";
  document.getElementById("Sizeable3").style.fontSize = "12px";
  document.getElementById("Sizeable4").style.fontSize = "12px";
document.getElementById("Small2").id = "Small1"; 
} else if  (x.id == "Small1")  {
document.getElementById("Sizeable").style.fontSize = "16px";
  document.getElementById("Sizeable2").style.fontSize = "16px";
  document.getElementById("Sizeable3").style.fontSize = "16px";
  document.getElementById("Sizeable4").style.fontSize = "16px";
document.getElementById("Small1").id = "Normal"; 
}
}
function Shrink() {
 var x = document.getElementsByTagName("DIV")[0];

if (x.id == "Normal") { 
 document.getElementById("Sizeable").style.fontSize = "12px";
  document.getElementById("Sizeable2").style.fontSize = "12px";
   document.getElementById("Sizeable3").style.fontSize = "12px";
   document.getElementById("Sizeable4").style.fontSize = "12px";
 document.getElementById("Normal").id = "Small1";
} else if (x.id == "Small1")  {
document.getElementById("Sizeable").style.fontSize = "10px";
  document.getElementById("Sizeable2").style.fontSize = "10px";
  document.getElementById("Sizeable3").style.fontSize = "10px";
  document.getElementById("Sizeable4").style.fontSize = "10px";
document.getElementById("Small1").id = "Small2";
} else if (x.id == "Big2") {
document.getElementById("Sizeable").style.fontSize = "25px";
  document.getElementById("Sizeable2").style.fontSize = "25px";
  document.getElementById("Sizeable3").style.fontSize = "25px";
  document.getElementById("Sizeable4").style.fontSize = "25px";
document.getElementById("Big2").id = "Big1"; 
} else if  (x.id == "Big1")  {
document.getElementById("Sizeable").style.fontSize = "16px";
  document.getElementById("Sizeable2").style.fontSize = "16px";
  document.getElementById("Sizeable3").style.fontSize = "16px";
  document.getElementById("Sizeable4").style.fontSize = "16px";
document.getElementById("Big1").id = "Normal"; 
}
}
function  Reset(){ 
   var current = document.getElementsByTagName("DIV")[0];
document.getElementById("Sizeable").style.fontSize = "16px";
  document.getElementById("Sizeable2").style.fontSize = "16px";
  document.getElementById("Sizeable3").style.fontSize = "16px";
  document.getElementById("Sizeable4").style.fontSize = "16px";
  document.getElementById(current).id = "Normal";
}
