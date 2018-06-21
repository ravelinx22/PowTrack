import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { createMaterialTopTabNavigator } from "react-navigation";
import TrackerView from "../views/TrackerView";
import EnterView from "../views/EnterView";
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import { getFirst, getSecond } from "../utils/testData";
import { WEB_CLIENT_ID } from 'react-native-dotenv'

export default class App extends Component<{}> {

	constructor(props) {
		super(props);
		this.state =  {
			configuring: true,
			user: null
		}
	}

	componentDidMount() {
		this._configureGoogle();
	}

	_configureGoogle() {
		GoogleSignin.hasPlayServices({ autoResolve: true  }).then(() => {
			GoogleSignin.configure({
				scopes: ["https://www.googleapis.com/auth/drive.readonly", "https://www.googleapis.com/auth/spreadsheets"], 
				webClientId: WEB_CLIENT_ID,
				offlineAccess: true,
				forceConsentPrompt: true
			}).then(() => {
				GoogleSignin.currentUserAsync().then((user) => {
					console.log('USER', user);
					this.setState({
						user: user,
						configuring: false
					});
				}).done();
			});
		}).catch((err) => {
			console.log("Play services error", err.code, err.message);
		})
	}

	_onSignIn(user) {
		this.setState({
			user: user
		})
	}

	render() {
		if(this.state.configuring) return null;

		const TabNavigator = createMaterialTopTabNavigator({
			"Big 3": props => <TrackerView {...props} data={getFirst()}/>,
			"Paused Big 3": props => <TrackerView {...props} data={getSecond()}/>,
		});

		if(this.state.user) {
			return <TabNavigator/>
		} else {
			return <EnterView _onSignIn={this._onSignIn.bind(this)}/>
		}
	}
}
