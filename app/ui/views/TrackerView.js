import React, { Component  } from 'react';
import { Text,View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { getStyles } from "../styles/TrackerView";
import Constants from "../utils/Constants";

import TrackerRow from "../components/TrackerRow";



export default class TrackerView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			btnSaveShown: true,
			realData: [0,0,0]
		};
	}

	componentDidMount() {
		this.setState({
			realData: this.props.data.slice()
		})
	}

	_onSave() {
		if(!this.props.saving) {
			this.props._onSave(this.props.titles, this.state.realData);
		}
	}

	_onReset() {
		this.setState({
			realData: this.props.data.slice()
		})
	}

	_onDataChange(index, newValue) {
		var array = this.state.realData.slice();
		array[index] = newValue;
		this.setState({
			realData: array
		});
	}

	_renderTrackerRows() {
		return this.state.realData.map((d,i) => {
			return <TrackerRow key={i}
				data={d}
				title={this.props.titles[i]}
				index={i}
				_onDataChange={this._onDataChange.bind(this)}/>
		});
	}

	render() {
		var displayBtnSave = (this.props.data.toString() !== this.state.realData.toString());

		const styles = getStyles(displayBtnSave);
		return (
			<View>
				<ScrollView contentContainerStyle={{flexGrow: 1}} style={styles.circles_container} >
					{this._renderTrackerRows()}
				</ScrollView>
				<View style={styles.save_btn}>
					<TouchableOpacity style={styles.left_container} onPress={this._onSave.bind(this)}>
						<Text style={styles.left_text}>Save</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.right_container} onPress={this._onReset.bind(this)}>
						<Text style={styles.right_text}>Reset</Text>	
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
