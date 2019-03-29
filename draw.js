// Create a canvas element and initialize it.

function startCanvas() {
    myCanvas.start();
}

var myCanvas = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = window.innerWidth * .8;
        this.canvas.height = window.innerHeight * .8;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

//What four variables do you need to make your draw more dynamic?  Create them.
	var x = 0;
	var y = 0;
	var radius = 5;
	var color = 'red';

// Write a function called draw that will draw a single circle in the Canvas.
// creating a pen that moves with the mouse by drawing arcs (circles)
  function draw(){
    ctx = myCanvas.context;
    ctx.beginPath(); //from studentCanvas.html
    ctx.fillStyle = color; //default is red
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.fill(); //filled in circle
  }


	// mousemove event handler
	window.addEventListener('mousemove', function(e) {
  // to create a "pen" redefine x,y coordinates of point relative to page
		x = e.pageX;
		y = e.pageY;
    // console.log(e.pageX);
    // console.log(e.pageY);
    // calling draw function
		draw();
	})

  // touchmove event handler
  window.addEventListener('touchmove', function(e) {
    // rewrite coordinates of the touches
		x = e.touches[0].pageX;   // touches is list of all current touches on the screen
    y = e.touches[0].pageY;
		draw();
	})

	// keydown event handler
	window.addEventListener('keydown', function(e) {
    switch(e.key){   // switch statement like 'if' statement
			// change colors
			case "b":
        color="blue";
				break;
			case "g":
        color="green";
				break;
			case "r":
        color="red";
				break;
			case "y":
        color="yellow";
				break;
      // change radius of pensize
			case "ArrowUp":
				radius += 1;
				break;
			case "ArrowDown":
				if(radius > 1){
					radius -=1;
				}
				break;
      // clear canvas by using space bar
			case " ":
				ctx.clearRect(0, 0, myCanvas.canvas.width, myCanvas.canvas.height);
				break;
		}
	})

  window.addEventListener("orientationchange", function() {
    ctx.clearRect(0, 0, myCanvas.canvas.width, myCanvas.canvas.height);
  })


 // color picker
  function colorPicker(value){
      color=value;
    }
