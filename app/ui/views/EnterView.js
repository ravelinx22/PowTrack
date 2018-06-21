import React, { Component  } from 'react';
import {StyleSheet,Text,TextInput,View,Button,ActivityIndicator,Image,} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import { WEB_CLIENT_ID } from 'react-native-dotenv'

export default class EnterView extends Component<{}> {

	componentDidMount() {
		this._configureGoogle();
	}

	_signIn() {
		GoogleSignin.signIn()
			.then((user) => {
				console.log(user);
				this.setState({user: user});
			})
			.catch((err) => {
				console.log('WRONG SIGNIN', err);
			})
			.done();
	}

	_configureGoogle() {
		const userId = (+new Date).toString(36);
		GoogleSignin.hasPlayServices({ autoResolve: true  }).then(() => {
			GoogleSignin.configure({
				scopes: ["https://www.googleapis.com/auth/drive.readonly", "https://www.googleapis.com/auth/spreadsheets"], 
				webClientId: WEB_CLIENT_ID,
				offlineAccess: true,
				forceConsentPrompt: true
			}).then(() => {
				GoogleSignin.currentUserAsync().then((user) => {
					console.log('USER', user);
					this.setState({user: user});
				}).done();
			});
		}).catch((err) => {
			console.log("Play services error", err.code, err.message);
		})
	}

	render() {
		return (
			<View>
				<GoogleSigninButton
					style={{width: 48, height: 48}}
					size={GoogleSigninButton.Size.Icon}
					color={GoogleSigninButton.Color.Dark}
					onPress={this._signIn.bind(this)}/>
			</View>
		);
	}
}

