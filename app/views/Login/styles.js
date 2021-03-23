import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 20,
	},
	brand: {
		flex: 4,
		justifyContent: 'center',
	},
	brandImg: {
		alignSelf: 'center'
	},
	heading: {
		fontSize: 26,
		textAlign: 'center'
	},
	fields: {
		marginVertical: 30
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		marginTop: 10,
		padding: 10
	},
	button: {
		backgroundColor: '#0b76b9',
		paddingVertical: 15,
		alignItems: 'center',
		borderRadius: 5
	},
	buttonText:{
		color: '#fff'
	}
})

export default styles