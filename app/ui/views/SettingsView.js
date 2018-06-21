import React, { Component  } from 'react';
import { View,Button } from 'react-native';
import styles from "../styles/SettingsView";

export default class SettingsView extends Component<{}> {
	
	render() {
		return (
			<View>
				<Button
					onPress={this.props._onLogout}
					title="Log Out"
					color="#841584"
					accessibilityLabel="Log Out"
				/>
			</View>
		);
	}
}
