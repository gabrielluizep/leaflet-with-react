import React from "react"
import { Link } from "react-router-dom"

const Home: React.FC = () => {
	return (
		<main
			style={{
				backgroundColor: "green"
			}}
		>
			<Link to="/how-to">
				<button>bora pro howto</button>
			</Link>
		</main>
	)
}

export default Home
