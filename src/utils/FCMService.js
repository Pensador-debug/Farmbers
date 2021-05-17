import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class FCMService {
	register = (onRegister, onNotification, onOpenNotification) => {
		this.checkPermission(onRegister);
		this.createNotificationListeners(onRegister, onNotification, onOpenNotification);
	}

	registerAppWithFCM = async () => {
		if (Platform.OS === 'ios') {
			await messaging().registerDeviceForRemoteMessages();
			await messaging().setAutoInitEnabled(true)

		}
	}

	checkPermission = async (onRegister) => {
		messaging().hasPermission()
			.then(enabled => {
				if (enabled) {
					this.getToken(onRegister)
				}
				else {
					this.requestPermission(onRegister)
				}
			})
			.catch(error => {
				console.log(" [FCMService] Permission rejected", error);
			})
	};
	async setToken1(fcmToken) {
		await AsyncStorage.setItem('fcmToken', fcmToken)
		await AsyncStorage.setItem('mobile_os', Platform.OS)
	}
	getToken = async (onRegister) => {

		// let fcmToken = await AsyncStorage.getItem('fcmToken');
		messaging().getToken()
			.then(fcmToken => {
				if (fcmToken) {
					this.setToken1(fcmToken)
					onRegister(fcmToken)
				}
				else {
					// console.log("[FCMService] User does not have a device token")
				}
			})
			.catch(error => {
				// console.log("[FCMService] getToken rejected", error)
			})
	};


	requestPermission = async (onRegister) => {
		messaging().requestPermission()
			.then(() => {

				this.getToken(onRegister);
			})
			.catch(error => {
				// console.log("[FCMService] Permission rejected", error)
			})
	};

	deleteToken = () => {
		// console.log("[FCMService] delete token")
		messaging().deleteToken()
			.catch(error => {
				// console.log("[FCMService] delete token error", error)
			})

	}

	createNotificationListeners = async (onRegister, onNotification, onOpenNotification) => {

		// When the application is running and is in background
		messaging().onNotificationOpenedApp(remoteMessage => {
			// console.log("[FCMService] onNotificationOpenedApp caused app to open", remoteMessage)
			if (remoteMessage) {
				const notification = remoteMessage.notification
				onOpenNotification(notification)
			}
		})


		// when the application is opened from a quit State
		messaging().getInitialNotification()
			.then(remoteMessage => {
				// console.log("[FCMService] getInitialNotification caused app to open", remoteMessage)
				if (remoteMessage) {
					const notification = remoteMessage.notification
					onOpenNotification(notification)
				}
			})



		// If app is in Foreground
		this.messageListener = messaging().onMessage(async remoteMessage => {
			// console.log("[FCMService] A new FCM message arrived!", remoteMessage)
			if (remoteMessage) {
				let notification = null;
				if (Platform.OS === 'ios') {
					notification = remoteMessage.notification
				}
				else {
					notification = remoteMessage.notification
				}
				onNotification(notification)
			}
		})


		// triggered when there is a new token 
		messaging().onTokenRefresh(fcmToken => {
			// console.log("[FCMService] new token refresh")

			onRegister(fcmToken)
		})





	};

	unRegister = () => {
		this.messageListener()
	}

	removeNotificationListeners = () => {
		this.onUnsubscribeNotificaitonListener();
	};
}
export const fcmService = new FCMService()