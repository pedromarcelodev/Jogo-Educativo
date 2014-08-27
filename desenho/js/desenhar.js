var canvasDiv = document.getElementById('paint');
canvas = document.createElement('canvas');
canvas.setAttribute('width', 740);
canvas.setAttribute('height', 440);
canvas.setAttribute('id', 'canvas');
canvas.setAttribute('class', 'area-pincel');
canvasDiv.appendChild(canvas);

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var lastX;
var lastY;
var strokeColor = "#000";
var strokeWidth = 5;
var mouseX;
var mouseY;
var canvasOffset = $("#canvas").offset();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;
var isMouseDown = false;
var mode = "pincel";

function handleMouseDown(e){
	mouseX = parseInt(e.clientX - offsetX);
	mouseY = parseInt(e.clientY - offsetY);

	// Put your mousedown stuff here
	lastX = mouseX;
	lastY = mouseY;
	isMouseDown = true;
}

function handleMouseUp(e){
	mouseX = parseInt(e.clientX - offsetX);
	mouseY = parseInt(e.clientY - offsetY);

	// Put your mouseup stuff here
	isMouseDown = false;
}

function handleMouseOut(e){
	mouseX = parseInt(e.clientX-offsetX);
	mouseY = parseInt(e.clientY-offsetY);

	// Put your mouseOut stuff here
	isMouseDown = false;
}

function handleMouseMove(e){
	mouseX = parseInt(e.clientX - offsetX);
	mouseY = parseInt(e.clientY - offsetY);

	// Put your mousemove stuff here
	if(isMouseDown){
		context.beginPath();
		if(mode == "pincel"){
			context.lineJoin = "round";
			context.lineWidth = 5;
			context.strokeStyle = strokeColor;
			context.globalCompositeOperation = "source-over";
			context.moveTo(lastX,lastY);
			context.lineTo(mouseX,mouseY);
			context.stroke();     
		}else{
			context.lineWidth = 350;
			context.globalCompositeOperation = "destination-out";
			context.arc(lastX, lastY, 5, 0, Math.PI * 2, false);
			context.fill();
		}
		lastX = mouseX;
		lastY = mouseY;
	}
}

$("#canvas").mousedown(function(e){handleMouseDown(e);});
$("#canvas").mousemove(function(e){handleMouseMove(e);});
$("#canvas").mouseup(function(e){handleMouseUp(e);});
$("#canvas").mouseout(function(e){handleMouseOut(e);});