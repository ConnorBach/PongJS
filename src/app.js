/* Globals */
var canv = document.getElementById("pong_canvas");
var ctx = canv.getContext("2d");
GAME_OVER = false;

/* Define Classes */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Rectangle {
    constructor(height, width, pos, speed) {
        this.height = height;
        this.width  = width;
        this.pos    = pos;
        this.speed  = speed; 
    }
}

class Target {
    constructor(height, width, pos, alive) {
        this.height = height;
        this.width  = width;
        this.pos    = pos;
        this.alive  = alive;
    }
}

class Ball {
    constructor(radius, pos, speed) {
        this.radius = radius;
        this.pos    = pos;
        this.speed  = speed; 
    }
}

/* Functions */
var drawRect = function(rect) {
    /* Get corners */
    var c1 = rect.pos.x - (rect.width / 2) + (rect.height / 2);
    var c2 = rect.pos.x + (rect.width / 2) + (rect.height / 2);
    var c3 = rect.pos.x - (rect.width / 2) - (rect.height / 2);
    var c4 = rect.pos.x + (rect.width / 2) - (rect.height / 2);
    
    /* Draw rect */
    ctx.rect(c1, c2, c3, c4);
    ctx.fillStyle = "green";
    ctx.fill();
}

var drawCirc = function(ball) {
    ctx.arc(ball.pos.x, ball.pos.y, ball.radius, 0, 2*3.14, false);
    ctx.fillStyle = "blue";
    ctx.fill();
}

/* Create objects */
var player = new Rectangle(200, 200, new Point(480, 250), new Point(0,0));
var ball = new Ball(100, 250, 250, new Point(10, 10));

targets = []
for(var i = 0; i < 8; i++) {
    targets.push(new Target(50, 100, new Point(20*i, 50), true));
}

/* Game loop */
while(!GAME_OVER) {
    /* Get input */
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 37) {
            player.speed = 5;
        }
        else if (event.keyCode == 39) {
            player.speed = -5;
        }
    });
    /* Update Positions */
    ball.pos.x += ball.speed.x;
    ball.pos.y += ball.speed.y;
    player.pos.x += player.speed.x;

    /* Check Collisions */
    /* Update Canvas */
    drawRect(player);
    drawCirc(ball);
    console.log("here");
}