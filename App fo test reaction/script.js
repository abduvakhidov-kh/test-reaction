const SHAPE = ['circle', 'oval', 'rectangle', 'square', 'triangle-up', 'parallelogram', 'circle', 'oval', 'rectangle', 'square'];

var startTime = new Date().getTime();

var makeShapeVisible = function () {
	var shape =	document.getElementById('shape');
	
	var width = Math.random() * 200 + 50;
	var top = Math.random() * 1000; 
	var left = Math.random() * 1000;

	shape.style.backgroundColor = getRandomColor();

	shape.style.width = width + 'px';
	shape.style.top = top + 'px';
	shape.style.left = left + 'px';

	var randomizer = Math.random();
	if(randomizer < 0.6) {
		shape.style.borderRadius = "50%";
	} else {
		shape.style.borderRadius = "0%";
	} 
	shape.style.display = 'block';
	startTime = new Date().getTime();
};

setTimeout(makeShapeVisible, Math.random() * 2000);

document.getElementById('shape').onclick = function() {
	var shape =	document.getElementById('shape');

	shape.style.display = 'none';

	var finishTime = new Date().getTime();
	var reactionTime = (finishTime - startTime) / 1000;
	document.getElementById('timer').textContent = reactionTime + " seconds.";
	setTimeout(makeShapeVisible, Math.random() * 2000);
}




function getRandomColor() {
	var letter = "0123456789ABCDEF".split('');
	var color = "#";

	for (var i = 0; i < 6; i++) {
		color += letter[Math.floor(Math.random() * 16)];
	};
	return color
}