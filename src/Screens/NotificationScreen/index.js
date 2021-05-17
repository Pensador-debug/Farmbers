import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils';
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';
import { notification } from '../../redux/actions/notifications';
import { connect } from 'react-redux';
import Header from '../../Commons/Header'
class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
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
    this.props.notification(token)
      .then(() => {
        console.log(this.props.notification1 ,' ye h response')
        this.setState({ notifications: this.props.notification1 })
      })
  }
  
  render() {
    return (
      <View style={styles.container}>
       
         <Header {...this.props}  back={true}/>
        <View style={styles.wrapper}>
          <View style={styles.upperWrapper}>
            <Text style={{ fontSize: 24, marginTop: 10, color: '#fff' }}>Notification</Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
          <View style={{ alignItems: 'center', marginBottom: '5%', }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ marginTop: '10%', paddingBottom: '55%' }}
              data={this.state.notifications}
              renderItem={({ item }) => (
                <>
                  <View style={styles.docDetailedWrapper2}>
                    <View
                      style={[styles.docSpecsWrapper, { marginTop: 10 }]}>
                      <Image source={Images.bell} style={styles.profileIcon1} />
                      <View style={styles.docNameWrapper}>
                        <Text numberOfLines={1} style={styles.docNameText}>
                          {item.title}
                        </Text>
                        <Text numberOfLines={2} style={styles.docSubNameText}>
                          {item.description}
                        </Text>
                      </View>
                    </View>
                  </View>
                </>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    notification1: state.notification.notification,
  };
};
export default connect(mapStateToProps, {
  notification
})(NotificationScreen);
