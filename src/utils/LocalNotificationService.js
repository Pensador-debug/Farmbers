import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios'
import { Platform } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

class LocalNotificationService {

	configure = (onOpenNotification) => {
		PushNotification.configure({
			onRegister: async function (token) {
				// console.log("[LocalNotificationService] onRegister", token)

				await AsyncStorage.setItem('fcmToken', token.token)
				await AsyncStorage.setItem('mobile_os', token.os)
			},
			onNotification: function (notification) {
				console.log("[LocalNotificationService] onNotification", notification)
				if (!notification?.data) {
					return
				}
				notification.userInteraction = true;
				onOpenNotification(Platform.OS === 'ios' ? notification.data.item : notification.data)

				// only call callback if not from foreground
				if (Platform.OS === 'ios') {
					notification.finish(PushNotificationIOS.FetchResult.NoData)
				}
			},

			// ios only optional 
			permissions: {
				alert: true,
				badge: true,
				sound: true
			},
			popInitialNotification: true,

			requestPermissions: true
		})
	}

	unRegister = () => {
		PushNotification.unRegister()
	}


	showNotification = (id, title, message, data = {}, options = {}) => {
		PushNotification.localNotification({
			...this.buildAndroidNotification(id, title, message, data, options),
			...this.buildIOSNotification(id, title, message, data, options),
			title: title || "", // (optional)
			message: message || "", // (required)
			playSound: options.playSound || false, // (optional) default: true
			soundName: options.soundName || "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
			userInteraction: false // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
		})

	}


	buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
		return {
			id: id,
			autoCancel: true,
			largeIcon: options.largeIcon || "ic_launcher",
			smallIcon: options.smallIcon || "ic_notification",
			bigText: message || "",
			subText: title || "",
			vibrate: options.vibrate || true,
			vibration: options.vibration || 300,
			priority: options.priority || "high",
			importance: options.importance || "high",
			data: data

		}
	}


	buildIOSNotification = (id, title, message, data = {}, options = {}) => {
		return {
			alertAction: options.alertAction || 'view',
			category: options.category || "",
			userInfo: {
				id: id,
				item: data
			}

		}
	}

	cancelAllLocalNotifications = () => {
		if (Platform.OS === 'ios') {
			PushNotificationIOS.removeAllDeliveredNotifications()
		}
		else {
			PushNotification.cancelAllLocalNotifications();
		}
	}

	removeDeliveredNotificationByID = (notificationId) => {
		console.log("[LocalNotificationService] removeDeliveredNotificationByID", notificationId),
			PushNotification.cancelLocalNotifications({ id: `${notificationId}` })
	}

}
export const localNotificationService = new LocalNotificationService();