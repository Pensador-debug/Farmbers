import React, { Component, useEffect } from "react";
import {
  Text, TextInput, I18nManager, LogBox, View, Image, StyleSheet, Dimensions, SafeAreaView
} from "react-native";
import Navigation from "./src/Navigation";
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { fcmService } from './src/utils/FCMService'
import { localNotificationService } from './src/utils/LocalNotificationService'
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import memoize from "lodash.memoize";
import AsyncStorage from "@react-native-community/async-storage";
import AppIntroSlider from 'react-native-app-intro-slider';
const { width, height } = Dimensions.get('window');
const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  en: () => require("./src/assets/en-US.json"),
  hi: () => require("./src/assets/hi.json")
};

const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key)
);

const setI18nConfig = async () => {
  // fallback if no available language fits
  var walkthrough = AsyncStorage.getItem('walkthrough')
  var code = AsyncStorage.getItem('languagecode')
  if (code == null) {
    code = 'en'
  }
  const fallback = { languageTag: code, isRTL: false };

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};



const slides = [
  {
    key: 1,
    title: <View><Text style={{fontSize:20,color:'#006631',fontWeight:'bold'}}>Welcome To Farmbers</Text></View>,
    text:<View><Text style={{fontSize:16,color:'#006631',}}>Choose one Magic Circle</Text></View>,
    image: require('./src/assets/Images/w1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: <View><Text style={{fontSize:20,color:'#006631',fontWeight:'bold'}}>Title 1</Text></View>,
    text:<View><Text style={{fontSize:16,color:'#006631',}}>Drag your Pointer to Magic Circle</Text></View>,
    image: require('./src/assets/Images/w2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: <View><Text style={{fontSize:20,color:'#006631',fontWeight:'bold'}}>Title 2</Text></View>,
    text:<View><Text style={{fontSize:16,color:'#006631',}}>Magic circle is selected</Text></View>,
    image: require('./src/assets/Images/w3.png'),
    backgroundColor: '#22bcb5',
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    setI18nConfig(); // set initial config
    this.state = {
      showapp: false
    }
  }

  componentDidMount() {

    RNLocalize.addEventListener("change", this.handleLocalizationChange);
    this.checkApploader()
  }

  async checkApploader() {
    var walkthrough = await AsyncStorage.getItem('walkthrough')
    console.log(walkthrough)
    if (walkthrough == 'yes') {
      this.setState({ showapp: true })
    }
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener("change", this.handleLocalizationChange);
  }

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };

  _renderItem = ({ item }) => {
    return (
      <SafeAreaView style={styles.slideCont}>
        <View style={styles.header}>
          <Image source={require('./src/assets/Images/farmbersLogo.png')} style={{ width: width * 0.5, height: height *0.08, }} />
        </View>
        <Text style={styles.text}>{item.title}</Text>
        <Image source={item.image} style={styles.img} />
        <Text style={styles.text}>{item.text}</Text>
      </SafeAreaView>
     
    );
  }
  _onDone = async () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    AsyncStorage.setItem('walkthrough', 'yes');
    this.setState({ showapp: true })
  }
  // _onSkip = () => {
  //   // AsyncStorage.setItem('walkthrough', 'yes');
  //   this.setState({ showRealApp: true });
  // };

  render() {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.allowFontScaling = false;
    fcmService.registerAppWithFCM()
    fcmService.register(onRegister, onNotification, onOpenNotification)
    localNotificationService.configure(onOpenNotification)
    LogBox.ignoreLogs([
      "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false",
      "Setting a timer"
    ]);

    function onRegister(token) {
    }

    function onNotification(notify) {
      const options = {
        soundName: "default",
        playSound: true
      }

      localNotificationService.showNotification(
        0,
        notify.title,
        notify.body,
        notify,
        options
      )
    }

    function onOpenNotification(notify) {
      // alert("Open Notification", notify.body)
    }


    if (this.state.showapp) {
      return (
        <Provider store={store}>

          <Navigation />
        </Provider>
      );
    }
    else {
      return <AppIntroSlider
        renderItem={this._renderItem}
        data={slides}
        onSkip={this._onSkip}
        onDone={this._onDone}
        skipLabel={<Text style={{color:'#006631'}}>Skip</Text>}
        doneLabel={<Text style={{color:'#006631'}}>Done</Text>}
        nextLabel={<Text style={{color:'#006631'}}>Next</Text>}
        dotStyle={{ backgroundColor: '#CBD5D7' }}
        activeDotStyle={{ backgroundColor: '#006631' }}
        // renderSkipButton={this._renderSkipButton}
        // renderNextButton={this._renderNextButton}
        // renderDoneButton={this._renderDoneButton}
        showSkipButton={true}
      />;

    }
  }
}

export default App;

const styles = StyleSheet.create({

  slideCont: {
    width,
    height,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: '#000rgba(0, 110, 49,0.8)',
  },
  img: {
    width: width * 1,
    height: height * 0.5,
    marginTop: height * 0.03,
  },
  textCont2: {
    width: '65%',
    height: '18%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  text: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.04,
    color: '#000',
    lineHeight: 15,
    marginTop: height * 0.05,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%'
},

});
