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
			initValue: 405,
			value: 405,
		};
	}

	_onUpPress() {
		this.setState((prevState, props) => ({
			value: prevState.value + Constants.MOD_VALUE
		}), () => {
			const modified = (this.state.value !== this.state.initValue)
			this.props._modifiedTracker(this.props.id, modified);
		}); 
	}

	_onDownPress() {
		this.setState((prevState, props) => ({
			value: prevState.value - Constants.MOD_VALUE
		}), () => {
			const modified = (this.state.value !== this.state.initValue)
			this.props._modifiedTracker(this.props.id, modified);
		}); 
	}

	render() {
		return (
			<View style={styles.container}>
				<BtnCircle icon="arrow-up" _onPressButton={this._onUpPress.bind(this)} />
				<Circle title={this.props.data.name} value={this.props.data.value} />
				<BtnCircle icon="arrow-down" _onPressButton={this._onDownPress.bind(this)} />
			</View>
		);
	}
}
