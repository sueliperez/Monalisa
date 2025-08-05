function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  background('#C95E3E66');//fundo
  
  
  fill('#DDD09A')
  circle(200,200,300)//rosto
  
  fill('#554515')
  
  triangle(53,117,342,118,196,9);
  fill('hsl(0,28%,93%)')
  circle(149,164,60)//olho esquerdo
  circle(253,164,60)//olho direito
  
 fill('red')
   ellipse(200,249,157,25,25);//boca
  
fill('#C89D19')
  circle(198,193,30);//nariz
 
  fill('#DDD09A')

 ellipse(51, 200, 40, 60);
  ellipse(347, 200, 40, 60);
  
   fill('rgb(21,18,18)')
  
  //circle(149,170,20);//pupila
  //circle(251, 170,20);//pupila
  
  line(119,132,176,132); //sobrancelha esquerda
  line(233,132,283,132); //sobrancelha direita
  
  olhoX = map(mouseX,0,400,135,170);
  olhoY = map(mouseY,0,400,135,170);
  
  
  circle(olhoX,olhoY,20);//nova pupila esq
  circle(olhoX+100,olhoY,20);//nova pupila direita
  
  
  if (mouseIsPressed){
        console.log(mouseX,mouseY);
    }
}