/*This is an Example of Animated Splash Screen*/
import React, { Component } from 'react';
import { View, Text, Image, Animated, Dimensions, Easing, } from 'react-native';
import { Images } from '../../utils'
const { width, height } = Dimensions.get('window');

export default class SpalshBstCrp extends Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0)
    this.state = {
      animating: false,
      alignsecond: false,
      loadingTIL: true,
      loadingNL: false,


    };
    setTimeout(

      () => {

        this.setState({ align: 'flex-start', loadingTIL: false, loadingNL: true, useNativeDriver: false }, function () {
          this.setState({
            alignsecond: true,
            useNativeDriver: false

          });
        }), this.animatedBox()
      },
      2000
    );
    setTimeout(
      () => {

        // this.props.navigation.navigate("Home")
      }, 5000
    )
  }

  componentDidMount() {
    this.animatedWidth = new Animated.Value(500)
    this.animatedHeight = new Animated.Value(300)
    this.animate()
  }
  animate() {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false
      }
    ).start(() => this.animate())
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



  render() {
    const marginLeft = this.animatedValue.interpolate({
      useNativeDriver: false,
      inputRange: [1, 1.5],
      outputRange: [0, 100]
    })

    const animatedStyle = { width: this.animatedWidth }
    return (
      <View
        style={{
          flex: 1,
          // alignItems: 'center',
          flexDirection: 'column',
          marginHorizontal: 70,
          // justifyContent: 'center'
        }}>

        <Animated.View style={[animatedStyle]}>
          <View style={{ marginTop: '80%' }}>

            <Image source={Images.farmLogo} style={{ width: width * 0.65, height: height * 0.1, }} />
          </View>
        </Animated.View>
        {!this.state.alignsecond ? null : (
          <View style={{ marginTop: '50%' }}>
            <Text
              style={{ color: '#006631', fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>
              Finding best Crop for You...
            </Text>
            <Animated.View
              style={{
                marginLeft,
                height: 30,
                width: 40,
                marginTop: '20%',
                flexDirection: 'row'
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={Images.bhindi} style={{ width: width * 0.65, height: height * 0.2, }} />
                <Image source={Images.tomata} style={{ width: width * 0.65, height: height * 0.2, marginLeft: 10 }} />
                <Image source={Images.caps} style={{ width: width * 0.65, height: height * 0.2, marginLeft: 10 }} />

              </View>



            </Animated.View>



          </View>
        )}
        <View style={{ flex: 1, paddingTop: 150 }}>



        </View>
      </View>
    );
  }
}