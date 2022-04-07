

/*
info:

- shape
- position

*/





class Game {
    constructor(create, draw){
        this.time = 0;
        this.player = null;
        this.obstacles = [];
        this.create = create;
        this.draw = draw;
    }

    start(){
        // create & draw player
        this.player = new Player();
        this.player.domElement = this.create("player"); //create a dom element with the class "player"
        this.draw(this.player);

        setInterval( () => {
            
            // move obstacles
            this.obstacles.forEach( (obstacle) => {
                obstacle.moveDown();
                this.draw(obstacle);
            });

            // create & draw an obstacles
            if(this.time % 10 === 0){
                const newObstacle = new Obstacle();
                newObstacle.domElement = this.create("obstacle");
                this.obstacles.push(newObstacle);

                // this.draw(this.obstacles);
            }

            this.time++;

        }, 200);



        
    }

    
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
        this.positionX = 50;
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
        this.positionY = 100;
        this.domElement = null;
    }
    moveDown() {
        this.positionY--;
    }
}

