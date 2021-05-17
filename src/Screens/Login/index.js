import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    TextInput,
    Dimensions,
    Image, Picker, Alert
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils'
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';
import { otp } from '../../redux/actions/otp';
import { forgetpin } from '../../redux/actions/forgetpin';
import { connect } from 'react-redux';
import OTPInputView from '@twotalltotems/react-native-otp-input';
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

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingApp:false,
            mobile : '',
            pin: ''
        }
        this.setData()
    }

    setData(){
        if (typeof this.props.route.params != 'undefined')
            this.state.mobile = this.props.route.params.mobile
    }
    
    submitLogin() {
        // console.log(this.state)
        this.setState({ loadingApp: true })
        this.props.otp(this.state).then(async () => {
            this.setState({ loadingApp: false })
            console.log(this.props.otp1)
            if (this.props.otp1.token && this.state.pin.length==4)
                this.props.navigation.replace('Lands')
            else
                Alert.alert(
                    'Farmbers',
                    JSON.stringify(this.props.otp1.validation_errors),
                )
        })
    }
    submitForgetPin() {
        // console.log(this.state)
        this.props.forgetpin(this.state).then(async () => {
            console.log(this.props.forgetpin1)
          
                this.props.navigation.replace('ForgotPin',{ mobile: this.state.mobile })
          
              
        })
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
                <KeyboardAvoidingView behavior="padding">
                    <View style={styles.header}>
                        <Image source={Images.farmLogo} style={{ width: width * 0.65, height: height * 0.1, }} />
                    </View>
                    <View style={{ marginTop: height * 0.2, alignItems: 'center', }}>
                        <Text style={{ marginBottom: 20, fontSize: 18, color: '#006631', }}>{translate('hint_enterpin')}</Text>
                        <View style={styles.otpCont}>
                            <OTPInputView
                                style={{ width: '100%', height: '100%' }}
                                pinCount={4}
                                code={this.state.pin} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                                onCodeChanged={pin => { this.setState({ pin }) }}
                                autoFocusOnLoad
                                codeInputFieldStyle={styles.underlineStyleBase}
                                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                            // onCodeFilled={code => {
                            //     alert(`Code is ${code}, you are good to go!`);
                            // }}
                            />
                        </View>
                        {/* </View> */}
                    </View>
                    <TouchableOpacity onPress={() => this.submitForgetPin()} style={{ alignItems: 'flex-end', marginRight: 20, marginTop: 10 }}>
                        <Text style={styles.forgetText}>
                        {translate('forget_pin')}
                                </Text>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.06 }}>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.boxBtn2}
                            onPress={() => this.submitLogin()}
                        // onPress={() =>
                        //     this.props.navigation.navigate('DashboardMap')
                        // }
                        >
                            <Text style={styles.btnText}>{translate('submit')}</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        otp1: state.otp.otp,
        forgetpin1: state.forgetpin.forgetpin
    };
};
export default connect(mapStateToProps, {
    otp,forgetpin
})(Login);
