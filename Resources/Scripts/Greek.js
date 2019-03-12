

function cycle() {
    background("black");
function draw1(){
  var screen1 = createSprite(200,0, 100, 100);
screen1.setAnimation("Greek");
screen1.x = 200;
screen1.y = 0;
drawSprites();
}
setTimeout(draw1, 650);
function draw2(){
var fullwhite1 = createSprite(200,200,100,100);
fullwhite1.setAnimation("animation_1");
fullwhite1.scale = 100;
drawSprites();



}
setTimeout(draw2, 1000);
 function draw3(){
var screen2 = createSprite(200,0, 100, 100);
screen2.setAnimation("Greek");
screen2.x = 200;
screen2.y = 100;
drawSprites();  
}
setTimeout(draw3, 1500);
function draw4(){
var fullwhite2 = createSprite(200,200,100,100);
fullwhite2.setAnimation("animation_1");
fullwhite2.scale = 100;
drawSprites();
}
setTimeout(draw4, 2000);
function draw5(){
var screen3 = createSprite(200,0, 100, 100);
screen3.setAnimation("Greek");
screen3.x = 200;
screen3.y = 200;
drawSprites();  
}
setTimeout(draw5, 2500);
function draw6(){
var fullwhite3 = createSprite(200,200,100,100);
fullwhite3.setAnimation("animation_1");
fullwhite3.scale = 100;
drawSprites();

}
setTimeout(draw6, 3000);
function draw7() {
var screen4 = createSprite(200,0, 100, 100);
screen4.setAnimation("Greek");
screen4.x = 200;
screen4.y = 300;
drawSprites();  
}
setTimeout(draw7, 3500);
function draw8(){
var fullwhite4 = createSprite(200,200,100,100);
fullwhite4.setAnimation("animation_1");
fullwhite4.scale = 100;
drawSprites();
}
setTimeout(draw8, 4000);
function draw9(){
var screen5 = createSprite(200,0, 100, 100);
screen5.setAnimation("Greek");
screen5.x = 200;
screen5.y = 400;
drawSprites();  
}
setTimeout(draw9, 4500);
function draw10(){
var screen6 = createSprite(200,0, 100, 100);
screen6.setAnimation("Boom");
screen6.x = 200;
screen6.y = 200;
screen6.scale = 3;
drawSprites();  
}
setTimeout(draw10, 5000);
function draw11(){
var fullwhite5 = createSprite(200,200,100,100);
fullwhite5.setAnimation("animation_1");
fullwhite5.scale = 100;
drawSprites();
}
setTimeout(draw11, 5200);
   setTimeout(cycle, 5200);
}

cycle();
