import { LatLngLiteral } from "leaflet"

const rndPoint = (): number => {
	let point: number = Math.random() * 100

	if (Math.random() > 0.25) {
		point = point * -1
	}

	return point
}

const generatePoints = (quantity: number): LatLngLiteral[] => {
	const positions: LatLngLiteral[] = []

	for (let i: number = 0; i < quantity; i++) {
		const gpsObject = {
			lat: (rndPoint() * rndPoint()) % 90,
			lng: (rndPoint() * rndPoint()) % 180
		}

		positions.push(gpsObject)
	}

	return positions
}

export { generatePoints }
