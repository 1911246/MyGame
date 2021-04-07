var rocket, asteroid
var rocketImage, asteroidImage
var spaceBackground, spaceImage

function preload (){
  rocketImage = loadImage("Rocket.png");
  asteroidImage = loadImage("Asteroid.png");
  spaceImage = loadImage("space.jpeg");
}
function setup() {
  createCanvas(800,400);
  rocket = createSprite(200, 500, 50, 50);
  rocket.addImage("Rocket",rocketImage);
  rocket.scale = 0.1;

  spaceBackground = createSprite(600,600,300,300);
  spaceBackground.addImage("space",spaceImage)
  spaceBackground.scale = 1;
  spaceBackground.y = spaceBackground.height /2;
  spaceBackground.velocityY = 4;
}

function draw() {
  createCanvas(600, 600);
  background(255,255,255);  


  spawnAsteroid();

  
  if (keyCode === LEFT_ARROW) {
    rocket.velocityX = -3;
  }
  if (keyCode === RIGHT_ARROW) {
    rocket.velocityX = 3;
  }
   
  

  if (spaceBackground.y > 600){
    spaceBackground.y = spaceBackground.height/2;
  }
  drawSprites();
}

function spawnAsteroid() {
  if(frameCount % 60 === 0 ){
  asteroid = createSprite(600, 0, 50, 50);
  asteroid.addImage("asteroid",asteroidImage);
  asteroid.x = (random(100,600));
  asteroid.velocityY = 4;
  asteroid.lifetime = 600;
  asteroid.scale = 0.1;
}
}

