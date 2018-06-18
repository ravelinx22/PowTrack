import { StyleSheet } from 'react-native';

/* Tracker View */
export function getStyles(save_btn_shown) {
	if(save_btn_shown) {
		return  StyleSheet.create({
			circles_container: {
				backgroundColor: "blue",
				height: "90%",
				flexDirection: 'column',
			},
			save_btn: {
				height: "10%",
				backgroundColor: "black"
			}
		});
	} else {
		return  StyleSheet.create({
			circles_container: {
				backgroundColor: "blue",
				height: "100%",
				flexDirection: 'column',
			},
			save_btn: {
				height: "0%",
				backgroundColor: "black"
			}
		});
	}
}
