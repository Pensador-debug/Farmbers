import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Dimensions,
  Image, FlatList,
  Modal,
} from "react-native";
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils'
import styles from './style';
import Header from '../../Commons/Header';
import AsyncStorage from '@react-native-community/async-storage';
import { cropstage } from '../../redux/actions/crop_stage';
import { connect } from 'react-redux';

class CropListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showWarn: false,
      crop_id: this.props.route.params.crop_id,
      cropstage: []
    };
    console.log(this.props.route.params.crop_id, 'yaha ho tum')
    this._getStorageValue();
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
  render() {
    return (
      <View style={styles.container}>
        <Header {...this.props} back={true} />
        <ScrollView
          // contentContainerStyle={styles.scrollWrapper}
          showsVerticalScrollIndicator={false}>
          <View style={styles.scrollWrapper}>
            <View style={{ marginTop: height * 0.05, width: '90%' }}>
              {this.state.cropstage.length > 0 ? <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ marginTop: '2%', width: width * 0.9, paddingLeft: 5 }}
                data={this.state.cropstage}
                renderItem={({ item }) => (
                  <>
                    <View style={[styles.formBox, { backgroundColor: item?.completed == 2 ? 'green' : item?.completed == 1 ? '#fff' : '#D3D3D3' }]}>
                      <View style={{ padding: 10, justifyContent: 'center', backgroundColor: '#006631', borderRadius: 100, minWidth: height * 0.075, minHeight: height * 0.075, alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>{item.month}</Text>
                        <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}>{item.dateRange}</Text>
                      </View>
                      <TouchableOpacity style={styles.input}
                        onPress={() => {
                          this.setState({
                            show: true,
                            modeltitle: item.stage_name,
                            modeldesc: item.stage_desc,
                          })
                        }}>
                        <Text numberOfLines={1} style={{ fontSize: 18, }} >{item.stage_name}</Text>
                        {item?.completed == 1 ? <TouchableOpacity onPress={() => { this.setState({ showWarn: true, modeltitle: item.stage_name, modeldesc: item.stage_desc, }) }} style={{ position: 'absolute', left: '78%', top: 10 }}>
                          <Image source={Images.warning} style={styles.warnIcon} />
                        </TouchableOpacity>
                          :
                          <>
                            <View >
                            </View>
                          </>}
                      </TouchableOpacity>
                    </View>
                  </>
                )}
                keyExtractor={item => item.id}
              />
                :
                <>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.docNameText}>
                      !!! No Crop Satge Found !!!
              </Text>
                  </View>
                </>}
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
            {/*Modal Begin For Discription  */}
            <Modal
              transparent={true}
              animationType='slide'
              visible={this.state.showWarn}>
              <View style={{ backgroundColor: '#000000aa', height: height * 1 }}>
                <TouchableOpacity
                  style={styles.testModel}
                  onPress={() => { this.setState({ showWarn: false }) }}
                >
                  <View style={styles.middleWrapper1}>
                    <View style={{ width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={styles.nameWrapper} >{this.state.modeltitle} (Warning)</Text>
                    </View>
                  </View>
                  <View style={{ justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                    <Text style={{ textAlign: 'left', fontSize: 18 }}>{this.state.modeldesc}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Modal>
            {/* Modal END */}
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '10%' }}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.boxBtn2}
                onPress={() => this.props.navigation.navigate('DashboardMap')}
              >
                <Text style={styles.btnText}> DONE </Text>
              </TouchableOpacity>
            </View>
            {/* <View style={styles.downWrapper}>
                        </View> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cropstage1: state.cropstage.cropstage,
  };
};
export default connect(mapStateToProps, {
  cropstage
})(CropListScreen);
