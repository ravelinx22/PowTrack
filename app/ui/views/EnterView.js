import React, { Component  } from 'react';
import { View, Text } from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

import styles from "../styles/EnterView";

export default class EnterView extends Component<{}> {

	_signIn() {
		GoogleSignin.signIn()
			.then((user) => {
				console.log(user);
				this.props._onSignIn(user);
			})
			.catch((err) => {
				console.log('WRONG SIGNIN', err);
			})
			.done();
	}


	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>
					PowTrack
				</Text>
				<GoogleSigninButton
					style={{width: 312, height: 60}}
					size={GoogleSigninButton.Size.Wide}
					color={GoogleSigninButton.Color.Light}
					onPress={this._signIn.bind(this)}/>
				<Text style={styles.copyright}>
					By Ravelinx
				</Text>
			</View>
		);
	}
}

