// point jumps 2/3 of the way to the next and the mid point of the corners are points

let points = [];
let pt;

function setup() {
	createCanvas(400, 400);

	// corners
	points.push(createVector(0, 0));
	points.push(createVector(width, 0));
	points.push(createVector(0, height));
	points.push(createVector(width, height));

	// midpoints
	points.push(createVector(200, 0));
	points.push(createVector(width, 200));
	points.push(createVector(200, height));
	points.push(createVector(0, 200));

	pt = points[0];
}

function draw() {
	strokeWeight(1);
	stroke(0);
	for (let i = 0; i < 1000; i++) {
		for (let i = 0; i < points.length; i++) {
			point(points[i].x, points[i].y);
		}

		const next = random(points);
		const twoThirdsX = pt.x + (2 * (next.x - pt.x)) / 3; // ((pt.x + next.x) * 2) / 3;
		const twoThirdsY = pt.y + (2 * (next.y - pt.y)) / 3; // ((pt.x + next.x) * 2) / 3;
		point(twoThirdsX, twoThirdsY);
		pt = createVector(twoThirdsX, twoThirdsY);
	}
}
