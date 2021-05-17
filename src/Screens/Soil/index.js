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
  FlatList,
  Modal,
  I18nManager,
  RefreshControl,
  fetchData,
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils';
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';
import { soildata } from '../../redux/actions/soildata';
import { connect } from 'react-redux';

const Data = [
  {
    id: '1',
    name: 'Lok Shabha',
    image: Images.parlmnt
  },
  {
    id: '2',
    name: 'Lok Shabha',
    image: Images.parlmnt
  },
];
class Soil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      land_id: this.props.route.params.land_id
    }
    console.log(this.state.land_id,'ye h land_id')
    this._getStorageValue();
  } 

  async _getStorageValue() {
    
  
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
    this.props.soildata(this.state)
      .then(() => {
        console.log(this.props.soildata1, ' ye h response')
        this.setState({ soildata: this.props.soildata1 })
      })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperBar}>
          <View>
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
        </View>
        <View style={styles.wrapper}>
          <View style={styles.upperWrapper}>
            <Text style={{ fontSize: 24, marginTop: 10, color: '#fff' }}>Soil Status</Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
          {/* <FlatList
            // style=
            // {{ marginBottom: '14%' }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginTop: '2%', paddingBottom: '55%' }}
            data={Data}
            renderItem={({ item }) => (
              <> */}
                <View style={styles.docDetailedWrapper1}>
                  <View
                    style={[styles.docSpecsWrapper, { marginTop: 20 }]}>
                    <View style={styles.docNameWrapper}>
                    <View style={{ flexDirection: 'row',backgroundColor:'#006631',alignItems:'center',paddingTop:10,paddingBottom:8,marginTop:-23,width:'91.5%',marginBottom:10,borderTopLeftRadius:10,borderTopRightRadius:10,paddingLeft:10}}>
                        <View style={{ flexDirection: 'column', width: '60%',}}>
                          <Text numberOfLines={1} style={{ fontSize: width * 0.045, paddingBottom: 1, fontWeight: 'bold', width: '80%',color:'#fff'  }}>Farm: NoidaFarm </Text>
                         
                        </View>
                        <View style={{ flexDirection: 'column', width: '50%', }}>
                          <Text numberOfLines={1} style={{ fontSize: width * 0.045, paddingBottom: 1, fontWeight: 'bold', width: '80%',color:'#fff'  }}>Village: Nurpur</Text>
                          
                        </View>
                      </View>
                      <View style={{ marginTop: 3, flexDirection: 'row',marginLeft:15,marginRight:15 }}>
                        <View style={{ flexDirection: 'column', width: '60%' }}>
                          <Text numberOfLines={1} style={{ fontSize: width * 0.035, paddingBottom: 1, fontWeight: 'bold', width: '80%', color: 'green' }}>Carbon Density(g/dm3) :</Text>
                          <Text numberOfLines={1} style={{ fontSize: width * 0.04, paddingBottom: 1, fontWeight: 'bold', width: '80%', }}> 16'C</Text>
                        </View>
                        <View style={{ flexDirection: 'column', width: '50%', }}>
                          <Text numberOfLines={1} style={{ fontSize: width * 0.035, paddingBottom: 1, fontWeight: 'bold', width: '80%', color: 'green' }}>Clay content(g/kg):</Text>
                          <Text numberOfLines={1} style={{ fontSize: width * 0.04, paddingBottom: 1, fontWeight: 'bold', width: '80%', }}> 59%</Text>
                        </View>
                      </View>
                      <View style={{ marginTop: '12%', flexDirection: 'row', marginLeft:15,marginRight:15}}>
                        <View style={{ flexDirection: 'column', width: '50%' }}>
                          <Text numberOfLines={1} style={{ fontSize: width * 0.035, paddingBottom: 1, fontWeight: 'bold', width: '80%', color: 'green' }}>Sand (g/kg) :</Text>
                          <Text numberOfLines={1} style={{ fontSize: width * 0.04, paddingBottom: 1, fontWeight: 'bold', width: '80%', }}>8km/h</Text>
                        </View>
                        <View style={{ flexDirection: 'column', width: '50%', marginLeft: '9%' }}>
                          <Text numberOfLines={1} style={{ fontSize: width * 0.035, paddingBottom: 1, fontWeight: 'bold', width: '80%', color: 'green' }}>Silt (g/kg) :</Text>
                          <Text numberOfLines={1} style={{ fontSize: width * 0.04, paddingBottom: 1, fontWeight: 'bold', width: '80%', }}> 59%</Text>
                        </View>
                      </View>
                      <View style={{ marginTop: '12%', flexDirection: 'row', marginLeft:15,marginRight:15}}>
                        <View style={{ flexDirection: 'column', width: '50%' }}>
                          <Text numberOfLines={1} style={{ fontSize: width * 0.035, paddingBottom: 1, fontWeight: 'bold', width: '80%', color: 'green' }}>Nitrogen (cg/kg) :</Text>
                          <Text numberOfLines={1} style={{ fontSize: width * 0.04, paddingBottom: 1, fontWeight: 'bold', width: '80%', }}>8km/h</Text>
                        </View>
                        <View style={{ flexDirection: 'column', width: '50%', marginLeft: '9%' }}>
                          <Text numberOfLines={1} style={{ fontSize: width * 0.035, paddingBottom: 1, fontWeight: 'bold', width: '80%', color: 'green' }}>pH water(pH) :</Text>
                          <Text numberOfLines={1} style={{ fontSize: width * 0.04, paddingBottom: 1, fontWeight: 'bold', width: '80%', }}> 59%</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              {/* </>
            )}
            keyExtractor={item => item.id}
          /> */}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    soildata1: state.soildata.soildata,
  };
};
export default connect(mapStateToProps, {
  soildata
})(Soil);
