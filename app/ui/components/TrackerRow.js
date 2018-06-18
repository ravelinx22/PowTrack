import React, { Component  } from 'react';
import { View } from 'react-native';
import styles from "../styles/TrackerRow";

import Circle from "./Circle";
import BtnCircle from "./BtnCircle";

export default class TrackerRow extends Component<{}> {

	_onUpPress() {
		console.log("Pressed up");
	}

	_onDownPress() {
		console.log("Pressed down");
	}

	render() {
		return (
			<View style={styles.container}>
				<BtnCircle icon="arrow-up" _onPressButton={this._onUpPress} />
				<Circle/>
				<BtnCircle icon="arrow-down" _onPressButton={this._onDownPress} />
			</View>
		);
	}
}
