import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Dimensions,
  Image, FlatList, Alert
} from "react-native";
const { width, height } = Dimensions.get('window');

import { Images } from '../../utils'
import styles from './style';

import Header from '../../Commons/Header'
import { help } from '../../redux/actions/help';
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import call from 'react-native-phone-call';
// import AudioRecord from 'react-native-audio-record';

class HelpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      showAlert: false,
    };
    this._getStorageValue();
  }
  async _getStorageValue() {
    var value = await AsyncStorage.getItem('token')
    if (value == null) {
      console.log(value)
    }
    this.setState({ token: value });
    return value
  }
  onCall() {
    // if (!this.state.vehicle) {
    //   return;
    // }
    const args = {
      number: '9810903715',
      prompt: false
    }
    call(args).catch(console.error)
  }
  onSubmit() {
    if (this.state.message == '') {
      Alert.alert(
        'Farmbers',
        'Please enter your Query'
      )
    }
    else {
      console.log(this.state)
      this.props.help(this.state).then(async () => {
        console.log(this.props.help1)
        // this.props.navigation.replace('CropStage')
      })
      this.showAlert();
    }
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
    this.props.navigation.replace('Settings')
  };
  render() {
    return (
      <View style={styles.container}>
        <Header {...this.props} back={true} />
        <View style={styles.scrollWrapper}>
          <View style={styles.docDetailedWrapper2}>
            <View style={styles.middleWrapper}>
              <View style={{ width: '100%', height: '33%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.nameWrapper} >Need Help ?</Text>
              </View>
            </View>
            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', margin: 10, }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Enter Your Query :</Text>
              <TextInput
                placeholderTextColor="#000"
                autoCapitalize='none'
                multiline={true}
                maxHeight={120}
                textAlignVertical='top'
                style={styles.input1}
                underlineColorAndroid='#000'
                
                placeholder="Write your Problem"
                onChangeText={message => this.setState({ message })}
                value={this.state.message}
              />
            </View>
          </View>
          <View style={styles.bottomBar}>
            <TouchableOpacity onPress={() => this.onCall()} >
              <Image source={Images.call} style={styles.searchIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.start} title="Record" >
              <Image source={Images.mic} style={styles.searchIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onSubmit()}>
              <Image source={Images.sms} style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          title={'FARMBERS'}
          titleStyle={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}
          message={'Query Submitted Sucessfully'}
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
    help1: state.help.help,
  };
};

export default connect(mapStateToProps, {
  help
})(HelpScreen);
