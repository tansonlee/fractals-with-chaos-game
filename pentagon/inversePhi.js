// points jump 1 / PHI to the next point

const numPoints = 5;
let points = [];
let pt;

function setup() {
	createCanvas(400, 400);

	for (let i = 0; i < numPoints; i++) {
		const angle = i * (TWO_PI / numPoints);
		const x = width / 2 + (width / 2) * sin(angle);
		const y = height / 2 + (height / 2) * cos(angle);
		points.push(createVector(x, y));
	}

	pt = points[0];
}

function draw() {
	for (let i = 0; i < 300; i++) {
		for (let i = 0; i < points.length; i++) {
			strokeWeight(1);
			stroke(0);
			point(points[i].x, points[i].y);
		}

		const next = random(points);
		const inversePhiX = pt.x + (next.x - pt.x) / 1.618034; // ((pt.x + next.x) * 2) / 3;
		const inversePhiY = pt.y + (next.y - pt.y) / 1.618034; // ((pt.x + next.x) * 2) / 3;
		point(inversePhiX, inversePhiY);
		pt = createVector(inversePhiX, inversePhiY);
	}
}
