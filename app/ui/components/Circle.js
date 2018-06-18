import React, { Component  } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styles from "../styles/Circle";

export default class Circle extends Component<{}> {
	render() {
		return (
			<View style={styles.circle}>
				<Text style={styles.circle_title} adjustsFontSizeToFit={true}>
					Paused Deadlift
				</Text>
				<Text style={styles.circle_text}>
					405	
				</Text>
			</View>
		);
	}
}
