// the chosen point cannot be exactly 2 poisitions away (cannot choose diagonal)

const numPoints = 4;
let points = [];
let pt;
let prev;

function setup() {
	createCanvas(400, 400);

	for (let i = 0; i < numPoints; i++) {
		const angle = i * (TWO_PI / numPoints);
		const x = width / 2 + (width / 2) * sin(angle);
		const y = height / 2 + (height / 2) * cos(angle);
		points.push(createVector(x, y));
	}

	pt = points[0];
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

		if (
			(chosenIndex === 0 && prevIndex !== 2) ||
			(chosenIndex === 1 && prevIndex !== 3) ||
			(chosenIndex === 2 && prevIndex !== 0) ||
			(chosenIndex === 3 && prevIndex !== 1)
		) {
			const midX = (pt.x + chosen.x) / 2;
			const midY = (pt.y + chosen.y) / 2;
			point(midX, midY);
			pt = createVector(midX, midY);
			prev = chosen;
		}
	}
}
