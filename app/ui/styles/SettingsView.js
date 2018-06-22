import { StyleSheet } from 'react-native';

/* Settings View */
export default StyleSheet.create({
	container: {
		backgroundColor: "#4E7AC7",
		flex: 1,
		justifyContent: "space-between"
	},
	title_container: {
		justifyContent: "center",
		alignItems: "center"
	},
	title: {
		color: "white",
		fontSize: 30,
		fontWeight: "bold",
		marginTop: 10,
		textShadowOffset: {
			width: 3,
			height: 3
		}
	},
	copyright: {
		color: "white",
		fontSize: 10,
		marginTop: 5,
		fontWeight: "bold",
		textShadowOffset: {
			width: 3,
			height: 3
		}
	},
	btnLogout: {
		backgroundColor: "#35478C",
		height: 60,
		justifyContent: 'center',
		alignItems: "center",
	},
	labLogout: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold"
	}
});
