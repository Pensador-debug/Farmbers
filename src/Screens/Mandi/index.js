import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils';
import styles from './style';
import Header from '../../Commons/Header';
import AsyncStorage from '@react-native-community/async-storage';
import { mandi } from '../../redux/actions/mandi';
import { connect } from 'react-redux';

class Mandi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mandi: [],
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
    this.props.mandi(token)
      .then(() => {
        console.log(this.props.mandi1, ' ye h response')
        this.setState({ mandi: this.props.mandi1 })
        console.log(this.state, ' ye bhi h response')
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <Header {...this.props} back={true} />
        <View style={styles.wrapper}>
          <View style={styles.upperWrapper}>
            <Text style={{ fontSize: 24, marginTop: 10, color: '#fff' }}>Buyers</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: '15%', }}>
          <View style={{ width: '50%', }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: '30%', color: '#006631' }}>{this.state.mandi[0]?.buyer_type}</Text>
            <Text style={{ fontSize: 10, fontWeight: 'bold', marginLeft: '10%', marginRight: 10, marginTop: 10 }}>{this.state.mandi[0]?.text}</Text>
          </View>
          <View style={{ width: '50%', }}>
            <Image source={{ uri: this.state.mandi[0]?.image }} style={{ width: width * 0.45, height: height * 0.25, borderWidth: 2, borderColor: '#006631', borderRadius: 10 }} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 40, }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: this.state.mandi[1]?.image }} style={{ width: width * 0.3, height: height * 0.2, marginLeft: 10, marginRight: 10, borderWidth: 2, borderColor: '#006631', borderRadius: 10 }} />
            <Text style={{ color: '#006631', fontWeight: 'bold', }}>{this.state.mandi[1]?.buyer_type}</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: this.state.mandi[2]?.image }} style={{ width: width * 0.3, height: height * 0.2, marginRight: 10, borderWidth: 2, borderColor: '#006631', borderRadius: 10 }} />
            <Text style={{ color: '#006631', fontWeight: 'bold', }}>{this.state.mandi[2]?.buyer_type}</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: this.state.mandi[3]?.image }} style={{ width: width * 0.3, height: height * 0.2, borderWidth: 2, borderColor: '#006631', borderRadius: 10 }} />
            <Text style={{ color: '#006631', fontWeight: 'bold', }}>{this.state.mandi[3]?.buyer_type}</Text>
          </View>
        </View>
        <View style={{ marginTop: '10%', borderWidth: 1, borderColor: '#006631', padding: 10, width: '90%', marginLeft: 20, backgroundColor: '#D3D3D3', justifyContent: 'center', alignItems: 'center', borderRadius: 5, flexDirection: 'row' }}>
          <Image source={Images.star} style={{ width: width * 0.05, height: height * 0.023, }} />
          <Text style={{ color: '#006631', fontWeight: 'bold', marginLeft: 3, marginRight: 3 }}>Ask for Premium version to Unlock this features</Text>
          <Image source={Images.star} style={{ width: width * 0.05, height: height * 0.023, }} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mandi1: state.mandi.mandi,
  };
};
export default connect(mapStateToProps, {
  mandi
})(Mandi);
