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
	"Big 3": props => <TrackerView {...props}/>,
	"Paused Big 3": props => <TrackerView {...props} />,
});
