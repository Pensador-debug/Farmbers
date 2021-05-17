import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    TextInput,
    Dimensions,
    Image, Alert
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils'
import styles from './style';
import { resetpin } from '../../redux/actions/resetpin';
import { connect } from 'react-redux';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';


const translationGetters = {
    // lazy requires (metro bundler does not support symlinks)
    en: () => require('../../assets/en-US.json'),
    hi: () => require('../../assets/hi.json'),
};
const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
);
class ForgotPin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: this.props.route.params.mobile,
            otp: '',
            pin: '',
            confirm_pin: '',

        }
        // this._getStorageValue();
    }
    // async _getStorageValue() {
    //     var value = await AsyncStorage.getItem('token')
    //     if (value != null) {
    //         console.log(value)
    //         this.props.navigation.replace('SelectLanguage')
    //     }
    //     return value
    // }
    submitNext() {
        var error = 0;
        var message = translate('somethingwentwrong');
        if (this.state.otp.length != 6) {
            error = 1;
            message = translate('hintotp')
        }
        if (this.state.pin.length != 4) {
            error = 1;
            message = translate('hintpin')
        }
        if (this.state.pin != this.state.confirm_pin) {
            error = 1;
            message = translate('hintconfpin')
        }

        if (error != 1) {
            this.props.resetpin(this.state).then(async () => {
                console.log(this.props.resetpin1)
                if (this.props.resetpin1.token)
                    this.props.navigation.replace('DashboardMap', { mobile: this.state.mobile })
                else
                    Alert.alert(
                        'Farmbers',
                        JSON.stringify(this.props.resetpin1.validation_errors),
                    )
            })
        }
        else {
            Alert.alert(
                'Farmbers',
                message,
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView    // adjust the value here if you need more padding
                    style={{ flex: 1 }}
                    behavior="padding" >
                    <ScrollView
                        contentContainerStyle={styles.scrollWrapper}
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.header}>
                            <Image source={Images.farmLogo} style={{ width: width * 0.65, height: height * 0.1, }} />
                        </View>
                        <View style={{ marginTop: height * 0.15, }}>
                            <View style={styles.formBox}>
                                <Image source={Images.otp} style={styles.searchIcon} />
                                <TextInput placeholderTextColor="#000" keyboardType='numeric'
                                    placeholderTextColor="#006631"
                                    style={styles.input} placeholder={translate('hint_otp')}
                                    maxLength={6}
                                    onChangeText={otp => this.setState({ otp })}
                                    value={this.state.otp} />
                            </View>
                            <View style={styles.formBox}>
                                <Image source={Images.password} style={styles.searchIcon} />
                                <TextInput placeholderTextColor="#000" keyboardType='numeric'
                                    style={styles.input} placeholder={translate('new_pin')} secureTextEntry
                                    placeholderTextColor="#006631"
                                    maxLength={4}
                                    onChangeText={pin => this.setState({ pin })}
                                    value={this.state.pin} />
                            </View>
                            <View style={styles.formBox}>
                                <Image source={Images.unlock} style={styles.searchIcon} />
                                <TextInput placeholderTextColor="#000" autoCapitalize='none' keyboardType='numeric'
                                    style={styles.input} placeholder={translate('confirmpin')}
                                    placeholderTextColor="#006631"
                                    maxLength={4}
                                    onChangeText={confirm_pin => this.setState({ confirm_pin })}
                                    value={this.state.confirm_pin} />
                            </View>

                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.06 }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={styles.boxBtn2}
                                onPress={() => this.submitNext()}>
                                <Text style={styles.btnText}>{translate('submit')}</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        resetpin1: state.resetpin.resetpin
    };
};
export default connect(mapStateToProps, {
    resetpin
})(ForgotPin);
