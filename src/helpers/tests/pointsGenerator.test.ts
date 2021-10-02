import { LatLngLiteral } from "leaflet"

import { generatePoints } from "../"

const hundredPoints: LatLngLiteral[] = generatePoints(1)

test("Has the expected points in the array", (): void => {
	expect(hundredPoints.length).toBe(1)
})

test("The point have the correct types", (): void => {
	for (let point of hundredPoints) {
		expect(typeof point.lat).toEqual("number")
		expect(typeof point.lng).toEqual("number")
	}
})
