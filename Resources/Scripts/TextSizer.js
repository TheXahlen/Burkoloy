function Enlarge() {
  var x = document.getElementsByTagName("DIV")[0];

if (x.id == "Normal") { 
 var g = document.getElementsByClassName("Sizeable");
  var i;
  for (i = 0; i < g.length; i++) {
    g[i].style.fontSize = "25px";
 document.getElementById("Normal").id = "Big1";
 }
} else if (x.id == "Big1")  {
var g = document.getElementsByClassName("Sizeable");
  var i;
  for (i = 0; i < g.length; i++) {
    g[i].style.fontSize = "30px";
document.getElementById("Big1").id = "Big2";
}
} else if (x.id == "Small2") {
var g = document.getElementsByClassName("Sizeable");
  var i;
  for (i = 0; i < g.length; i++) {
    g[i].style.fontSize = "12px";
document.getElementById("Small2").id = "Small1"; 
}
} else if  (x.id == "Small1")  {
 var g = document.getElementsByClassName("Sizeable");
  var i;
  for (i = 0; i < g.length; i++) {
    g[i].style.fontSize = "16px";
document.getElementById("Small1").id = "Normal";
}
}
}
function Shrink() {
 var x = document.getElementsByTagName("DIV")[0];

if (x.id == "Normal") { 
 var g = document.getElementsByClassName("Sizeable");
  var i;
  for (i = 0; i < g.length; i++) {
    g[i].style.fontSize = "12px";
    
 document.getElementById("Normal").id = "Small1";
 }
} else if (x.id == "Small1")  {
var g = document.getElementsByClassName("Sizeable");
  var i;
  for (i = 0; i < g.length; i++) {
    g[i].style.fontSize = "10px";
document.getElementById("Small1").id = "Small2";
}
} else if (x.id == "Big2") {
var g = document.getElementsByClassName("Sizeable");
  var i;
  for (i = 0; i < g.length; i++) {
    g[i].style.fontSize = "25px";
document.getElementById("Big2").id = "Big1"; 
}
} else if  (x.id == "Big1")  {
var g = document.getElementsByClassName("Sizeable");
  var i;
  for (i = 0; i < g.length; i++) {
    g[i].style.fontSize = "16px";
document.getElementById("Big1").id = "Normal"; 
}
}
}
function  Reset(){
  var now = document.getElementsByTagName("DIV")[0];
  var current = now.id;
var g = document.getElementsByClassName("Sizeable");
  var i;
  for (i = 0; i < g.length; i++) {
    g[i].style.fontSize = "16px";
document.getElementById(current).id = "Normal";
}
}
