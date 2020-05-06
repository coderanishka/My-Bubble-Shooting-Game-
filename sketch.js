var bullet;
var player;
var starGroup, bulletGroup;
var score = 0;
var life = 300;

function preload(){
  player1 = loadImage("assets/up.png");
  player2 = loadImage("assets/down.png");
  player3 = loadImage("assets/left.png");
  player4 = loadImage("assets/right.png");
  bubbleImg = loadImage("assets/bubble.jpg");
}

function setup(){
   createCanvas(800,800);

   player = createSprite(400,400,50,50);
   player.addImage(player1);
   player.scale = 2;
   bulletGroup=new Group();
   StarGroup = new Group();
}
 


function draw(){
  background(0);
  
 
  spawnStars();
  if(StarGroup.isTouching(player)){
    life--;
  }
  if(bulletGroup.isTouching(StarGroup)){
    score++;
    StarGroup.destroyEach();
   }
 
  if(life <= 0){
    textSize(80);
    fill(255);
    text("Game Over!",180,400);
    player.destroy();
  }
  
  
 
 
  textSize(30);
  text("Score : " + score, 30,40);
  text("Life : " + life, 30,80);
  drawSprites();
}


  

function keyReleased(){
  
  if(keyCode === UP_ARROW){
    player.addImage(player1)
    bullet = createSprite(400,400,5,30);
    bullet.velocityY = -9;
    bullet.shapeColor="purple";
    bulletGroup.add(bullet);
    
  }

  if(keyCode === DOWN_ARROW){
    player.addImage(player2)
    bullet = createSprite(400,400,5,30);
    bullet.velocityY = 9;
    bullet.shapeColor="purple";
    bulletGroup.add(bullet);
   
  }

  if(keyCode === RIGHT_ARROW){
    player.addImage(player4)
    bullet = createSprite(400,400,30,5);
    bullet.velocityX = 9;
    bullet.shapeColor="purple";
    bulletGroup.add(bullet);
  
  }

  if(keyCode === LEFT_ARROW){
    player.addImage(player3)
    bullet = createSprite(400,400,30,5);
    bullet.velocityX = -9;
    bullet.shapeColor="purple";
    bulletGroup.add(bullet);
  
  }
}


function spawnStars(){
if (frameCount%30===0){
  
   s = createSprite(random(100,700),random(100,700),50,50);
   s.velocityX = random(-5,5);
   s.velocityY = random(-5,5);
   s.addImage(bubbleImg);
   s.scale = 0.25;
   s.lifetime = 300;

   StarGroup.add(s);
 }
}


 
