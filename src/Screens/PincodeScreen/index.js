import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Dimensions,
  Image, PermissionsAndroid
} from "react-native";
const { width, height } = Dimensions.get('window');
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

import { Images } from '../../utils'

import styles from './style';
import axios from 'axios'
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  en: () => require('../../assets/en-US.json'),
  hi: () => require('../../assets/hi.json'),
};
const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);
class PincodeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      error: null,
      pincode2: '',
      pincode: null,
    }
    Geocoder.init("AIzaSyAahyvaPX2TNgAFrWBuZ8wEWerbgex4YRw");
    this.requestPermissions()
  }
  async getLocation() {
    console.log('hi')
    Geolocation.getCurrentPosition(
      async (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        var url = 'https://us1.locationiq.com/v1/reverse.php?key=pk.074771bbfc0b9340c8c037f569cbde1d&format=json&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude
        // var url = "http://www.mapquestapi.com/geocoding/v1/reverse?key=tLwAB3CQtAjCeieRaR3JkKXRtL6GJac6&location=" + position.coords.latitude + ","+ position.coords.longitude +"&includeRoadMetadata=true&includeNearestIntersection=true"
        console.log(url)
        await axios
          .get(url)
          .then((response) => {
            console.log(response.data.address.postcode);
            this.setState({
              pincode: response.data.address.postcode,
            })
            console.log(this.state)
          })
          .catch((error) => {
            console.log(error);
          });
      },
      (error) => {
        // See error code charts below.
        this.setState({
          error: error.message
        }),
          console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 36000000 }
    );
  }
  async getCoordinates() {
    // this.setState({
    //   latitude: position.coords.latitude,
    //   longitude: position.coords.longitude,
    // });
    var url = 'https://us1.locationiq.com/v1/search.php?key=pk.074771bbfc0b9340c8c037f569cbde1d&q=' + this.state.pincode + '&format=json'
    // var url = "http://www.mapquestapi.com/geocoding/v1/reverse?key=tLwAB3CQtAjCeieRaR3JkKXRtL6GJac6&location=" + position.coords.latitude + ","+ position.coords.longitude +"&includeRoadMetadata=true&includeNearestIntersection=true"
    console.log(url)
    await axios
      .get(url)
      .then((response) => {
        console.log(response.data[0].lat);
        this.setState({
          latitude: Number(response.data[0].lat),
          longitude: Number(response.data[0].lon),
        });
        console.log(this.state)
      })
      .catch((error) => {
        console.log(error);
      });

  }
  async componentDidMount() {
    this.getLocation()
  }
  submitPincode() {
    this.getCoordinates()
      .then(() => {
        this.props.navigation.navigate('AddLand', { latitude: this.state.latitude, longitude: this.state.longitude, pincode: this.state.pincode })

      })
  }
  async requestPermissions() {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
      });
    }
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.header}>
            <Image source={Images.farmLogo} style={{ width: width * 0.65, height: height * 0.1, }} />
          </View>
          <View style={{ marginTop: height * 0.25, alignItems: 'center', }}>
            <View style={styles.formBox}>
              <Image source={Images.pincode} style={styles.searchIcon} />



              {/* <TextInput placeholderTextColor="#000" keyboardType='numeric'
                style={styles.input} value={this.state.pincode} placeholder={translate('enterpincode')} /> */}



              <TextInput
                style={styles.input}
                name={'Pincode'}
                onChangeText={(pincode) => {
                  console.log(this.state.pincode)
                  this.setState({ pincode })
                }}
                keyboardType={'number-pad'}
                maxLength={6}
                value={this.state.pincode}
                defaultValue={this.state.pincode2}
                placeholder={'Fetching Pincode...'}
              // underlineColorAndroid='#000'

              />







            </View>
          </View>
          <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 10, }}>
            <Text style={{ color: 'grey' }}>{translate('pincodehint')}</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.06 }}>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.boxBtn2}
              onPress={() => { this.submitPincode() }}>
              <Text style={styles.btnText}> CONFIRM </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
export default PincodeScreen;
