// a point cannot be chosen within the central Nike logo

let points = [];
let current;
let prev;

let nike;
let nikePixels = [];

const imgWidth = 160;
const imgHeight = 60;

function preload() {
	nike = loadImage("assets/nike.png");
}

function setup() {
	createCanvas(400, 400);

	imageMode(CENTER);

	points.push(createVector(0, 0));
	points.push(createVector(width, 0));
	points.push(createVector(0, height));
	points.push(createVector(width, height));

	current = points[0];
	prev = points[1];

	nike.resize(imgWidth, imgHeight);

	const nikeW = nike.width;
	const nikeH = nike.height;

	const xoff = width / 2 - nike.width / 2;
	const yoff = height / 2 - nike.height / 2;

	for (let x = 0; x < nikeW; x++) {
		for (let y = 0; y < nikeH; y++) {
			const pixel = nike.get(x, y);
			if (
				pixel[0] < 5 &&
				pixel[1] < 5 &&
				pixel[2] < 5 &&
				pixel[3] > 200
			) {
				nikePixels.push(createVector(x + xoff, y + yoff));
			}
		}
	}
}

function draw() {
	strokeWeight(1);
	stroke(0);
	for (let i = 0; i < 1000; i++) {
		for (let i = 0; i < points.length; i++) {
			point(points[i].x, points[i].y);
		}

		const next = random(points);

		const midX = round((current.x + next.x) / 2);
		const midY = round((current.y + next.y) / 2);

		if (!contains(midX, midY)) {
			point(midX, midY);
			current = createVector(midX, midY);
		}
	}
}

const contains = (x, y) => {
	const floorX = floor(x);
	const floorY = floor(y);
	for (let i = 0; i < nikePixels.length; i++) {
		if (nikePixels[i].x == floorX && nikePixels[i].y == floorY) {
			return true;
		}
	}
	return false;
};
