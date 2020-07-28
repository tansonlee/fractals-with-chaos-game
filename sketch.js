const numPoints = 3;
let points = [];
let current;
let prev;

function setup() {
	createCanvas(400, 400);

	for (let i = 0; i < numPoints; i++) {
		const angle = i * (TWO_PI / numPoints);
		const x = width / 2 + (width / 2) * sin(angle);
		const y = height / 2 + (height / 2) * cos(angle);
		points.push(createVector(x, y));
	}

	current = points[0];
	prev = points[1];
}

function draw() {
	for (let i = 0; i < 100; i++) {
		for (let i = 0; i < points.length; i++) {
			strokeWeight(6);
			stroke(0);
			point(points[i].x, points[i].y);
		}

		const next = random(points);
		const midX = (current.x + next.x) / 2;
		const midY = (current.y + next.y) / 2;
		point(midX, midY);
		current = createVector(midX, midY);
	}
}
