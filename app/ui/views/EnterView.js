import React, { Component  } from 'react';
import {StyleSheet,Text,TextInput,View,Button,ActivityIndicator,Image,} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

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

