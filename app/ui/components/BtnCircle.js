import React, { Component  } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../styles/BtnCircle";

export default class BtnCircle extends Component<{}> {
	render() {
		return (
			<TouchableOpacity
				style={{
					borderWidth:1,
					borderColor:'rgba(0,0,0,0.2)',
					alignItems:'center',
					justifyContent:'center',
					width:100,
					height:100,
					backgroundColor:'#fff',
					borderRadius:100,

				}}
			>

			<Icon name="rocket" size={30} color="#900" />
			</TouchableOpacity>
		);
	}
}
