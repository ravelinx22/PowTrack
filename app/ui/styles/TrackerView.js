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
				flexDirection: "row",
				backgroundColor: "orange"
			},
			left_container: {
				backgroundColor: "orange",
				flex: 1,
				flexDirection: "column",
				justifyContent: 'center'
			},
			right_container: {
				backgroundColor: "red",
				flex: 1,
				flexDirection: "column",
				justifyContent: 'center'
			},
			left_text: {
				fontWeight: "bold",
				fontSize: 18,
				textAlign: "center"
			},
			right_text: {
				fontWeight: "bold",
				fontSize: 18,
				textAlign: "center"
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
				flexDirection: "row",
			},
			left_container: {
			},
			right_container: {
			},
			left_text: {
			},
			right_text: {
			}
		});
	}
}
