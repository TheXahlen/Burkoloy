var nex = (function () {
  var counter = 0;
  return function () {counter++; return counter;}
})();
function Rotate() {
  function getRandomizer(bottom, top) {
    return function() {
        return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
    }
}

function WordCount(str) { 
  return str.split(" ").length;
}

    var zero = "You are all my children and I shall treat’ith you as thou. Those who do not believe and those who do, shall all be given a lifetime to prove to me Joe that you are loyal and respect’ith thee, and will offer your life the one I have given you to pledge to me you shall be rebirthed if thou respect’ith me your creator and to whom that do not believe in Joe shall be sent to a timeless pit where there is no return your life is mine now’ith act as it tis."; 
var one = "Thou must readith thy dates I provide to gainith the knowledge you lack and allow it to";
var two = " War is the enemy of every general shalt thou see sunlight from the sky I was born from and not from the metal Barrel of a gun I hath succeeded in the infinite recycling of life and death and may evaporate.";
var three = "Only Known Image Of Joe Colorized Yaintive the vast understanding of whoumith religious outlooks as your over lordith has known for many centuries so let me Joe guideith you through this journey";
    function getRandomInt(min, max) {
  min = Math.ceil(min);  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
     }
  var sel1 = Math.floor(Math.random() * 2) + 2;
    var sel2 = Math.floor(Math.random() * 2) + 0;  
var quotes = [zero, one, two, three];
var quoteSel = quotes[sel1];
var quoteSel2 = quotes[sel2];
var Count1 = WordCount(quoteSel);
  var Count2 = WordCount(quoteSel2);
  console.log(Count1)
   console.log(Count2)
var nexxer = nex();
  console.log(nexxer)
 if((nexxer%2)==0) {
  if (Count1 < 15) {
   var SetTime = Count1 * 5.5 + 3000;
     var SetWidth = Count1 * 1.5 + 500 + "px";
    document.getElementById("Rotate").style.width = SetWidth; 
    document.getElementById("Rotate").innerHTML =    quoteSel ;
    
  }else if (Count1 > 15) {
   var SetTime = Count1 * 20.5 + 5000;
       var SetWidth = Count1 * 2.5 + 500 + "px";
    document.getElementById("Rotate").style.width = SetWidth;
    document.getElementById("Rotate").innerHTML =    quoteSel ;  
  }
 }
else {
 if (Count2 < 15) {
   var SetTime = Count2 * 5.5 + 3000;
    var SetWidth = Count2 * 1.5 + 500 + "px";
   document.getElementById("Rotate").style.width = SetWidth;  
   document.getElementById("Rotate").innerHTML =    quoteSel2 ;
    
  }else if (Count2 > 15) {
   var SetTime = Count2 * 20.5 + 5000;
      var SetWidth = Count2 * 2.5 + 500 + "px";
    document.getElementById("Rotate").style.width = SetWidth;
     document.getElementById("Rotate").innerHTML =    quoteSel2 ;
     
    
  }
} 
  console.log(SetTime)
  console.log(SetWidth)
 setTimeout(Rotate, SetTime); 
}
Rotate();


