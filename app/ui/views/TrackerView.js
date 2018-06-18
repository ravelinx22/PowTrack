import React, { Component  } from 'react';
import { Text,View, Button, ScrollView } from 'react-native';
import { getStyles } from "../styles/TrackerView";
import Constants from "../utils/Constants";

import TrackerRow from "../components/TrackerRow";

export default class TrackerView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			constant: Constants.MOD_VALUE,
			btnSaveShown: true,
		};

		this.state[Constants.MODIFIED_FIRST_TRACKER] = false;
		this.state[Constants.MODIFIED_SECOND_TRACKER] = false;
		this.state[Constants.MODIFIED_THIRD_TRACKER] = false;
	}

	_modifiedTracker(tracker, value) {
		if(this.state[tracker] !== value) {
			var newState = {};
			newState[tracker]  = value;
			this.setState(newState);
		}
	}

	render() {
		var displayBtnSave = (this.state[Constants.MODIFIED_FIRST_TRACKER] || this.state[Constants.MODIFIED_SECOND_TRACKER] || this.state[Constants.MODIFIED_THIRD_TRACKER]);
		return (
			<View>
				<ScrollView contentContainerStyle={{flexGrow: 1}} style={getStyles(displayBtnSave).circles_container} >
					<TrackerRow constant={this.state.constant} id={Constants.MODIFIED_FIRST_TRACKER} _modifiedTracker={this._modifiedTracker.bind(this)}/>
					<TrackerRow constant={this.state.constant} id={Constants.MODIFIED_SECOND_TRACKER} _modifiedTracker={this._modifiedTracker.bind(this)}/>
					<TrackerRow constant={this.state.constant} id={Constants.MODIFIED_THIRD_TRACKER} _modifiedTracker={this._modifiedTracker.bind(this)}/>
				</ScrollView>
				<Text style={getStyles(displayBtnSave).save_btn}>algo</Text>
			</View>
		);
	}
}
