import React, { Component  } from 'react';
import { View } from 'react-native';
import styles from "../styles/TrackerRow";
import Constants from "../utils/Constants";

import Circle from "./Circle";
import BtnCircle from "./BtnCircle";

export default class TrackerRow extends Component<{}> {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	_onUpPress() {
		const newValue = Number(this.props.data) + Constants.MOD_VALUE;
		this.props._onDataChange(this.props.index, newValue);
	}

	_onDownPress() {
		const newValue = Number(this.props.data) - Constants.MOD_VALUE;
		this.props._onDataChange(this.props.index, newValue);
	}

	render() {
		return (
			<View style={styles.container}>
				<BtnCircle icon="arrow-up" _onPressButton={this._onUpPress.bind(this)} />
				<Circle title={this.props.title} value={this.props.data} />
				<BtnCircle icon="arrow-down" _onPressButton={this._onDownPress.bind(this)} />
			</View>
		);
	}
}
