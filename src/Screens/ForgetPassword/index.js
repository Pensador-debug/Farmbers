import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    TextInput,
    Dimensions,
    Image, Picker
} from "react-native";
const { width, height } = Dimensions.get('window');
import InputField from '../../Commons/input';
import { Images } from '../../utils'
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
class ForgetPassword extends Component {
    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding">
                <View style={styles.header}>
                       
                       <Image source={Images.farmLogo} style={{ width: width * 0.65, height: height * 0.1, }} />
                   </View>
                    <View style={{ marginTop: height * 0.2, alignItems: 'center', }}>
                        <View style={styles.formBox}>
                            <Image source={Images.dummy} style={styles.searchIcon} />
                            <TextInput placeholderTextColor="#000" autoCapitalize='none'
                                style={styles.input} placeholder="Enter Mobile Number"
                            />
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.04 }}>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.boxBtn2}
                            onPress={() => this.props.navigation.navigate('OtpLogin')}>
                            <Text style={styles.btnText}> Send OTP </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
export default ForgetPassword;
