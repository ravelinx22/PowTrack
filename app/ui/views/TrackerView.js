import React, { Component  } from 'react';
import { Text,View, Button } from 'react-native';
import styles from "../styles/TrackerView";

import TrackerRow from "../components/TrackerRow";

export default class TrackerView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			constant: 5
		};
	}

	render() {
		return (
			<View style={styles.circles_container}>
				<TrackerRow constant={this.state.constant} />
				<TrackerRow constant={this.state.constant} />
				<TrackerRow constant={this.state.constant} />
			</View>
		);
	}
}


