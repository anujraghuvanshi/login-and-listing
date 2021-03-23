import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#0b76b9'
	},
	heading: {
		color: '#fff',
		fontSize: 24,
		padding: 20,
		alignSelf: 'center'
	},
	listContainer: {
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		backgroundColor: '#fff',
		padding: 20,
		marginTop: 5
	},
	item: {
		paddingVertical: 20,
		flex: 1,
		flexDirection: 'row',
		borderBottomColor: '#f3f3f3',
		borderBottomWidth: 1
	}
})

export default styles
