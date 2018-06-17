import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { createMaterialTopTabNavigator } from "react-navigation";
import TrackerView from "../views/TrackerView";

export default createMaterialTopTabNavigator({
	Home: props => <TrackerView {...props}/>,
	Settings: props => <TrackerView {...props} />,
});
