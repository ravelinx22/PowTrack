import React, { Component  } from 'react';
import { Text,View, Button, ScrollView } from 'react-native';
import { getStyles } from "../styles/TrackerView";

import TrackerRow from "../components/TrackerRow";

export default class TrackerView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			constant: 5,
			btnSaveShown: true,
		};
	}

	_displayBtnSave() {
		this.setState({
			btnSaveShown: true,
		});
	}

	_hideBtnSave() {
		this.setState({
			btnSaveShown: false,
		});
	}

	render() {
		return (
			<View>
				<ScrollView contentContainerStyle={{flexGrow: 1}} style={getStyles(this.state.btnSaveShown).circles_container} >
					<TrackerRow constant={this.state.constant}/>
					<TrackerRow constant={this.state.constant}/>
					<TrackerRow constant={this.state.constant}/>
				</ScrollView>
				<Text style={getStyles(this.state.btnSaveShown).save_btn}>algo</Text>
			</View>
		);
	}
}


