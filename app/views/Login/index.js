import React, { useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const axios = require('axios')

import { API_URL } from '../../configs/constants'
import {
	View,
	Text,
	Image,
	Alert,
	TextInput,
	TouchableOpacity
} from 'react-native'

import styles from './styles'

const LoginScreen = (props) => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isRequesting, setIsRequesting] = useState('')


	/**
	 * 
	 * @param {Object} response 
	 */
	const _handleSuccess = async(response) => {
		const {data} = response

		if(!data.status) {
			Alert.alert(data.message || 'Invalid Email or password.')
			return
		}

		try {
			await AsyncStorage.setItem('auth_token', data.data.bearer_token);
			props.navigation.replace('List')
		} catch (error) {
			Alert.alert("Please try loggin in again.")
		}
	}

	/**
	 * 
	 */
	const _doLogin = () => {

		if(!email || !password) {
			Alert.alert("Both fields are mendatory.")
			return
		}

		setIsRequesting(true)

		axios.post(`${API_URL}login`, { email, password})
		.then(response =>  _handleSuccess(response))
		.catch(error =>  Alert.alert(error.message || 'Invalid Email or password.'))
		.finally(() =>  setIsRequesting(false))

	}

	return (
		<KeyboardAwareScrollView
			contentContainerStyle={styles.container}
			keyboardShouldPersistTaps="handled">
			<View style={styles.brand}>
				<Image
					style={styles.brandImg}
					source={require('../../img/logo.png')}
					width={'80%'}
					height={'80%'}
					resizeMode={'contain'}
				/>
			</View>
			<View style={{flex: 5}}>
				<Text style={styles.heading}>Hey, Welcome Back.</Text>

				<View style={styles.fields}>
					<TextInput
						style={styles.input}
						keyboardType="email-address"
						onChangeText={text => setEmail(text)}
						value={email}
						placeholder="Email address"
					/>
					<TextInput
						secureTextEntry={true}
						style={styles.input}
						onChangeText={text => setPassword(text)}
						value={password}
						placeholder="Password"
					/>
				</View>

				<TouchableOpacity 
					style={styles.button}
					onPress={() => _doLogin()}
				>
					<Text style={styles.buttonText}>
						{isRequesting ? 'Loggin in...' : 'Login'}
					</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAwareScrollView>

	)
}

export default LoginScreen