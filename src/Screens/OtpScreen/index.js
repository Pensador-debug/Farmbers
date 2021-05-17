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
import { otp } from '../../redux/actions/otp';
import { connect } from 'react-redux';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
import LoadingIcon from '../../components/LoadingIcon';

const translationGetters = {
    // lazy requires (metro bundler does not support symlinks)
    en: () => require('../../assets/en-US.json'),
    hi: () => require('../../assets/hi.json'),
};
const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
);
class OtpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingApp:false,
            mobile: this.props.route.params.mobile,
            otp: '',
            pin: '',
            confirm_pin: '',
            name: '',
            email: ''
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
        var message =  translate('somethingwentwrong')
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
        if (this.state.name.length < 3) {
            error = 1;
            message = translate('hintname')
        }
        if (error != 1) {
            this.setState({ loadingApp: true })
            this.props.otp(this.state).then(async () => {
                this.setState({ loadingApp: false })
                console.log(this.props.otp1)
                if (this.props.otp1.token)
                    this.props.navigation.replace('SelectLanguage', { mobile: this.state.mobile })
                else
                    Alert.alert(
                        'Farmbers',
                        JSON.stringify(this.props.otp1.validation_errors),
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
    loadingRender() {
        if (this.state.loadingApp) {
            return (
                <LoadingIcon/>
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                 {this.loadingRender()}
                <KeyboardAvoidingView    // adjust the value here if you need more padding
                    style={{ flex: 1 }}
                    behavior="padding" >
                    <ScrollView
                        contentContainerStyle={styles.scrollWrapper}
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.header}>
                            <Image source={Images.farmLogo} style={{ width: width * 0.65, height: height * 0.1, }} />
                        </View>
                        <View style={{ marginTop: height * 0.07, }}>
                            <View style={styles.formBox}>
                                <Image source={Images.otp} style={styles.searchIcon} />
                                <TextInput placeholderTextColor="#000" keyboardType='numeric'
                                    placeholderTextColor="#006631"
                                    style={styles.input}  placeholder={translate('enterotpnumber')}
                                    maxLength={6}
                                    onChangeText={otp => this.setState({ otp })}
                                    value={this.state.otp} />
                            </View>
                            <View style={styles.formBox}>
                                <Image source={Images.password} style={styles.searchIcon} />
                                <TextInput placeholderTextColor="#000" keyboardType='numeric'
                                    style={styles.input} placeholder={translate('enter4digitpin')} secureTextEntry
                                    placeholderTextColor="#006631"
                                    maxLength={4}
                                    onChangeText={pin => this.setState({ pin })}
                                    value={this.state.pin} />
                            </View>
                            <View style={styles.formBox}>
                                <Image source={Images.unlock} style={styles.searchIcon} />
                                <TextInput placeholderTextColor="#000" autoCapitalize='none' keyboardType='numeric'
                                    style={styles.input}  placeholder={translate('confirmpin')}
                                    placeholderTextColor="#006631"
                                    maxLength={4}
                                    onChangeText={confirm_pin => this.setState({ confirm_pin })}
                                    value={this.state.confirm_pin} />
                            </View>
                            <View style={styles.formBox}>
                                <Image source={Images.dummy} style={styles.searchIcon} />
                                <TextInput placeholderTextColor="#000" autoCapitalize='none'
                                    style={styles.input}  placeholder={translate('entername')}
                                    placeholderTextColor="#006631"
                                    onChangeText={name => this.setState({ name })}
                                    value={this.state.name} />
                            </View>
                            <View style={styles.formBox}>
                                <Image source={Images.email} style={styles.searchIcon} />
                                <TextInput placeholderTextColor="#000" autoCapitalize='none'
                                    style={styles.input} placeholder={translate('enetremail')}
                                    // placeholderStyle={{texcolor:''}}
                                    placeholderTextColor="#006631"
                                    onChangeText={email => this.setState({ email })}
                                    value={this.state.email} />
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.06 }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={styles.boxBtn2}
                                onPress={() => this.submitNext()}>
                                <Text style={styles.btnText}> NEXT </Text>
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
        otp1: state.otp.otp
    };
};
export default connect(mapStateToProps, {
    otp
})(OtpScreen);
