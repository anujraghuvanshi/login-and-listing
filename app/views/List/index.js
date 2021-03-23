import React, { useEffect, useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	View,
	Text,
	Alert,
	Image
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
const axios = require('axios')

import { API_URL, IMAGE_BASE_URL } from '../../configs/constants'
import styles from './styles'

const ListScreen = () => {

	const [cotainer, setContainer] = useState([])
	const [isFetching, setIsFetching] = useState(true)

	/**
	 * 
	 */
	useEffect(() => {
		_fetchContainers()
	}, [])

	/**
	 * 
	 */
	const _fetchContainers = async () => {
		const token = await AsyncStorage.getItem('auth_token')

		axios.post(
			`${API_URL}user/outletDetail`,
			{
				outlet_id: 86
			},
			{
				headers: { 'Authorization': `Bearer ${token}` }
			}
		)
		.then(function (response) {
			const { data } = response.data
			setContainer(data)
		})
		.catch(function (error) {
			Alert.alert(error.message || 'Something went wrong.')
		})
		.then(function () {
			setIsFetching(false)
		});

	}

	/**
	 * 
	 * @param {Object} item
	 * @returns 
	 */
	const renderItem = ({ item }) => {
		console.log(`${IMAGE_BASE_URL}${item.photo}`)
		return (
		<View style={styles.item}>
			<View style={{flex: 2}}>
				<Image 
					style={{alignSelf: 'center', width: 80, height: 80}}
					source={{uri: 'https://empti.org/empti/public/images/containers/container-image-0.47396500_1595228167.png' }} 
				/>
			</View>
			<View style={{flex: 8, marginLeft: 20}}>
				<Text style={{fontSize: 20, paddingBottom: 5}}>
					{item.name}
				</Text>
				<Text style={{color: '#6B6B6B'}}>
					{`Contaier ID: ${item.name}`}
				</Text>
				<Text style={{color: '#6B6B6B'}}>
					{`Total Containers: ${item.total_container}`}
				</Text>
				<Text style={{color: '#6B6B6B'}}>
					{`Available Containers: ${item.available_container}`}
				</Text>
			</View>
		</View>
	)};

	/**
	 * 
	 * @returns Containers List
	 */
	const _renderList = () => (
		<>
			<Text style={styles.heading}>
					Containers List
			</Text>
			<FlatList
				style={styles.listContainer}
				data={cotainer.containerDetail || []}
				renderItem={renderItem}
				keyExtractor={(item, index) => index.toString()}
			/>
		</>
	)

	/**
	 * 
	 * @returns 
	 */
	const _renderContainers = () => (
		<View style={styles.container}>
			{ isFetching
				? <ActivityIndicator size="large" />
				: _renderList()
			}

		</View>
	)

	/**
	 * 
	 */
	return (
		_renderContainers()
	)
}

export default ListScreen