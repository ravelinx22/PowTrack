import React, { Component  } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../styles/BtnCircle";

export default class BtnCircle extends Component<{}> {

	render() {
		return (
			<TouchableOpacity 
				style={styles.circle_container}
				onPress={this.props._onPressButton}>
				<Icon name={this.props.icon} size={30} color="white" />
			</TouchableOpacity>
		);
	}
}
