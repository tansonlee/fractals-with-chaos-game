// a point cannot be chosen within the central Pi symbol

let points = [];
let current;
let prev;

let pi;
let piPixels = [];

const imgWidth = 130;
const imgHeight = 130;

function preload() {
	pi = loadImage("assets/pi.png");
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

	pi.resize(imgWidth, imgHeight);

	const piW = pi.width;
	const piH = pi.height;

	const xoff = width / 2 - pi.width / 2;
	const yoff = height / 2 - pi.height / 2;

	for (let x = 0; x < piW; x++) {
		for (let y = 0; y < piH; y++) {
			const pixel = pi.get(x, y);
			if (
				pixel[0] < 5 &&
				pixel[1] < 5 &&
				pixel[2] < 5 &&
				pixel[3] > 200
			) {
				piPixels.push(createVector(x + xoff, y + yoff));
			}
		}
	}
}

function draw() {
	strokeWeight(1);
	stroke(0);
	for (let i = 0; i < 1200; i++) {
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
	for (let i = 0; i < piPixels.length; i++) {
		if (piPixels[i].x == floorX && piPixels[i].y == floorY) {
			return true;
		}
	}
	return false;
};
