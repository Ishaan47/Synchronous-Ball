var ball;
var position,database;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database();
    var locref = database.ref("ball/position");
    locref.on("value",readOp,showError);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-10,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(10,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-10);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+10);
    }
    drawSprites();
}

function changePosition(x,y){
   // ball.x = ball.x + x;
   // ball.y = ball.y + y;
   database.ref("ball/position").set({x:ball.x+x,y:ball.y+y});
}

function readOp(data){
  position = data.val();
  ball.x = position.x;  
  ball.y = position.y; 
}

function showError(){
console.log("Error");



}




