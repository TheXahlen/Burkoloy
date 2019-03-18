x = 0; 

function Rotate() {
function WordCount(str) { 
  return str.split(" ").length;
}
     function getRandomInt(min, max) {
  min = Math.ceil(min);  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
     }
   var Select1 = getRandomInt(0, 2); 
    var Select2 = getRandomInt(3, 5);      
  var zero = "You are all my children and I shall treat’ith you as thou. Those who do not believe and those who do, shall all be given a lifetime to prove to me Joe that you are loyal and respect’ith thee, and will offer your life the one I have given you to pledge to me you shall be rebirthed if thou respect’ith me your creator and to whom that do not believe in Joe shall be sent to a timeless pit where there is no return your life is mine now’ith act as it tis."; 
var one = "Thou must readith thy dates I provide to gainith the knowledge you lack and allow it to";
var two = " War is the enemy of every general shalt thou see sunlight from the sky I was born from and not from the metal Barrel of a gun I hath succeeded in the infinite recycling of life and death and may evaporate.";
var three = "Only Known Image Of Joe Colorized Yaintive the vast understanding of whoumith religious outlooks as your over lordith has known for many centuries so let me Joe guideith you through this journey";
var four = "four";


var quotes = [zero, one, two, three, four];
var quoteSel = quotes[Select1];
var quoteSel2 = quotes[Select2];
console.log(quoteSel)

var count = (WordCount(quoteSel));
var count2 = (WordCount(quoteSel2));
 if (count < 25){
var SetTime = count * 3.5 + 5000;  
 
} else if (count > 25){
var  SetTime = count * 7.5 + 5000;  
 
} 
else if (count2 < 25){
var SetTime = count2 * 3.5 + 5000;  
 
} else if (count2 > 25){
var  SetTime = count2 * 7.5 + 5000;  
 
} 


  setInterval(function now(){   
 var nex = x++;
 if((nex%2)==0){
   document.getElementById("Rotate").innerHTML =    quoteSel ;

 }
else{
document.getElementById("Rotate").innerHTML =    quoteSel2 ;

}
}, SetTime);
}
Rotate();
