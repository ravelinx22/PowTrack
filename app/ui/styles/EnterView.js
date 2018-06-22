import { StyleSheet } from 'react-native';

/* Enter View */
export default StyleSheet.create({
	title: {
		color: "white",
		fontSize: 50,
		marginBottom: 20,
		fontWeight: "bold",
		textShadowOffset: { 
			width: 5,
			height: 5
		}
	},
	container: {
		backgroundColor: "#4E7AC7",
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	copyright: {
		color: "white",
		fontSize: 14,
		marginTop: 10,
		fontWeight: "bold",
		textShadowOffset: { 
			width: 3,
			height: 3
		}
	}
});
