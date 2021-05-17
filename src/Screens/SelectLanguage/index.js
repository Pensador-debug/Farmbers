import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    FlatList
} from "react-native";
const { width, height } = Dimensions.get('window');
import styles from './style';
import { languages } from '../../redux/actions/languages';
import { savelanguage } from '../../redux/actions/savelanguage';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import AwesomeAlert from 'react-native-awesome-alerts';
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

class SelectLanguage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAlert: false,
            selectedLanguage: '',
            selectedCode: '',
            language: [],
        };
        this._getStorageValue();
    }

    async _getStorageValue() {
        var value = await AsyncStorage.getItem('token')
        var languagecode = await AsyncStorage.getItem('languagecode')
        console.log(languagecode)
        if (languagecode != null) {
            this.props.navigation.replace('PincodeScreen')
        }
        console.log(value)
        this.setState({ token: value })
        this.props.languages(value).then(async () => {
            this.setState({ language: this.props.languages1 })
            console.log(this.state.selectedCode, 'shashank ki galti hai ')


        })
        return value
    }
    async submitDone() {
        // console.log(this.state)
        this.props.savelanguage(this.state).then(async () => {
            console.log(this.props.savelanguage1)
            await AsyncStorage.setItem('languagecode', this.state.selectedCode)
            // this.props.navigation.replace('DashboardMap')
        })
        this.showAlert();

    }
    showAlert = () => {
        this.setState({
            showAlert: true,
        });
    };
    hideAlert = () => {
        this.setState({
            showAlert: false,
        });
        this.props.navigation.replace('PincodeScreen')
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.upperWrapper}>
                        <Text style={{ fontSize: 24, marginTop: 20, color: '#fff' }}>SELECT LANGUAGE</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
                    <FlatList
                        numColumns={2}
                        extraData={this.state}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        data={this.state.language}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => this.setState({ selectedLanguage: item.language, selectedCode: item.code })}>
                                <View style={item.language == this.state.selectedLanguage ?
                                    {
                                        padding: 10, justifyContent: 'center', backgroundColor: '#006631', borderRadius: 20, marginRight: 10, minWidth: width * 0.35, minHeight: height * 0.15, margin: 5
                                    }
                                    :
                                    {
                                        padding: 10, justifyContent: 'center', backgroundColor: '#ffffff', borderRadius: 20, marginRight: 10, minWidth: width * 0.35, minHeight: height * 0.15, margin: 5
                                    }
                                }>
                                    <Text style={item.language == this.state.selectedLanguage ? { fontFamily: 'Eina03_Bold', alignSelf: 'center', fontSize: 26, color: 'white' } : { fontFamily: 'Eina03_Bold', alignSelf: 'center', fontSize: 26, color: 'black' }}>{item.language}</Text>
                                </View></TouchableOpacity>} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 8 }}>
                    <Text style={{ fontSize: 20 }}>{this.state.selectedLanguage}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, height: '20%' }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.boxBtn2}
                        onPress={() => this.submitDone()}>
                        <Text style={styles.btnText}> {translate('clicktoconfirm') }</Text>
                    </TouchableOpacity>
                </View>
                <AwesomeAlert
                    show={this.state.showAlert}
                    showProgress={false}
                    title={'FARMBERS'}
                    titleStyle={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}
                    message="Language Saved Succesfully"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    //showCancelButton={true}
                    showConfirmButton={true}
                    confirmText="Okay"
                    confirmButtonColor="#006631"
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        languages1: state.languages.languages,
        savelanguage1: state.savelanguage.savelanguage
    };
};
export default connect(mapStateToProps, {
    languages, savelanguage
})(SelectLanguage);
