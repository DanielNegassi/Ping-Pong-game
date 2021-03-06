var canvas = document.querySelector('canvas');
// canvas.width = window.innerWidth; //if i want a full screen canvas
// canvas.height = window.innerHeight;
//console.log(canvas);
var c = canvas.getContext('2d');
const canvasWidth = 700;
const canvasHeight = 500;
//c.fillRect(x, y, width, height);
//c.fillStyle = 'blue'; to change the color of the canvas


//to draw lines//
//c.beginPath();
//c.moveTo(x,y); starting coordinates
//c.lineT(x,y); ending coordinates
//c.strokeStyle = 'color';
//c.stroke();


//for circles/////
//c.arc(x: Int, y: Int, radius: Int, startAngle: float, endAngle: float , drawCounterclockwise : Bool(false));
//c.stroke() to draw or c.fill() to fill with a color

///////////////////////////////ping-pong table//////////////////////////////////
// c.fillStyle = 'grey';
// c.fillRect(250, 100, 900, 500);
// c.fillStyle = 'black';
// c.fillRect(680, 190, 13, 100);
// c.fillRect(5, 190, 13, 100);

/////////////////////////////////players////////////////////////////////////////

class Player {
  constructor(name, x, y, width, height,score) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.score = score;
  }

  draw() {
    c.fillStyle = 'white';
    c.fillRect(this.x, this.y, this.width, this.height);
  }
};

const player1 = new Player('player1', 5, 190, 13, 100,0);
const player2 = new Player('player2', 680, 190, 13, 100,0);

////////////////////////Update function////////////////////////
function updatePlayers() {
  player1.draw();
  player2.draw();
};
updatePlayers();
//////////////////moving players/////////////////////////////////////////
const movePlayers = (e) => {
  if (e.keyCode == 87) { // w
    if(player1.y > 0 || (player1.y + player1.height) < canvasHeight)
    player1.y -= 60;
  }
  if (e.keyCode == 83) { // s
    player1.y += 60;
  }
  if (e.keyCode == 38) { //UP
    player2.y -= 60;
  }
  if (e.keyCode == 40) { //down
    player2.y += 60;
  }
  canvas.width = canvas.width;
  updatePlayers();
};
document.onkeydown = movePlayers;

///////////////////////////////////ball/////////////////////////////////////////

let ballx = 30;
let bally = 10;
let dx = 5;
let dy = 5;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvasWidth, canvasHeight);
  updatePlayers();
  c.beginPath();
  c.arc(ballx, bally, 10, 4, -3, Math.PI * 2, false);
  c.strokeStyle = 'white';
  if ((ballx<0) || (ballx>canvasWidth)) {
    alert('Game Over');
  }
  else if (ballx <= (player1.x + player1.width)) {
    if ((bally >= player1.y) && (bally <= (player1.y + player1.height)))
      dx = -dx;
      player1.score++;
  };
  if (ballx >= (player2.x)) {
    if ((bally >= player2.y) && (bally <= (player2.y + player2.height)))
      dx = -dx;
      player2.score++;
  }
  if ((bally + 4) >= canvasHeight || (bally - 4) <= 0) {
    dy = -dy;
  }
  c.stroke();
  ballx += dx;
  bally += dy;
};
animate();
//////////////////////////////////////timer/////////////////////////////////////
let time = 0;
const timePassing = () => {
		setInterval(function () {
		time++;
		$('#timer').text('Time: ' + time + ' s');
    // $('#player1Score').text('Player1: ' + player1.score );
    // $('#player2Score').text('Player2: ' + player2.score );
  }, 1*1000);
  };
timePassing();
/////////////////////////////////////increase score/////////////////////////////
const updateScore = () => {
		setInterval(function () {
    $('#player1Score').text('Player1: ' + player1.score );
    $('#player2Score').text('Player2: ' + player2.score );
    if (player1.score >= 5){
      alert('Player 1 Won !');
    } else if (player2.score >= 5){
      alert('Player 2 Won !')
    };
  }, 1*1000);
  };
updateScore ();
/////////////////////////////////////increaseBallSpeed//////////////////////////
const increaseBallSpeed = () => {
  setInterval(function () {
  dx+=1;dy+=1;
}, 3*1000);
};
increaseBallSpeed();
