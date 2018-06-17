import React, { Component  } from 'react';
import { Text,View } from 'react-native';
import styles from "../styles/TrackerView";

export default class TrackerView extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.description}>
					Hello World
				</Text>
			</View>
		);
	}
}


