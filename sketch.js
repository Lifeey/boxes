var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
rect1= createSprite(100, 550, 150,20);
rect1.shapeColor = "pink"
rect2= createSprite(270, 550, 150,20);
rect2.shapeColor = "blue"
rect3= createSprite(440, 550, 150,20);
rect3.shapeColor = "purple"
rect4= createSprite(610, 550, 150,20);
rect4.shapeColor = "red"
square1 = createSprite(random(20,750),100,50,50);
square1.velocityX = 2
square1.velocityY = 3
music.play();

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites(); 
square1.bounceOff(edges[0])
square1.bounceOff(edges[1])
square1.bounceOff(edges[2])

    //add condition to check if box touching surface and make it box
if(square1.isTouching(rect1)){
    square1.shapeColor= "pink"
    square1.velocityX=0
    square1.velocityY=0
    music.stop();
}
if(square1.isTouching(rect2)){
    square1.shapeColor= "blue"
    square1.velocityX=0
    square1.velocityY=0
    music.stop();
}
if(square1.isTouching(rect3)){
    square1.shapeColor= "purple"
    square1.velocityX=0
    square1.velocityY=0
    music.stop();
}
if(square1.isTouching(rect4)){
    square1.shapeColor= "red"
    square1.velocityX=0
    square1.velocityY=0
    music.stop();
}
   
   
   
   
    rect1.display();
    rect2.display();
    rect3.display();
    rect4.display();
    square1.display();
   }
