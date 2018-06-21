import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { createMaterialTopTabNavigator } from "react-navigation";
import TrackerView from "../views/TrackerView";
import { getFirst, getSecond } from "../utils/testData";


export default class App extends Component<{}> {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		const TabNavigator = createMaterialTopTabNavigator({
			"Big 3": props => <TrackerView {...props} data={getFirst()}/>,
			"Paused Big 3": props => <TrackerView {...props} data={getSecond()}/>,
		});

		return (
			<TabNavigator/>
		);
	}
}
