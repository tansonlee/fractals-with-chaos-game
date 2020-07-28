const numPoints = 4;
let points = [];
let current;
let prev;

let treble;
let treblePixels = [];

const imgWidth = 68;
const imgHeight = 180;

function preload() {
	treble = loadImage("assets/treble-clef.png");
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

	treble.resize(imgWidth, imgHeight);

	const trebleW = treble.width;
	const trebleH = treble.height;

	const xoff = width / 2 - treble.width / 2;
	const yoff = height / 2 - treble.height / 2;

	for (let x = 0; x < trebleW; x++) {
		for (let y = 0; y < trebleH; y++) {
			const pixel = treble.get(x, y);
			if (
				pixel[0] < 5 &&
				pixel[1] < 5 &&
				pixel[2] < 5 &&
				pixel[3] > 200
			) {
				treblePixels.push(createVector(x + xoff, y + yoff));
			}
		}
	}

	noFill();

	background(200);
}

function draw() {
	strokeWeight(1);
	stroke(0, 100);
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
	for (let i = 0; i < treblePixels.length; i++) {
		if (treblePixels[i].x == floorX && treblePixels[i].y == floorY) {
			return true;
		}
	}
	return false;
};
