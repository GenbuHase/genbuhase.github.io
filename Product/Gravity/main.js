const cvs = DOM("#World");
const ctx = cvs.getContext("2d");

const FRAMESIZE = Math.min(DOM.width, DOM.height);
const PERFRAME = 50;

let substances = [];

class Formula {
	static get Gravity () {
		const G = 9.8;

		return [
			(v0 = 0, t = 0) => { return v0 - G * t }, //v = v₀ - gt
			(v0 = 0, t = 0) => { return v0 * t - (1 / 2) * G * Math.pow(t, 2) }, //y = v₀t - (1/2)gt²
			(y = 0) => { return -2 * G * y } //v² - v₀² = -2gy
		]
	}
}

class Substance {
	constructor (x = 0, y = 0, color = new Util.Color(255, 255, 255)) {
		this.tick = 0;

		this.x = x,
		this.y = y,
		this.color = color;
	}

	draw (dx = 0, dy = 0) {
		this.tick++;
		this.x += dx, this.y -= dy;
	}
}

class Ball extends Substance {
	constructor (x = 0, y = 0, radius = 0, color = new Util.Color(255)) {
		super(x, y, color);

		this.radius = radius;
	}

	draw (dx = 0, dy = 0) {
		super.draw(dx, dy);

		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
		ctx.closePath();

		ctx.fillStyle = this.color.toString();
		ctx.fill();
	}

	throw (v0 = 0, deg = 0) {
		let looper = setInterval(() => {
			let sec = this.tick / PERFRAME;
			let dx = v0 * Math.cos(DOM.util.degToRad(deg)),
				dy = Formula.Gravity[0](v0 * Math.sin(DOM.util.degToRad(deg)), sec);

			this.draw(dx, dy);

			if (this.x + this.radius > FRAMESIZE || this.y + this.radius > FRAMESIZE) {
				clearInterval(looper);
				return;
			}
		}, 1000 / PERFRAME);
	}
}

class Util {
	static get Color () {
		return class Color {
			constructor (r = 0, g = 0, b = 0) {
				this.r = r,
				this.g = g,
				this.b = b;
			}

			toString () {
				return `RGB(${this.r}, ${this.g}, ${this.b})`;
			}
		}
	}
}



window.addEventListener("DOMContentLoaded", () => {
	cvs.applyProperties({
		attributes: {
			width: FRAMESIZE,
			height: FRAMESIZE
		}
	});
});

setInterval(function looper () {
	ctx.fillStyle = new Util.Color().toString();
	ctx.fillRect(0, 0, FRAMESIZE, FRAMESIZE);

	let x = Math.random.randomInt(FRAMESIZE),
		y = Math.random.randomInt(FRAMESIZE),
		v0 = Math.random.randomInt(5, 30),
		deg = Math.random.randomInt(-180, 180),
		red = Math.random.randomInt(255),
		green = Math.random.randomInt(255),
		blue = Math.random.randomInt(255);

	let b = new Ball(x, y, 10, new Util.Color(red, green, blue));
		b.throw(v0, deg);
}, 1000 / PERFRAME);