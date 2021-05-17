import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList, PermissionsAndroid
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils';
import styles from './style';
import Header from '../../Commons/Header'
import axios from 'axios'
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import AsyncStorage from '@react-native-community/async-storage';
import { usercrops } from '../../redux/actions/usercrops';
import { connect } from 'react-redux';
const Data = [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
];
class Lands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      error: null,
      crop_id: '',
      usercrops:[]
    }
    Geocoder.init("AIzaSyAahyvaPX2TNgAFrWBuZ8wEWerbgex4YRw");
    this.requestPermissions()
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
    this.props.usercrops(token)
      .then(() => {
        console.log(this.props.usercrops1, ' ye h usercrop response')
        this.setState({ usercrops: this.props.usercrops1 })

      })
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
            console.log(response.data.address.postcode, 'yeh h pincode');
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
  async componentDidMount() {
  
    this.getLocation()
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
  SampleFunction = () => {
    // Alert.alert("Floating Button Clicked");
    this.props.navigation.navigate('AddLand', { latitude: this.state.latitude, longitude: this.state.longitude, pincode: this.state.pincode })
  }
  render() {
    return (
      <View style={styles.container}>
        <Header {...this.props} back={true} />
        <View style={styles.wrapper}>
          <View style={styles.upperWrapper}>
            <Text style={{ fontSize: 24, marginTop: 10, color: '#fff' }}>Crops</Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', }}>



          {this.state.usercrops.length > 0 ?
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ marginTop: '2%', paddingBottom: '55%' }}
              data={this.state.usercrops}
              renderItem={({ item }) => (
                <>
                  <View style={styles.cardDetailedWrapper}>
                    <View style={styles.docNameWrapper}>
                      <View style={{ flexDirection: 'row', backgroundColor: '#006631', alignItems: 'center', paddingTop: 10, paddingBottom: 15, width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingLeft: 10 }}>
                        <View style={{ flexDirection: 'column', width: '60%', }}>
                          <Text numberOfLines={1} style={{ fontSize: width * 0.045, paddingBottom: 1, fontWeight: 'bold', width: '80%', color: '#fff' }}>Farm:{item.land_name} </Text>
                        </View>
                        <View style={{ flexDirection: 'column', width: '50%', }}>
                          <Text numberOfLines={1} style={{ fontSize: width * 0.045, paddingBottom: 1, fontWeight: 'bold', width: '80%', color: '#fff' }}>Village: {item.viallge}</Text>
                        </View>
                      </View>
                      <View >
                        <Image source={{ uri: item.crop_image }} style={{ width: '100%', height: height * 0.2 }} />
                      </View>
                      <View style={{ flexDirection: 'row', marginTop: '2%', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', marginTop: 5, marginLeft: 15 }}>
                          <Text style={{}}>
                            <Text numberOfLines={1} style={{ fontSize: width * 0.045, paddingBottom: 1, fontWeight: 'bold', width: '80%', color: 'green' }}>Crop :</Text>
                            <Text numberOfLines={1} style={{ fontSize: width * 0.04, paddingBottom: 1, fontWeight: 'bold', width: '80%', }}> {item.crop_name}</Text>
                          </Text>
                          <TouchableOpacity style={styles.boxBtn} onPress={() => this.props.navigation.navigate('CropListScreen', { crop_id: item.crop_id })}>
                            <Text numberOfLines={1} style={{ fontSize: width * 0.03, paddingBottom: 1, color: '#000', }}>Know more </Text>
                            <Image source={Images.forward} style={styles.farwardIcon} />
                          </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'column', marginTop: 5, marginRight: 15 }}>
                          <Text style={{}} >
                            <Text numberOfLines={1} style={{ fontSize: width * 0.045, paddingBottom: 1, fontWeight: 'bold', width: '80%', color: 'green' }}>Soil Type :</Text>
                            <Text numberOfLines={1} style={{ fontSize: width * 0.04, paddingBottom: 1, fontWeight: 'bold', width: '80%', }}> {item.soil_type}</Text>
                          </Text>
                          <TouchableOpacity style={styles.boxBtn1} onPress={() => this.props.navigation.navigate('Soil', { land_id: item.user_land_id })}>
                            <Text numberOfLines={1} style={{ fontSize: width * 0.03, paddingBottom: 1, color: '#000', }}>Know more </Text>
                            <Image source={Images.forward} style={styles.farwardIcon} />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </>
              )}
              keyExtractor={item => item.id}
            />
            :
            <>
              <View style={styles.docDetailedWrapper3}>
                <View style={styles.docNameWrapper1}>
                <Image source={Images.farmLogo} style={{ width: width * 0.3, height: height * 0.05, }} />
                  <Text style={styles.docNameText}>
                    !!! No Crop Found !!!
                  </Text>
                  <Text style={{color:'#006631'}}>
                   Please Add Crop By Clicking ADD Button
                  </Text>
                </View>
              </View>
            </>}



        </View>
        {/* <View style={styles.MainContainer}> */}
        <TouchableOpacity activeOpacity={1} onPress={this.SampleFunction} style={styles.TouchableOpacityStyle} >
          <Image source={Images.add}
            style={styles.FloatingButtonStyle} />
          {/* <Text>Add</Text> */}
        </TouchableOpacity>
        {/* </View> */}
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    usercrops1: state.usercrops.usercrops,
  };
};
export default connect(mapStateToProps, {
  usercrops
})(Lands);

