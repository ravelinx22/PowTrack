import React, { Component  } from 'react';
import { Text,View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { getStyles } from "../styles/TrackerView";
import Constants from "../utils/Constants";

import TrackerRow from "../components/TrackerRow";



export default class TrackerView extends Component {

	constructor(props) {
		super(props);
		this.state = {
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

	_onSave() {
		console.log("Save");
	}

	_onReset() {
		console.log("Reset");
	}

	_renderTrackerRows() {
		const acceptedValues = [Constants.MODIFIED_FIRST_TRACKER, Constants.MODIFIED_SECOND_TRACKER, Constants.MODIFIED_THIRD_TRACKER];
		return this.props.data.map((d,i) => {
			return <TrackerRow key={i} data={d} id={i < acceptedValues.length ? acceptedValues[i] : ""} _modifiedTracker={this._modifiedTracker.bind(this)}/>
		});
	}

	render() {
		var displayBtnSave = (this.state[Constants.MODIFIED_FIRST_TRACKER] || this.state[Constants.MODIFIED_SECOND_TRACKER] || this.state[Constants.MODIFIED_THIRD_TRACKER]);

		const styles = getStyles(displayBtnSave);
		return (
			<View>
				<ScrollView contentContainerStyle={{flexGrow: 1}} style={styles.circles_container} >
					{this._renderTrackerRows()}
				</ScrollView>
				<View style={styles.save_btn}>
					<TouchableOpacity style={styles.left_container} onPress={this._onSave.bind(this)}>
						<Text style={styles.left_text}>Save</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.right_container} onPress={this._onReset.bind(this)}>
						<Text style={styles.right_text}>Reset</Text>	
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
