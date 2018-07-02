var canvas = document.querySelector('canvas');
// canvas.width = window.innerWidth; //if i want a full screen canvas
// canvas.height = window.innerHeight;
//console.log(canvas);
var c = canvas.getContext('2d');
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
c.fillStyle = 'black';
c.fillRect(680, 190, 13, 100);
c.fillRect(5, 190, 13, 100);

///////////////////////////////////ball/////////////////////////////////////////
let x = 30;
let y = 10;
let dx = 5;
let dy = 5;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(20, 0, 660, 500);
  c.beginPath();
  c.arc(x, y, 10, 4, -3, Math.PI * 2, false);
  c.strokeStyle = 'white';
  if((x + 4) > 670 || (x - 4) < 26) {
    dx = -dx;
  };
  if((y + 4) > 500 || (y - 4) < 0) {
    dy = -dy;
  }
  c.stroke();
  x+= dx;
  y+= dy;
};
// }
animate();
