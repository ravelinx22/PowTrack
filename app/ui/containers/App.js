import React, { Component } from 'react';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import { WEB_CLIENT_ID } from 'react-native-dotenv'

import HomeView from "../views/HomeView";
import EnterView from "../views/EnterView";
import LoadingView from "../views/LoadingView";

export default class App extends Component<{}> {

	constructor(props) {
		super(props);
		this.state =  {
			configuring: true,
			user: null
		}
	}

	componentDidMount() {
		const user = GoogleSignin.currentUser();
		this._configureGoogle();
	}

	_configureGoogle() {
		GoogleSignin.hasPlayServices({ autoResolve: true  }).then(() => {
			GoogleSignin.configure({
				scopes: ["https://www.googleapis.com/auth/drive.readonly", "https://www.googleapis.com/auth/spreadsheets"], 
				webClientId: WEB_CLIENT_ID,
				offlineAccess: false,
				forceConsentPrompt: true
			}).then(() => {
				GoogleSignin.currentUserAsync().then((user) => {
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

	_onLogout() {
		GoogleSignin.signOut()
			.then(() => {
				this.setState({
					user: null
				})
			})
			.catch((err) => {
				console.log("ERROR: " + err)
			});
	}

	render() {
		if(this.state.configuring) return <LoadingView/>;

		if(this.state.user) {
			return <HomeView _onLogout={this._onLogout.bind(this)} user={this.state.user}/>
		} else {
			return <EnterView _onSignIn={this._onSignIn.bind(this)}/>
		}
	}
}
