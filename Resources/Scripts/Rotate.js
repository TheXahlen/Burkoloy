function Rotate() {
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ];
var testM = ["", "dsgdsgdsg", "dsgdsfds", "dsgdsfsdf", "dsfsdfds", "sdfsdfdsf", "dsfsdfsd", "dsfdsfdsfs", "dsfsdfds", "sdfsdfds", "dsfsdfds" ];
 var currentrand = document.getElementById("Rotate").textContent;

var rand = number[Math.floor(Math.random() * number.length)];
var testa = testM[rand];
document.getElementById("Rotate").innerHTML =    testa ;

  setTimeout(Rotate, 5200);
  if (rand == currentrand) {
  Rotate();
  }
}
Rotate();
