import React from "react"

import { Redirect, Route, Switch } from "react-router"
import { Home, HowTo } from "../screens"

interface Props {}

const Routes: React.FC = (props: Props) => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/how-to" component={HowTo} />
			<Route exact component={() => <Redirect to="/" />} />
		</Switch>
	)
}

export default Routes
