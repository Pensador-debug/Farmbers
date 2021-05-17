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
import Header from '../../Commons/Header';
import AsyncStorage from '@react-native-community/async-storage';
import { weather } from '../../redux/actions/weather';
import { connect } from 'react-redux';
const Data = [
  {
    id: '1',
    time: 'Now',
    degree: '20',
    windspeed: '6.2km/h'
  },
  {
    id: '2',
    time: '4.40',
    degree: '25',
    windspeed: '7.2km/h'
  },
  {
    id: '3',
    time: '5.40',
    degree: '28',
    windspeed: '8.2km/h'
  },
  
];
class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
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
    this.props.weather(token)
      .then(() => {
        console.log(this.props.weather1 ,' ye h response')
        this.setState({ weather: this.props.weather1 })
      })
  }
  render() {
    return (
      <View style={styles.container}>
        
          <Header {...this.props}  back={true}/>
        <View style={styles.wrapper}>
          <View style={styles.upperWrapper}>
            <Text style={{ fontSize: 20, marginTop: 10, color: '#fff' }}>Weather Information</Text>
          </View>
        </View>
        <KeyboardAvoidingView behavior="padding">
          <ScrollView
            contentContainerStyle={styles.scrollWrapper}
            showsVerticalScrollIndicator={false}>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 45, fontWeight: 'bold', marginTop: '8%' }}> {this.state.weather.temperature}</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: '1%' }}>{this.state.weather.weather_type}</Text>
              </View>
              <View style={styles.docDetailedWrapper1}>
              <FlatList style={{margin:'5%' }}
              
                showsHorizontalScrollIndicator={false}
                data={this.state.weather.threedays}
                renderItem={({ item, index }) => (
                  <>
                   <View style={{flexDirection: 'row' }}>
                      <Text numberOfLines={1} style={{  fontSize: width * 0.04, paddingBottom: 10, fontWeight: 'bold', width: '80%', color: 'green' }}>{item.title} : {item.weather_type}</Text>
                      <Text numberOfLines={1} style={{  fontSize: width * 0.04, paddingBottom: 1, fontWeight: 'bold', width: '80%', left: '75%', color: 'green' }}>{item.temperature}'C</Text>
                    </View>
                  
                   
                  </>
                )}
                keyExtractor={item => item.id}
              />
                
                
                   
              
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height * 0.04 }}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.boxBtn2}
                  // onPress={() => this.props.navigation.navigate('Dashboard')}
                  >
                  <Text style={styles.btnText}> 5-Day Forcast </Text>
                </TouchableOpacity>
              </View>
              <FlatList style={{ marginTop: '10%', marginRight: '5%' }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={this.state.weather.fivedays}
                renderItem={({ item, index }) => (
                  <>
                    <View style={{
                      marginBottom: 10,
                      marginLeft: 35,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      <Text style={{ fontSize: 12, fontWeight: '500', paddingBottom: 5 }}>{item.date}</Text>
                      <Text style={{ fontSize: 14, fontWeight: 'bold', paddingBottom: 10 }}>{item.temperature}' C</Text>
                      <Image source={Images.sun} style={styles.sunIcon} />
                      <Text style={{ fontSize: 10, fontWeight: 'bold', paddingBottom: 10, marginTop: 10 }}>{item.wind} km/h</Text>
                    </View>
                  </>
                )}
                keyExtractor={item => item.id}
              />
              <View style={styles.docDetailedWrapper1}>
                <View
                  style={[styles.docSpecsWrapper, { marginTop: 20 }]}>
                  <View style={styles.docNameWrapper}>
                    <View style={{ marginTop: 3, flexDirection: 'row', }}>
                      <View style={{ flexDirection: 'column', width: '50%' }}>
                        <Text numberOfLines={1} style={{ fontSize: width * 0.035, paddingBottom: 1, fontWeight: 'bold', width: '80%', color: 'green' }}>Real feel:</Text>
                        <Text numberOfLines={1} style={{ fontSize: width * 0.04, paddingBottom: 1, fontWeight: 'bold', width: '80%', }}>{this.state.weather.real_feel} 'C</Text>
                      </View>
                      <View style={{ flexDirection: 'column', width: '50%', marginLeft: '20%' }}>
                        <Text numberOfLines={1} style={{ fontSize: width * 0.035, paddingBottom: 1, fontWeight: 'bold', width: '80%', color: 'green' }}>Humidity:</Text>
                        <Text numberOfLines={1} style={{ fontSize: width * 0.04, paddingBottom: 1, fontWeight: 'bold', width: '80%', }}> {this.state.weather.humidity}%</Text>
                      </View>
                    </View>
                    <View style={{ marginTop: '12%', flexDirection: 'row', }}>
                      <View style={{ flexDirection: 'column', width: '50%' }}>
                        <Text numberOfLines={1} style={{ fontSize: width * 0.035, paddingBottom: 1, fontWeight: 'bold', width: '80%', color: 'green' }}>Wind Speed:</Text>
                        <Text numberOfLines={1} style={{ fontSize: width * 0.04, paddingBottom: 1, fontWeight: 'bold', width: '80%', }}>{this.state.weather.wind}km/h</Text>
                      </View>
                      <View style={{ flexDirection: 'column', width: '50%', marginLeft: '20%' }}>
                        <Text numberOfLines={1} style={{ fontSize: width * 0.035, paddingBottom: 1, fontWeight: 'bold', width: '80%', color: 'green' }}>Chance of rain:</Text>
                        <Text numberOfLines={1} style={{ fontSize: width * 0.04, paddingBottom: 1, fontWeight: 'bold', width: '80%', }}> {this.state.weather.rain}%</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather1: state.weather.weather,
  };
};
export default connect(mapStateToProps, {
  weather
})(Weather);
