import React, { Component  } from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from "react-navigation";
import { getFirst, getSecond } from "../utils/testData";

import TrackerView from "./TrackerView";
import SettingsView from "../views/SettingsView";

import styles from "../styles/HomeView";

export default class HomeView extends Component<{}> {

	constructor(props) {
		super(props);
		this.state = {
			configuring: false
		}
	}

	render() {
		const TabNavigator = createMaterialTopTabNavigator({
			"Big 3": props => <TrackerView {...props} data={getFirst()}/>,
			"Paused Big 3": props => <TrackerView {...props} data={getSecond()}/>,
			"Settings": props => <SettingsView {...props} _onLogout={this.props._onLogout}/>
		});

		if(this.state.configuring) {
			return(
				<View>
				</View>
			);
		} else {
			return <TabNavigator/>
		}
	}
}

