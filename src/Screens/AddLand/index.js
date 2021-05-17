import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  ImageBackground, Animated, Alert, Modal
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './style';
import Header from '../../Commons/Header'
import MapView, { PROVIDER_GOOGLE, MarkerAnimated, Circle, Polygon, AnimatedRegion } from 'react-native-maps';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
import { magiccircle } from '../../redux/actions/magiccircle';
// import { saveland } from '../../redux/actions/saveland';
import { savemagiccircle } from '../../redux/actions/savemagiccircle';

import AwesomeAlert from 'react-native-awesome-alerts';
import * as geolib from 'geolib';

import { connect } from 'react-redux';

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  en: () => require('../../assets/en-US.json'),
  hi: () => require('../../assets/hi.json'),
};
const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

class AddLands extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingmap: true,
      showButton: false,
      allchecked: 0,
      loadingtitle: 'Please Wait',
      loadingdesc: "Checking if you are in a magic Circle",
      selectedCircle: '',
      show: false,
      showWarn: false,
      showAlert: false,
      // loadingSpl: true,
      submitable: false,
      latitudeDelta: 22.0,
      longitudeDelta: 22.0,
      latitude: this.props.route.params.latitude,
      longitude: this.props.route.params.longitude,
      original_latitude: this.props.route.params.latitude,
      original_longitude: this.props.route.params.longitude,
      pincode: this.props.route.params.pincode,
      loader: false,
      animating: false,
      message: "",
      alignsecond: false,
      loaderText1: 'Publishing Farmbers Circle.',
      initialRegion: {
        latitude: this.props.route.params.latitude,
        longitude: this.props.route.params.longitude,
        latitudeDelta: 22,
        longitudeDelta: 22
      },
      farm_name: '',
      magiccircle_id: '',
      show: false,
      // button: 0,
    };
  }
  componentDidMount() {
    this._getStorageValue();
    setTimeout(
      () => {
        this.setState({ align: 'flex-start' }, function () {
          this.setState({
            alignsecond: true,
          });
        }), this.animatedBox()
      },
      2000
    );
    setTimeout(
      () => {
        this.setState({ loaderText1: 'Publishing Farmbers Circle..' })
      },
      3000
    );
    setTimeout(
      () => {
        this.setState({ loaderText1: 'Publishing Farmbers Circle...' })
      },
      4000
    );
    setTimeout(
      async () => {
        this.setState({ loader: false })
        await AsyncStorage.setItem('FarmCircleloader', '1')
      }, 7000
    )
    this.animatedWidth = new Animated.Value(300)
    this.animatedHeight = new Animated.Value(300)
    this.getCurrentLocation();
    var response = this.checkValidity(this.state.latitude, this.state.longitude)
    if (response) {
      this.setState({ checkingmap: true, showButton: true, loadingtitle: 'Success', loadingdesc: 'Our system has assigned you a magic circle as per your location' })
      // this.showAlert()
    }
    else {
      this.setState({ checkingmap: true, showButton: true, loadingtitle: 'Please Select', loadingdesc: 'Please select one of the magic Circle as you do not belong to any' })
    }
  }
  animatedBox = () => {
    Animated.timing(this.animatedWidth, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: false
    }).start()
    Animated.timing(this.animatedHeight, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: false
    }).start()
  }
  async _getStorageValue() {
    var loader = await AsyncStorage.getItem('FarmCircleloader')
    if (loader != null) {
    }
    var value = await AsyncStorage.getItem('token')
    if (value == null) {
      console.log(value)
      //   this.props.navigation.replace('Home')
    }
    this.setState({ token: value });
    this.getData(value);
    return value
  }
  getData() {
    this.props.magiccircle(this.state)
      .then(() => {
        this.setState({ magiccircle: this.props.magiccircle1 })
        this.setState({ magiccircle_id: this.state.magiccircle[0].id })
      })
  }
  render() {
    if (this.state.loader == true) {
      return (<>{this.loaderRender()}</>)
    }
    else
      return (
        <>{this.contentRender()}</>
      )
  }
  async getCurrentLocation() {
    let region = {
      latitude: this.props.route.params.latitude,
      longitude: this.props.route.params.longitude,
      latitudeDelta: 25,
      longitudeDelta: 25
    };
    await this.setState({
      initialRegion: region
    });
  }
  goToInitialRegion() {
    console.log('bulaya hai to jana padega')
    let initialRegion = Object.assign({}, this.state.initialRegion);
    initialRegion["latitudeDelta"] = 0.5942;
    initialRegion["longitudeDelta"] = 0.5410;
    this.map.animateToRegion(initialRegion, 4000);
  }
  setDestination(coords) {
    const { destination } = this.props;
    const lat = coords.latitude;
    const long = coords.longitude;
    var is_valid = this.checkValidity(lat, long)
    if (is_valid) {
      var old_location = { latitude: this.state.original_latitude, longitude: this.state.original_longitude }
      var new_location = { latitude: lat, longitude: long }
      var dis = this.getDistance(old_location, new_location)
      console.log(dis)
      if (dis < 100)
        this.setState({
          latitude: lat, longitude: long
        })
      else
        this.setState({ submitable: false })
      this.renderMarker()
    }
    else
      this.setState({ submitable: false })
  }
  getDistance(old, newloc) {
    console.log('checking distance')
    var dis = geolib.getDistance(
      old,
      newloc,
    );
    console.log(dis)
    return dis / 1000;
  }
  checkCircle(e) {
    var coords = e.nativeEvent.coordinate;
    console.log(e.nativeEvent.coordinate)
    this.checkValidity(coords.latitude, coords.longitude)
  }
  checkValidity(lat, long) {
    var response = false
    var checkpoint = { latitude: lat, longitude: long }
    var circles = this.props.magiccircle1
    circles.forEach((element) => {
      var center = {
        latitude: Number(element.latitude) ? Number(element.latitude) : 0,
        longitude: Number(element.longitude) ? Number(element.longitude) : 0,
      }
      var status = geolib.isPointWithinRadius(
        checkpoint,
        center,
        17000
      );
      if (status) {
        this.setState({ selectedCircle: element.id })
        console.log(element.id, 'yaha h id jo select hua h...................')
        response = true
      }
    });
    if (response) {
      this.setState({ submitable: true })
      this.goToInitialRegion()
    }
    else {
      this.setState({ allchecked: 1 })
    }
    return response
  }
  renderCircle() {
    var centers = (this.props.magiccircle1)
    var herodata = centers.map((element, i) => {
      var coords = element;
      if (typeof Number(coords.latitude) == 'number') {
        // console.log(Number(coords[0]), Number(coords[1]), 'shashank')
        return < MapView.Circle
          key={coords.id}
          center={{
            latitude: Number(coords.latitude) ? Number(coords.latitude) : 0,
            longitude: Number(coords.longitude) ? Number(coords.longitude) : 0,
          }}
          radius={17000}
          strokeColor="#006631"
          strokeWidth={1}
          fillColor={this.state.selectedCircle == coords.id ? "rgba(0, 110, 49,0.5)" : "rgba(0, 110, 49,0.1)"}
        />
      }
      else
        return;
    })
    return <>{herodata}</>
  }
  renderMarker() {
    return <MarkerAnimated
      ref={(ref) => { this.marker = ref; }}
      draggable
      onDragEnd={(t, map, coords) => this.setDestination(t.nativeEvent.coordinate)}
      // onDragStart={() => { console.log('hi') }}
      coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }}
      title={'My Farm'}
      description={'drag to move marker'}
    >
    </MarkerAnimated >
  }
  renderButton(lat, long) {
    if (this.state.submitable)
      return (<>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.boxBtn2}
          onPress={() => this.Onsubmit()}
        >
          <Text style={styles.btnText}>{translate('submit')}</Text>
        </TouchableOpacity>
      </>
      )
    else
      return (<>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.boxBtn3}
        >
          <Text style={styles.btnText}>{translate('submit')}</Text>
        </TouchableOpacity>
      </>
      )
  }
  // Onsubmit() {
  //   console.log(this.state)
  //     this.props.saveland(this.state).then(async () => {
  //       console.log(this.props.saveland1)
  //       if (this.props.saveland1 != 'land already exists') {
  //         this.setState({ land_id: this.props.saveland1.land_id })
  //         this.setState({ message: "Farmbers Circle selected" })
  //       }
  //       else {
  //         this.setState({ message: this.props.saveland1 })
  //       }
  //       console.log(this.state.land_id, 'yaha h id')
  //     })
  //     this.showAlert();
  //   }
  Onsubmit() {
    console.log(this.state)
    this.props.savemagiccircle(this.state).then(async () => {
      console.log(this.props.savemagiccircle1)
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
    this.props.navigation.replace('Home', { latitude: this.state.original_latitude, longitude: this.state.original_longitude, pincode: this.state.pincode })
    // console.log(this.state.land_id, 'yha h land id')
  };
  hideMessage = () => {
    this.setState({
      checkingmap: false,
    });
    this.goToInitialRegion()
    // console.log(this.state.land_id, 'yha h land id')
  };
  contentRender() {
    var mapStyle = [
      { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#F9E9D0" }] },
    ];
    return (
      <View style={styles.container}>
        <Header {...this.props} back={true} />
        <View style={styles.wrapper}>
          <View style={styles.upperWrapper}>
            <Text style={{ fontSize: 24, marginTop: 10, color: '#fff' }}>Select Farmbers Circle</Text>
          </View>
          <TouchableOpacity style={{ position: 'absolute', left: '87%', top: '40%' }}
            onPress={() => { this.setState({show: true, })}}>
            <Image source={Images.infoIcon} style={styles.infoIcon} />
          </TouchableOpacity>
        </View>
        <View style={{ width: width * 1, justifyContent: 'center', alignItems: 'center', height: height * 0.7, backgroundColor: '#A0A0A0' }} >
          <MapView.Animated
            region={this.state.mapRegion}
            initialRegion={this.state.initialRegion}
            showsTraffic={false}
            provider={PROVIDER_GOOGLE}
            followsUserLocation={true}
            showsMyLocationButton={true}
            showsCompass={true}
            showsUserLocation={true}
            paddingAdjustmentBehavior={'always'}
            mapPadding={{
              top: 50,
              right: 50,
              bottom: 100,
              left: 100
            }}
            style={styles.maparea}
            onPress={(e) => { this.checkCircle(e) }}
            ref={ref => this.map = ref}
          >
            {this.renderCircle()}
          </MapView.Animated>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '7%' }}>
          {this.renderButton()}
        </View>
        <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          title={'FARMBERS'}
          titleStyle={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}
          message={'Magic Circle Selected Sucessfully'}
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
        <AwesomeAlert
          show={this.state.checkingmap}
          showProgress={true}
          title={this.state.loadingtitle}
          message={this.state.loadingdesc}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={true}
          showConfirmButton={this.state.showButton}
          confirmText="Okay"
          confirmButtonColor="#006631"
          showCancelButton={false}
          onConfirmPressed={() => {
            this.hideMessage();
          }}
        />
        {/*Modal Begin For Discription  */}
        <Modal
          transparent={true}
          animationType='slide'
          visible={this.state.show}>
          <View style={{ backgroundColor: '#000000aa', height: height * 1, justifyContent: 'center', }}>
            <TouchableOpacity
              style={styles.testModel}
              onPress={() => { this.setState({ show: false }) }}>
              <View style={styles.header}>
                <Image source={Images.farmLogo} style={{ width: width * 0.65, height: height * 0.1, }} />
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
        {/* Modal END */}
      </View>
    );
  }
  loaderRender() {
    const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight, alignItems: 'center', justifyContent: 'center' }
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          marginHorizontal: 40,
          justifyContent: 'center'
        }}>
        <Animated.View style={[animatedStyle]}>
          <Image source={Images.farmLogo} style={{ width: width * 0.65, height: height * 0.1, }} />
        </Animated.View>
        {!this.state.alignsecond ? null : (
          this.renderText()
        )}
      </View>
    );
  }
  renderText() {
    return (<View style={{ margin: 10, alignItems: 'center', marginTop: 50 }}>
      <Text
        style={{ color: '#006631', fontSize: 20, fontWeight: 'bold' }}>
        {this.state.loaderText1}
      </Text>
    </View>)
  }
}
const mapStateToProps = (state) => {
  return {
    magiccircle1: state.magiccircle.magiccircle,
    savemagiccircle1: state.savemagiccircle.savemagiccircle,
  };
};

export default connect(mapStateToProps, {
  magiccircle,
  savemagiccircle
})(AddLands);
