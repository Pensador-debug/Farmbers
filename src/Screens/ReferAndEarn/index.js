import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image, ToastAndroid,
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils';
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';
import { profile } from '../../redux/actions/profile';
import { connect } from 'react-redux';
import Clipboard from '@react-native-community/clipboard';
import Share from 'react-native-share';
import Header from '../../Commons/Header'



const myCustomShare = async (content_desc) => {

  const shareOptions = {
    message: "हेलो दोस्त, कृषि को नए तरीके से करे ार अपने आस पास के जमीनों के आधार  पे फसल लगाए ार इस तरीके की पूरी जानकारी पाए Farmbers ऐप से। । "+ content_desc +" मैं Farmbers ऐप का उपयोग कर रहा हूं। आप Farmbers ऐप को इस लिंक से डाउनलोड कर सकते हैं ।https://farmbers.com"
    // urls:''  //for sharing multiple Image files...//
  };
  try {
    const ShareResponse = await Share.open(shareOptions);
    console.log(JSON.stringify(ShareResponse)); // to check which platform is used to share...//
  } catch (error) {
    console.log('Error =>', error);
  }
};
class ReferAndEarn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this._getStorageValue();
  }
  async _getStorageValue() {
    var value = await AsyncStorage.getItem('token')
    if (value == null) {
      //   this.props.navigation.replace('Home')
    }
    this.getData(value);
    this.setState({ token: value });
    return value
  }
  getData(token) {
    this.props.profile(token)
      .then(() => {
        this.setState({ profile: this.props.profile1 })
      })
  }
  showToast = () => {
    ToastAndroid.show('Refferal code copied !', ToastAndroid.SHORT);
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.upperBar}> */}
          {/* <View>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={Images.backIcon} style={styles.backContainerStyle} />
            </TouchableOpacity>
          </View>
          <View style={styles.logoContainer}>
            <Image source={Images.farmLogo} style={styles.logoStyle} />
          </View>
          <View style={{ position: 'absolute', left: '70%', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() =>
              this.props.navigation.navigate('NotificationScreen')}>
              <Image source={Images.bell} style={styles.bellIcon1} />
            </TouchableOpacity>
            <View>
              <TouchableOpacity onPress={() =>
                this.props.navigation.navigate('Profile')}>
                <Image source={Images.profilePic} style={styles.profileIcon} />
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 8 }}>
              <TouchableOpacity onPress={() =>
                this.props.navigation.navigate('ReferAndEarn')}>
                <Image source={Images.refer} style={styles.bellIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View> */}
         <Header {...this.props}  back={true}/>
        <View style={styles.wrapper}>
          <View style={styles.upperWrapper}>
            <Text style={{ fontSize: 24, marginTop: 10, color: '#fff' }}>Refer&Earn</Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Image
            source={Images.invitation}
            style={{ height: height * 0.22, width: height * 0.3 }}
          />
        </View>
        <View style={{}}>
          <View style={styles.docDetailedWrapper2}>
            <View style={{ marginLeft: 20 }}>
              <Image source={Images.wallet} style={styles.bellIcon1} />
            </View>
            <View style={styles.docNameWrapper}>
              <Text style={styles.docNameText}>
                Share your refferal link via SMS/Email/Whatapp. You will earn
                more App Points.
                </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '5%',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                flexDirection: 'column',
                width: '18%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.reffrSignup}
                  style={{ height: height * 0.04, width: height * 0.045 }}
                />
              </View>
              <Text
                style={{ textAlign: 'center', fontSize: 10, marginTop: 15 }}>
                Invite Your Friends To Signup
                </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                width: '18%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '100%',
                  height: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.reffrRegistr}
                  style={{ height: height * 0.05, width: height * 0.035 }}
                />
              </View>
              <Text
                style={{ textAlign: 'center', fontSize: 10, marginTop: 20 }}>
                Your Friend get Registered
                </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                width: '18%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '100%',
                  height: 23,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 8,
                }}>
                <Image
                  source={Images.refferReward}
                  style={{ height: height * 0.05, width: height * 0.045 }}
                />
              </View>
              <Text
                style={{ textAlign: 'center', fontSize: 10, marginTop: 15 }}>
                You will be Rewarded with more Points
                </Text>
            </View>
            {/* <Text style={{ width: '18%', textAlign: 'center', fontSize: 10 }}>Your Friend get Product from US</Text> */}
            {/* <Text style={{ width: '18%', textAlign: 'center', fontSize: 10 }}>You and Your Friend Rewarded</Text> */}
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '5%',
            }}>
            <Text
              style={{
                width: '50%',
                textAlign: 'center',
                fontSize: 14,
                fontWeight: 'bold',
                color: 'green',
                marginTop: 10
              }}>
              YOUR REFFERAL CODE
              </Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.boxBtn}>
              <Text style={styles.btnText}>
                {this.props.profile1.mobile}
              </Text>
            </View>
            {/* <TouchableOpacity
                            activeOpacity={1}
                            style={{marginTop:15}}
                             >
                            <Text style={styles.btnText1}>TAP TO COPY</Text>
                        </TouchableOpacity> */}
            <TouchableOpacity
              style={{ marginTop: 15 }}
              onPress={() => {
                Clipboard.setString(this.state.profile.mobile);
                this.showToast();
              }}
            >
              <View>
                <Text style={styles.btnText1}>TAP TO COPY</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 25,
            }}>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.boxBtn2}
              onPress={() => {
                console.log(this.state.profile.mobile, 'shashank23')
                myCustomShare(this.state.profile.mobile)
              }}
            >
              {/* style={styles.boxBtn2} */}
              <Text style={{ color: '#fff' }}>REFER NOW</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 40,
              marginTop: '25%',
            }}
            onPress={() =>
              this.props.navigation.navigate('TermsAndConditions')
            }>
            <Text style={styles.btnText2}>Terms & Conditions</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    profile1: state.profile.profile,
  };
};
export default connect(mapStateToProps, {
  profile,
})(ReferAndEarn);
