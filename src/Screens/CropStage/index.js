import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Dimensions,
  Image, Picker, FlatList, Animated,
  Modal,
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils'
import styles from './style';
import AwesomeAlert from 'react-native-awesome-alerts';

import Header from '../../Commons/Header';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

import AsyncStorage from '@react-native-community/async-storage';
import { cropstage } from '../../redux/actions/crop_stage';
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

class CropStage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showWarn: false,
      showAlert: false,
      // loadingSpl: true,
      loader: true,
      animating: false,
      alignsecond: false,
      loaderText1: 'Publishing DDCLM.',
      loaderText2: '',
      crop_id: this.props.route.params.crop_id,
      land_id: this.props.route.params.land_id,
      latitude:this.props.route.params.latitude,
      longitude:this.props.route.params.longitude,
      pincode:this.props.route.params.pincode,
      modeltitle: '',
      modeldesc: ''
    };
    console.log(this.props.route.params.latitude,this.props.route.params.longitude,this.props.route.params.pincode,'yahah hye log naye wale')
    console.log(this.state.land_id, this.state.crop_id, 'yeh rhe ids')
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
        this.setState({ loaderText1: 'Publishing DDCLM..' })
      },
      3000
    );
    setTimeout(
      () => {
        this.setState({ loaderText1: 'Publishing DDCLM...' })
      },
      4000
    );
    setTimeout(
      () => {
        this.setState({ loaderText1: 'Publishing DDCLM...' })
        this.setState({ loaderText2: '(Dynamic Digital Cropping Lifecycle Management)' })
      },
      5000
    );
    setTimeout(
      async () => {
        this.setState({ loader: false })
        await AsyncStorage.setItem('DDCLMloader', '1')
      }, 7000
    )
  }
  // componentDidMount() {
  //   this.showSpl();
  // }
  componentDidMount() {
    this.animatedWidth = new Animated.Value(300)
    this.animatedHeight = new Animated.Value(300)
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
    var loader = await AsyncStorage.getItem('DDCLMloader')
    console.log(loader, 'shashanks')
    if (loader != null) {
      // this.setState({ loader: false })
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
    this.props.cropstage(this.state)
      .then(() => {
        console.log(this.props.cropstage1, ' ye h response')
        this.setState({ cropstage: this.props.cropstage1 })
      })
  }
  // showSpl = () => {
  //   this.splTimeout = setTimeout(() => {
  //     this.setState({ loadingSpl:false, });
  //   }, 5000);
  // }
  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };
  hideAlert = () => {
    this.setState({
      showAlert: false
    });
    this.props.navigation.replace('AddLand',{latitude: this.state.latitude, longitude: this.state.longitude,pincode:this.state.pincode})
  };
  hideAlert1 = () => {
    this.setState({
      showAlert: false
    });
    this.props.navigation.replace('DashboardMap')
  };
  // render() 
  // // {
  // //   const {showAlert} = this.state;
  // //   if(this.state.loadingSpl) {
  // //     return <SplashDDCLM/>
  // //   }
  render() {
    if (this.state.loader == true) {
      return (<>{this.loaderRender()}</>)
    }
    else
      return (
        <>{this.contentRender()}</>
      )
  }
  contentRender() {
    const { showAlert } = this.state;
    return (
      <View style={styles.container}>
        <Header {...this.props} back={true} />
        <ScrollView
          // contentContainerStyle={styles.scrollWrapper}
          showsVerticalScrollIndicator={false}>
          <View style={styles.scrollWrapper}>
            <View style={{ marginTop: height * 0.05, margin: 10 }}>
              <FlatList
                // style=
                // {{ marginBottom: '14%' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ marginTop: '2%', paddingLeft: 5 }}
                data={this.state.cropstage}
                // data={Data}
                renderItem={({ item }) => (
                  <>
                    <View style={[styles.formBox, { backgroundColor: '#D3D3D3' }]}>
                      <View style={{ padding: 10, justifyContent: 'center', backgroundColor: '#006631', borderRadius: 100, minWidth: height * 0.075, minHeight: height * 0.075, alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>{item.month}</Text>
                        <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}>{item.dateRange}</Text>
                      </View>
                      <TouchableOpacity style={styles.input} onPress={() => {
                        this.setState({
                          show: true,
                          modeltitle: item.stage_name,
                          modeldesc: item.stage_desc,
                        })
                      }}>
                        <Text numberOfLines={1} style={{ fontSize: 18, }} >{item.stage_name}</Text>
                        {/* <Text style={{ fontSize: 10 }} >{item.date}</Text> */}
                      </TouchableOpacity>
                    </View>
                  </>
                )}
                keyExtractor={item => item.id}
              />
            </View>
            {/*Modal Begin For Discription  */}
            <Modal
              transparent={true}
              animationType='slide'
              visible={this.state.show}>
              <View style={{ backgroundColor: '#000000aa', height: height * 1 }}>
                <TouchableOpacity
                  style={styles.testModel}
                  onPress={() => { this.setState({ show: false }) }}
                >
                  <View style={styles.middleWrapper1}>
                    <View style={{ width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={styles.nameWrapper} >{this.state.modeltitle}</Text>
                    </View>
                  </View>
                  <View style={{ justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                    <Text style={{ textAlign: 'left', fontSize: 18 }}>{this.state.modeldesc}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Modal>
            {/* Modal END */}
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.boxBtn2}
                // onPress={() => this.props.navigation.navigate('DashboardMap')}
                onPress={() => {
                  this.showAlert();
                }}>
                <Text style={styles.btnText}> DONE </Text>
              </TouchableOpacity>
              <AwesomeAlert
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
              />
            </View>
            {/* <View style={styles.downWrapper}>
                        </View> */}
          </View>
        </ScrollView>
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
    return (<View style={{ margin: 10, alignItems: 'center', justifyContent: 'center', marginTop: 50, width }}>
      <Text
        style={{ color: '#006631', fontSize: 20, fontWeight: 'bold' }}>
        {this.state.loaderText1}
      </Text>
      <Text
        style={{ color: '#006631', fontSize: 16, fontWeight: 'bold', marginTop: 15, width: '100%', marginLeft: '10%' }}>
        {this.state.loaderText2}
      </Text>
    </View>)
  }
}

const mapStateToProps = (state) => {
  return {
    cropstage1: state.cropstage.cropstage,
  };
};
export default connect(mapStateToProps, {
  cropstage
})(CropStage);
