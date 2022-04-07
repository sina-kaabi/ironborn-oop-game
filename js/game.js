

/*
info:

- shape
- position

*/




class Game {
    constructor(create, draw){
        this.player = null;
        this.create = create;
        this.draw = draw;
        //this.intervalId = null;
    }

    start(){
        this.player = new Player();
        this.player.domElement = this.create("player"); //create a dom element with the class "player"
        this.draw(this.player);
        
        this.obstacle = new Obstacle();
        this.obstacle.domElement = this.create("obstacle");
        this.draw(this.obstacle);

        setInterval( () => {
            //move obstacle
             
    this.obstacle.moveDown();
    this.draw(this.obstacle);
}, 100)}
        
        /*var myGameArea = {
            canvas : document.createElement("canvas"),
            start : function() {
              this.canvas.width = 480;
              this.canvas.height = 270;
              this.context = this.canvas.getContext("2d");
              document.body.insertBefore(this.canvas, document.body.childNodes[0]);
              this.frameNo = 0;       
              this.interval = setInterval(updateGameArea, 20);
            },
            clear : function() {
              this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            },
            stop : function() {
              clearInterval(this.interval);
            }
          }
          
          function everyinterval(n) {
            if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
            return false;
          }*/

//create and draw an obstacle

       
    


    movePlayer(direction){
        if(direction === "left"){
            this.player.moveLeft();
        } else if (direction === "right"){
            this.player.moveRight();
        }
        this.draw(this.player);
    }
}


class Player {
    constructor() {
        this.positionX = 47;
        this.positionY = 0;
        this.domElement = null;
    }

    moveLeft() {
        this.positionX--;
      
        
    }

    moveRight() {
        this.positionX++;
        
    }
}

class Obstacle {
    constructor(){
        this.positionX = 50;
        this.positionY = 99;
        this.domElement = null;
    }
    moveDown() {
        this.positionY--;
    }
}

