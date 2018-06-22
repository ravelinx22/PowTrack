import { StyleSheet } from 'react-native';

/* Loading View */
export default StyleSheet.create({
	container: {
		backgroundColor: "#4E7AC7",
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	title: {
		color: "white",
		fontSize: 100,
		fontWeight: "bold",
		textShadowOffset: {
			width: 5,
			height: 5
		}
	}
});
