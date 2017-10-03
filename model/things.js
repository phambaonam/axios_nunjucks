class Thing {
	constructor(name, photo, type) {
		this.name = name
		this.photo = photo
		this.type = type
	}
}

class Things {
	constructor() {
		this.allthings = [
			new Thing('Bird', 'bird.png', 2),
			new Thing('Bus', 'bus.png', 1),
			new Thing('Car', 'car.png', 1),
			new Thing('Cat', 'cat.png', 2),
			new Thing('Seahorse', 'seahorse.png', 2),
			new Thing('Turtle', 'turtle.png', 2),
			new Thing('TV', 'Tv.png', 1)
		]
	}

	getThing(type) {
		let selectedOpt = parseInt(type)

		switch (selectedOpt) {
			case 1:
				return this.allthings.filter(thing => thing.type === 1)
			case 2:
				return this.allthings.filter(thing => thing.type === 2)
			case 3:
				return this.allthings
			default:
				return []
		}
	}
}

module.exports = new Things()


