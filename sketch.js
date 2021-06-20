var ball;
var database;
var position;
var dbBall;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,20,20);
    ball.shapeColor = "red";

    dbBall = database.ref('ball/position');
    dbBall.on("value", readPosition);
    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,5);
    }
    drawSprites();
}

function readPosition(data){
position = data.val();
ball.x = position.x;
ball.y = position.y;
}

function writePosition(x,y){
   database.ref('ball/position').set({
   x:position.x + x, 
   y:position.y + y,
   });
}
