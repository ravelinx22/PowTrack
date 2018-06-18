import React, { Component  } from 'react';
import { Text,View, Button } from 'react-native';
import styles from "../styles/TrackerView";

import Circle from "../components/Circle";
import BtnCircle from "../components/BtnCircle";

export default class TrackerView extends Component {
	render() {
		return (
				<View style={styles.circles_container}>
					<Circle />
					<Circle />
					<Circle />
					<BtnCircle/>
				</View>
		);
	}
}


