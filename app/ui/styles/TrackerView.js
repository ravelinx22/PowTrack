import { StyleSheet } from 'react-native';

/* Tracker View */
export function getStyles(save_btn_shown) {
	if(save_btn_shown) {
		return  StyleSheet.create({
			circles_container: {
				backgroundColor: "#4E7AC7",
				height: "90%",
				flexDirection: 'column',
			},
			save_btn: {
				height: "10%",
				flexDirection: "row",
				backgroundColor: "#16193B"
			},
			left_container: {
				backgroundColor: "#35478C",
				flex: 1,
				flexDirection: "column",
				justifyContent: 'center'
			},
			right_container: {
				backgroundColor: "#7FB2F0",
				flex: 1,
				flexDirection: "column",
				justifyContent: 'center'
			},
			left_text: {
				color: "white",
				fontWeight: "bold",
				fontSize: 18,
				textAlign: "center"
			},
			right_text: {
				color: "white",
				fontWeight: "bold",
				fontSize: 18,
				textAlign: "center"
			}
		});
	} else {
		return  StyleSheet.create({
			circles_container: {
				backgroundColor: "#4E7AC7",
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
