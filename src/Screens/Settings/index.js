import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
   
    Dimensions,
    Image,
     Switch,
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils';
import styles from './style';
import Header from '../../Commons/Header'

import AsyncStorage from '@react-native-community/async-storage';
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
class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
        };
        this._getStorageValue()
    }
    async _getStorageValue(){
        var value = await AsyncStorage.getItem('token')
       
        if (value != null){
                    console.log(value)
                
               }
        return value
      }
      async logout(){
        await AsyncStorage.setItem('token', "")
        this.props.navigation.replace('Ragistration')
      }
    render() {
        return (
            <View style={styles.container}>
               
                 <Header {...this.props}  back={true}/>
                <View style={styles.wrapper}>
                    <View style={styles.upperWrapper}>
                        <Text style={{ fontSize: 24, marginTop: 10, color: '#fff' }}>Settings</Text>
                    </View>
                </View>
                <View style={styles.formBox}>
                <Image source={Images.notificationIcon} style={styles.searchIcon} />
                    <View style={styles.input13}>
                        <Text numberOfLines={1} style={{ fontSize: 18, color: '#006631' }} >{translate('notification')}</Text>
                    </View>
                    <Switch
                        trackColor={{ false: 'gray', true: 'teal' }}
                        thumbColor="white"
                        ios_backgroundColor="gray"
                        onValueChange={(value) => this.setState({ toggle: value })}
                        value={this.state.toggle}
                       
                    />
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('PrivacyPolicyScreen')} style={[styles.formBox1, { marginTop: 15 }]}>
                <Image source={Images.privacyIcon} style={styles.searchIcon} />
                    <View style={styles.input12}>
                        <Text numberOfLines={1} style={{ fontSize: 18, color: '#006631' }} >{translate('privacy_policy')}</Text>
                    </View>
                    <TouchableOpacity style={{ position: 'absolute', left: '78%' }}>
                        <Image source={Images.forward} style={styles.helpIcon} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('TermsAndConditions')} style={[styles.formBox1, { marginTop: 15 }]}>
                <Image source={Images.termsIcon} style={styles.searchIcon} />
                    <View style={styles.input12}>
                        <Text numberOfLines={1} style={{ fontSize: 18, color: '#006631' }} >{translate('term_cond')}</Text>
                    </View>
                    <TouchableOpacity style={{ position: 'absolute', left: '78%' }}>
                        <Image source={Images.forward} style={styles.helpIcon} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('HelpScreen')}  style={[styles.formBox1, { marginTop: 15 }]}>
                <Image source={Images.helpIcon} style={styles.searchIcon} />
                    <View style={styles.input12}>
                        <Text numberOfLines={1} style={{ fontSize: 18, color: '#006631' }} >{translate('help_cntr')}</Text>
                    </View>
                    <TouchableOpacity style={{ position: 'absolute', left: '78%' }}>
                        <Image source={Images.forward} style={styles.helpIcon} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutUs')}  style={[styles.formBox1, { marginTop: 15 }]}>
                <Image source={Images.aboutUs} style={styles.searchIcon} />
                    <View style={styles.input12}>
                        <Text numberOfLines={1} style={{ fontSize: 18, color: '#006631' }} >{translate('about_us')}</Text>
                    </View>
                    <TouchableOpacity style={{ position: 'absolute', left: '78%' }}>
                        <Image source={Images.forward} style={styles.helpIcon} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.1 }}>
                    <TouchableOpacity onPress={() => {this.logout()}}
                        activeOpacity={1}
                        style={styles.boxBtn2}
                    >
                        <Text style={{ color: '#fff' }}> {translate('log_out')} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default Settings;
