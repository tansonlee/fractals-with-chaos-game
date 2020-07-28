// the chosen point cannot be 1 poisition away in the anti-clockwise direction

const numPoints = 4;
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
	strokeWeight(1);
	stroke(0);
	for (let i = 0; i < 300; i++) {
		for (let i = 0; i < points.length; i++) {
			point(points[i].x, points[i].y);
		}

		const chosen = random(points);

		const chosenIndex = points.indexOf(chosen);
		const prevIndex = points.indexOf(prev);

		if (chosenIndex !== prevIndex + 1) {
			if (!(prevIndex === numPoints - 1 && chosenIndex === 0)) {
				const midX = (current.x + chosen.x) / 2;
				const midY = (current.y + chosen.y) / 2;
				point(midX, midY);
				current = createVector(midX, midY);
				prev = chosen;
			}
		}
	}
}
