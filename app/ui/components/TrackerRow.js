import React, { Component  } from 'react';
import { View } from 'react-native';
import styles from "../styles/TrackerRow";

import Circle from "./Circle";
import BtnCircle from "./BtnCircle";

export default class TrackerRow extends Component<{}> {

	constructor(props) {
		super(props);
		this.state = {
			initValue: 405,
			value: 405,
			title: "Spoto Press"
		};
	}

	_onUpPress() {
		this.setState((prevState, props) => ({
			value: prevState.value + this.props.constant
		})); 
	}

	_onDownPress() {
		this.setState((prevState, props) => ({
			value: prevState.value - this.props.constant
		})); 
	}

	render() {
		return (
			<View style={styles.container}>
				<BtnCircle icon="arrow-up" _onPressButton={this._onUpPress.bind(this)} />
				<Circle title={this.state.title} value={this.state.value} />
				<BtnCircle icon="arrow-down" _onPressButton={this._onDownPress.bind(this)} />
			</View>
		);
	}
}
