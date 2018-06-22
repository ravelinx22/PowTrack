import React, { Component  } from 'react';
import { View,TouchableOpacity, Text } from 'react-native';
import styles from "../styles/SettingsView";

export default class SettingsView extends Component<{}> {

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.title_container}>
					<Text style={styles.title}>PowTrack</Text>
					<Text style={styles.copyright}>By Ravelinx</Text>
				</View>
				<TouchableOpacity style={styles.btnLogout} onPress={this.props._onLogout}>
					<Text style={styles.labLogout}>Log Out</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
