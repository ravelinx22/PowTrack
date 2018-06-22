import React, { Component  } from 'react';
import { View, Button } from 'react-native';
import { createMaterialTopTabNavigator } from "react-navigation";
import { getFirst, getSecond } from "../utils/testData";
import { Drive, Sheets } from "../../api/GoogleAPI.js";
import Constants from "../utils/Constants";

import TrackerView from "./TrackerView";
import SettingsView from "../views/SettingsView";

import styles from "../styles/HomeView";

export default class HomeView extends Component<{}> {

	constructor(props) {
		super(props);
		this.state = {
			configuring: true,
			spreadsheet_id: null,
			data: [0,0,0,0,0,0]
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

	render() {
		const TabNavigator = createMaterialTopTabNavigator({
			"Big 3": props => <TrackerView {...props} data={this.state.data.slice(0,3)} titles={Constants.BIG3}/>,
			"Paused Big 3": props => <TrackerView {...props} data={this.state.data.slice(3,6)} titles={Constants.PAUSEDBIG3}/>,
			"Settings": props => <SettingsView {...props} _onLogout={this.props._onLogout}/>
		});

		if(this.state.configuring) {
			return(
				<View>
				</View>
			);
		} else {
			return <TabNavigator/>
		}
	}
}

