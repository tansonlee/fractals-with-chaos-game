// point jumps 2/3 of the way to the next and the centre is a point

let points = [];
let pt;

function setup() {
	createCanvas(400, 400);

	points.push(createVector(0, 0));
	points.push(createVector(width, 0));
	points.push(createVector(0, height));
	points.push(createVector(width, height));
	points.push(createVector(200, 200));

	pt = points[0];
}

function draw() {
	for (let i = 0; i < 200; i++) {
		for (let i = 0; i < points.length; i++) {
			strokeWeight(1);
			stroke(0);
			point(points[i].x, points[i].y);
		}

		const next = random(points);
		const twoThirdsX = pt.x + (2 * (next.x - pt.x)) / 3; // ((pt.x + next.x) * 2) / 3;
		const twoThirdsY = pt.y + (2 * (next.y - pt.y)) / 3; // ((pt.x + next.x) * 2) / 3;
		point(twoThirdsX, twoThirdsY);
		pt = createVector(twoThirdsX, twoThirdsY);
	}
}
