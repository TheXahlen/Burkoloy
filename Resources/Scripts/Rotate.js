function WordCount(str) { 
  return str.split(" ").length;
}
var currentrand = document.getElementById("Rotate").textContent;
function Rotate() {
var number = ["0", "1", "2", "3" ];
var zero = "You are all my children and I shall treat’ith you as thou. Those who do not believe and those who do, shall all be given a lifetime to prove to me Joe that you are loyal and respect’ith thee, and will offer your life the one I have given you to pledge to me you shall be rebirthed if thou respect’ith me your creator and to whom that do not believe in Joe shall be sent to a timeless pit where there is no return your life is mine now’ith act as it tis."; 
var one = "Thou must readith thy dates I provide to gainith the knowledge you lack and allow it to";
var two = " War is the enemy of every general shalt thou see sunlight from the sky I was born from and not from the metal Barrel of a gun I hath succeeded in the infinite recycling of life and death and may evaporate.";
var three = "Only Known Image Of Joe Colorized Yaintive the vast understanding of whoumith religious outlooks as your over lordith has known for many centuries so let me Joe guideith you through this journey";
var testM = [zero, one, two, three ]; 
var rand = number[Math.floor(Math.random() * number.length)];
var testa = testM[rand];
  document.getElementById("Rotate").innerHTML =    testa ;
  var timeplus = (WordCount(testa));
  if (timeplus < 30) {
    setTimeout(Rotate, 4000 - timeplus * 25 );
    document.getElementById("Rotate").style.width = timeplus * 1.5 +  530 + "px";
       } else if (timeplus > 30) {
         setTimeout(Rotate, timeplus * 25 + 4000);
         document.getElementById("Rotate").style.width = timeplus * 1.3 + 530 + "px";
       } 
}
Rotate();
