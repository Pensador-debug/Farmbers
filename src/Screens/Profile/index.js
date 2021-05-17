import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    TextInput,
    Dimensions,
    Image,
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils'
import styles from './style';
import AwesomeAlert from 'react-native-awesome-alerts';

import ImagePicker from 'react-native-image-crop-picker';


import { profile } from '../../redux/actions/profile';
import { saveprofile } from '../../redux/actions/saveprofile';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import Header from '../../Commons/Header';
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
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bio: '',
            state: "",
            city: "",
            locality: '',
            profession: '',
            address: '',
            position: '',
            avatarSource: '',
            showAlert: false,
            profilepic: {}
        };
        this._getStorageValue();
    }
    async _getStorageValue() {
        var value = await AsyncStorage.getItem('token')
        if (value == null) {
            console.log(value)
            //   this.props.navigation.replace('Home')
        }
        this.getData(value);
        this.setState({ token: value });
        return value
    }
    getData(token) {
        this.props.profile(token)
            .then(() => {
                console.log(this.props.profile1)
                this.setState({
                    bio: this.props.profile1.bio,
                    state: this.props.profile1.state,
                    city: this.props.profile1.city,
                    locality: this.props.profile1.locality,
                    profession: this.props.profile1.profession,
                    address: this.props.profile1.address,
                    position: this.props.profile1.position,
                    pincode: this.props.profile1.pincode,
                    avatarSource: this.props.profile1.avatar,
                    image: '',
                    profilepic:''
                })
            })
    }
    submitDone() {
        // console.log(this.state)
        this.props.saveprofile(this.state).then(async () => {
            console.log(this.props.saveprofile1, 'ye h jane wale')
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
        this.props.navigation.replace('Lands')
    };
    state = {
        avatarSource: null,
    }
    
    selectImage = async () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true,
        }).then(image => {
            console.log('Image is here', image);
            this.setState({ profilepic: image.data })
            this.setState({
                avatarSource: image.path.replace('content://', ''),
            });
        });

    }
    render() {
        return (
            <View style={styles.container}>

                <Header {...this.props} back={true} />
                <KeyboardAvoidingView >
                    <ScrollView
                        contentContainerStyle={styles.scrollWrapper}
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.wrapper}>
                            <View style={styles.upperWrapper}>
                                <Text style={{ fontSize: 24, marginTop: 20, color: '#fff' }}>Enter Profile Info</Text>
                            </View>
                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', }}>
                                <TouchableOpacity onPress={this.selectImage}>
                                    <View style={styles.profileImgWrapper}>
                                        {/* <Image source={Images.profilePic} style={{ height: 90, width: 90, borderRadius: 50, marginTop: -70, }} /> */}
                                        <Image source={this.props.profile1.avatar ? { uri: this.props.profile1.avatar } : Images.profilePic} style={{ height: 90, width: 90, borderRadius: 50, marginTop: -70, }} />
                                       
                                            {/* <Image source={{ uri: this.state.profilepic }} style={{ width: 50, height: 50, marginLeft: 50 }} /> */}
                                      
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', }}>
                            <View style={{ marginTop: 15 }}>
                                <Text style={{ paddingLeft: 10, color: '#006631' }}>{translate('name')}</Text>
                                <View style={styles.formBox1}>
                                    <Text style={[styles.input1, { marginTop: 5, marginBottom: 5 }]}>{this.props.profile1.name}</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ paddingLeft: 10, color: '#006631' }}>{translate('position')}</Text>
                                <View style={styles.formBox}>
                                    <TextInput placeholderTextColor="#000" autoCapitalize='none'
                                        style={styles.input}
                                        onChangeText={position => this.setState({ position })}
                                        placeholder="Position"
                                        value={this.state.position}
                                    />
                                </View>
                            </View>
                            <View style={{ marginTop: 15 }}>
                                <Text style={{ paddingLeft: 10, color: '#006631' }}>{translate('proffesion')}</Text>
                                <View style={styles.formBox}>
                                    <TextInput placeholderTextColor="#000" autoCapitalize='none'
                                        style={styles.input}
                                        onChangeText={profession => this.setState({ profession })}
                                        value={this.state.profession}
                                    />
                                </View>
                            </View>
                            <View style={{ marginTop: 15 }}>
                                <Text style={{ paddingLeft: 10, color: '#006631' }}>{translate('adress')}</Text>
                                <View style={styles.formBox}>
                                    <TextInput placeholderTextColor="#000" autoCapitalize='none'
                                        style={styles.input}
                                        onChangeText={address => this.setState({ address })}
                                        value={this.state.address}
                                    />
                                </View>
                            </View>
                            <View style={{ marginTop: 15 }}>
                                <Text style={{ paddingLeft: 10, color: '#006631' }}>{translate('locality')}</Text>
                                <View style={styles.formBox}>
                                    <TextInput placeholderTextColor="#000" autoCapitalize='none'
                                        style={styles.input}
                                        onChangeText={locality => this.setState({ locality })}
                                        value={this.state.locality}
                                    />
                                </View>
                            </View>
                            <View style={{ marginTop: 15 }}>
                                <Text style={{ paddingLeft: 10, color: '#006631' }}>{translate('city')}</Text>
                                <View style={styles.formBox}>
                                    <TextInput placeholderTextColor="#000" autoCapitalize='none'
                                        style={styles.input}
                                        onChangeText={city => this.setState({ city })}
                                        value={this.state.city}
                                    />
                                </View>
                            </View>
                            <View style={{ marginTop: 15 }}>
                                <Text style={{ paddingLeft: 10, color: '#006631' }}>{translate('state')}</Text>
                                <View style={styles.formBox}>
                                    <TextInput placeholderTextColor="#000" autoCapitalize='none'
                                        style={styles.input}
                                        onChangeText={state => this.setState({ state })}
                                        value={this.state.state}
                                    />
                                </View>
                            </View>
                            <View style={{ marginTop: 15 }}>
                                <Text style={{ paddingLeft: 10, color: '#006631' }}>{translate('pincode')}</Text>
                                <View style={styles.formBox}>
                                    <TextInput placeholderTextColor="#000" autoCapitalize='none'
                                        style={styles.input}
                                        onChangeText={pincode => this.setState({ pincode })}
                                        value={this.state.pincode}
                                    />
                                </View>
                            </View>
                            <View style={{ marginTop: 35 }}>
                                <Text style={{ paddingLeft: 10, color: '#006631' }}>{translate('bio')}</Text>
                                <View style={styles.formBox}>
                                    <TextInput placeholderTextColor="#000" autoCapitalize='none' multiline={true} textAlignVertical='top'
                                        style={styles.input}
                                        onChangeText={bio => this.setState({ bio })}
                                        value={this.state.bio}
                                    />
                                </View>
                            </View>
                        </View>
                        {/* <View style={{ justifyContent: 'center', alignItems: 'center',}}> */}
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.boxBtn2}
                            onPress={() => this.submitDone()}
                        >
                            <Text style={styles.btnText}> {translate('submit')} </Text>
                        </TouchableOpacity>
                        {/* </View> */}
                        {/* <View style={styles.downWrapper}>
                        </View> */}
                        <AwesomeAlert
                            show={this.state.showAlert}
                            showProgress={false}
                            title={'FARMBERS'}
                            titleStyle={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}
                            message="Profile Updated Succesfully"
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
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        profile1: state.profile.profile,
        saveprofile1: state.saveprofile.saveprofile
    };
};
export default connect(mapStateToProps, {
    profile, saveprofile
})(Profile);