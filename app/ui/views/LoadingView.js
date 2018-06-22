import React, { Component  } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

import styles from "../styles/LoadingView";

export default class LoadingView extends Component<{}> {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>P</Text>
				<ActivityIndicator size="large" color="#35478C" />
			</View>
		);
	}
}
