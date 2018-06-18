import React, { Component  } from 'react';
import { Text,View, Button } from 'react-native';
import styles from "../styles/TrackerView";

import TrackerRow from "../components/TrackerRow";

export default class TrackerView extends Component {
	render() {
		return (
				<View style={styles.circles_container}>
					<TrackerRow/>
					<TrackerRow/>
					<TrackerRow/>
				</View>
		);
	}
}


