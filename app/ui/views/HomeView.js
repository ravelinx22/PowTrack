import React, { Component  } from 'react';
import { View, Button } from 'react-native';
import { createMaterialTopTabNavigator } from "react-navigation";
import { getFirst, getSecond } from "../utils/testData";
import { Drive, Sheets } from "../../api/GoogleAPI.js";
import Constants from "../utils/Constants";
import { getTimestamp } from "../utils/Utils";

import TrackerView from "./TrackerView";
import SettingsView from "../views/SettingsView";
import LoadingView from "../views/LoadingView";

import styles from "../styles/HomeView";

export default class HomeView extends Component<{}> {

	constructor(props) {
		super(props);
		this.state = {
			configuring: true,
			spreadsheet_id: null,
			data: [0,0,0,0,0,0, getTimestamp()]
		}
		this.drive = null;
		this.sheets = null;
	}

	componentDidMount() {
		this.drive = Drive().token(this.props.user.accessToken);
		this.sheets = Sheets().token(this.props.user.accessToken);
		this.loadData();
	}

	loadData() {
		this.drive._getSpreadsheetId(Constants.BASE_SPREADSHEET_TITLE).then((id) => {
			if(id) {
				this.getLastRowData(id);
			} else {
				this.createNewSpreadsheet();
			}
		});
	}

	createNewSpreadsheet() {
		this.sheets._createBaseSpreadsheet().then((id) => {
			this.setState({
				spreadsheet_id: id,
				configuring: false
			})	
		})
	}

	getLastRowData(id) {
		this.sheets._getLastRowValues(id).then((data) => {
			this.setState({
				configuring: false,
				spreadsheet_id: id,
				data: data
			})
		})
	}

	_onSave(trackerViewTitle, newData) {
		var newArray = this.state.data.slice();
		if(trackerViewTitle.toString() === Constants.BIG3.toString()) {
			for(var i = 0; i < 3; i++) {
				newArray[i] = newData[i];
			}
		} else if(trackerViewTitle.toString() === Constants.PAUSEDBIG3.toString()) {
			for(var i = 0; i < 3; i++) {
				newArray[i+3] = newData[i];
			}
		}
		newArray[6] = getTimestamp();
		this.sheets._append(newArray, this.state.spreadsheet_id).then((ans) => {
			this.getLastRowData(this.state.spreadsheet_id);
		});
	}

	render() {
		const TabNavigator = createMaterialTopTabNavigator({
			"Big 3": props => <TrackerView {...props} data={this.state.data.slice(0,3)} titles={Constants.BIG3} _onSave={this._onSave.bind(this)}/>,
			"Paused Big 3": props => <TrackerView {...props} data={this.state.data.slice(3,6)} titles={Constants.PAUSEDBIG3} _onSave={this._onSave.bind(this)}/>,
			"Settings": props => <SettingsView {...props} _onLogout={this.props._onLogout}/>
		},{
			tabBarOptions: {
				style: {
					backgroundColor: '#35478C',
				},
				indicatorStyle: {
					backgroundColor: "#ADD5F7",
				}
			}
		});

		if(this.state.configuring) {
			return(
				<LoadingView/>
			);
		} else {
			return <TabNavigator/>
		}
	}
}

