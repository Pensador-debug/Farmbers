import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    TextInput,
    Dimensions,
    Image, FlatList, Modal,
} from "react-native";
const { width, height } = Dimensions.get('window');
import Header from '../../Commons/Header'
import { Images } from '../../utils'
import styles from './style';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
import { savecrop } from '../../redux/actions/savecrop';
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { floor } from "react-native-reanimated";

const translationGetters = {
    // lazy requires (metro bundler does not support symlinks)
    en: () => require('../../assets/en-US.json'),
    hi: () => require('../../assets/hi.json'),
};
const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
);

class CropLockScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAlert: false,
            land_id: this.props.route.params.land_id,
            crop_id: this.props.route.params.crop_id,
            crop_name: this.props.route.params.crop_name,
            latitude: this.props.route.params.latitude,
            longitude: this.props.route.params.longitude,
            pincode: this.props.route.params.pincode,
            show:false,
        };
        console.log(this.state, 'yeh rhe ids')
        console.log(this.props.route.params, 'yahah hye log naye wale')
        this._getStorageValue();
    }
    async _getStorageValue() {
        var value = await AsyncStorage.getItem('token')
        if (value == null) {
            console.log(value)
            console.log(this.props.route.params.land_id, 'land id is here')
            //   this.props.navigation.replace('Home')
        }
        this.setState({ token: value });
        return value
    }
    onSubmitYes() {
        console.log(this.state)
        this.props.savecrop(this.state).then(async () => {
            console.log(this.props.savecrop1)
            // this.props.navigation.replace('CropStage', { crop_id: this.state.crop_id, land_id: this.props.route.params.land_id, latitude: this.state.latitude, longitude: this.state.longitude, pincode: this.state.pincode })
            this.props.navigation.replace('Home', {
                latitude: '',
                longitude: "",
                pincode: ''
            })
            this.setState({
                show:false,
            })
        })
       
       
    }
    onSubmitNo() {
        console.log(this.state)
        this.props.savecrop(this.state).then(async () => {
            console.log(this.props.savecrop1)
            // this.props.navigation.replace('CropStage', { crop_id: this.state.crop_id, land_id: this.props.route.params.land_id, latitude: this.state.latitude, longitude: this.state.longitude, pincode: this.state.pincode })
            this.props.navigation.replace('Lands')
            this.setState({
                show:false,
            })
        })
      
       
    }
    // showAlert = () => {
    //     this.setState({
    //         showAlert: true
    //     });
    // };
    // hideAlert = () => {
    //     this.setState({
    //         showAlert: false
    //     });
    //     this.props.navigation.replace('Home', {
    //         latitude: '',
    //         longitude: "",
    //         pincode: ''
    //     })
    // };
    // hideAlert1 = () => {
    //     this.setState({
    //         showAlert: false
    //     });
    //     this.props.navigation.replace('DashboardMap')
    // };
    render() {
        const { showAlert } = this.state;
        return (
            <View style={styles.container}>
                <Header {...this.props} back={true} />
                <ScrollView
                    // contentContainerStyle={styles.scrollWrapper}
                    showsVerticalScrollIndicator={false}>
                    <View style={styles.scrollWrapper}>
                        <View style={styles.docDetailedWrapper2}>
                            <View style={styles.middleWrapper}>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                                <Text style={{ textAlign: 'center', fontSize: 32, fontWeight: 'normal' }}>{translate('sure_lock_crop')} {this.state.crop_name} </Text>
                            </View>
                        </View>
                        <View style={styles.bottomBar}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home',{latitude: '',longitude: "", pincode: ''})}>
                                <Image source={Images.no} style={styles.searchIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({
                                        show: true,
                                    })
                                }}>
                              
                                <Image source={Images.yes} style={styles.searchIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* <AwesomeAlert
                        show={showAlert}
                        showProgress={false}
                        title="Alert"
                        message="Want to grow more Crops?"
                        closeOnTouchOutside={true}
                        closeOnHardwareBackPress={false}
                        showCancelButton={true}
                        showConfirmButton={true}
                        cancelText="   No   "
                        confirmText="   Yes   "
                        confirmButtonColor="#006631"
                        onCancelPressed={() => {
                            this.hideAlert1();
                        }}
                        onConfirmPressed={() => {
                            this.hideAlert();
                        }}
                    /> */}
                    {/*Modal Begin For Discription  */}
                    <Modal
                        transparent={true}
                        animationType='slide'
                        visible={this.state.show}>
                        <View style={{ backgroundColor: '#000000aa', height: height *1,justifyContent:'center',}}>
                            <TouchableOpacity
                                style={styles.testModel}
                                onPress={() => { this.setState({ show: false }) }}>
                                <View style={styles.header}>
                                    <Image source={Images.farmLogo} style={{ width: width * 0.65, height: height * 0.1, }} />
                                </View>
                                <View style={{ width: '80%', marginTop: '10%' }}>
                                    <Text style={{ color: '#006631' }}>Below is your Fram Name You can change it also.</Text>
                                </View>
                                <View style={{ marginTop: height * 0.02, }}>
                                    <View style={styles.formBox}>
                                        <Image source={Images.dummy} style={styles.searchIcon1} />
                                        <TextInput placeholderTextColor="#000"
                                            autoCapitalize='none'
                                            style={{ width: '75%' }}
                                            textAlign={'center'}
                                            placeholderTextColor={'#006631'}
                                            placeholder={'Noida Farm'}
                                        // onChangeText={farm_name => this.setState({ farm_name })}
                                        // value={this.state.farm_name}
                                        />
                                    </View>
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '10%' }}>
                                    <Text style={{ fontSize: 23, color: '#006631', fontWeight: 'bold' }}>Want to grow more Crops?</Text>
                                    <View style={styles.modal_bottomBar}>
                                        <TouchableOpacity  onPress={() => this.onSubmitNo()}> 
                                            <Image source={Images.no} style={styles.modal_yes_Icon} />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            
                                            onPress={() => this.onSubmitYes()}> 
                                            <Image source={Images.yes} style={styles.modal_yes_Icon} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    {/* Modal END */}
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        savecrop1: state.savecrop.savecrop,
    };
};

export default connect(mapStateToProps, {
    savecrop
})(CropLockScreen);
