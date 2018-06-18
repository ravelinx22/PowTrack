import React, { Component  } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styles from "../styles/Circle";

export default class Circle extends Component<{}> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.circle}>
				<Text style={styles.circle_title} adjustsFontSizeToFit={true}>
					{this.props.title}
				</Text>
				<Text style={styles.circle_text}>
					{this.props.value}
				</Text>
			</View>
		);
	}
}
