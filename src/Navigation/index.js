import 'react-native-gesture-handler';
import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
// import { DrawerContent } from './DrawerContent';

import { Images } from '../utils';
//Screens

import SpalshBstCrp from '../Screens/SpalshBstCrp';


import Login from '../Screens/Login';
// import Dashboard from '../Screens/Dashboard';
import DashboardMap from '../Screens/Dashboard_map';
import Weather from '../Screens/Weather';
import Lands from '../Screens/Lands';
import Soil from '../Screens/Soil';
import Mandi from '../Screens/Mandi';
import OtpScreen from '../Screens/OtpScreen';
import Ragistration from '../Screens/Ragistration';
import Example from '../Screens/Example';
import Profile from '../Screens/Profile';
import PincodeScreen from '../Screens/PincodeScreen';
import SelectLanguage from '../Screens/SelectLanguage';
import PrivacyPolicyScreen from '../Screens/PrivacyPolicyScreen';
import ForgetPassword from '../Screens/ForgetPassword';
import Home from '../Screens/Home';
import HelpScreen from '../Screens/HelpScreen';
import CropLockScreen from '../Screens/CropLockScreen';
import CropListScreen from '../Screens/CropListScreen';
import MapScreen from '../Screens/MapScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import ReferAndEarn from '../Screens/ReferAndEarn';
import AddLand from '../Screens/AddLand';
import TermsAndConditions from '../Screens/TermsAndConditions';

import AnalysisScreen from '../Screens/AnalysisScreen';
import CropStage from '../Screens/CropStage';
import Settings from '../Screens/Settings';
import ForgotPin from '../Screens/ForgotPin';
import AboutUs from '../Screens/AboutUs';
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// function DrawerNav() {
//   return (
//     <Drawer.Navigator drawerContent={props => <DrawerContent {... props}/>}>
//        <Drawer.Screen name="Dashboard" component={Dashboard}/>
//   </Drawer.Navigator>
//   );
// }
export function AppHome() {
  return (
    <Tab.Navigator
      initialRouteName="Lands"
      tabBarOptions={{
        activeTintColor: '#006631',
        style: { height: 65, zIndex: 1000 },
      }}>


      <Tab.Screen
        name="Lands"
        component={Lands}
        options={{
          tabBarLabel: 'Crops',
          tabBarIcon: ({ focused }) => {
            if (focused == true) {
              return <Image source={Images.home} style={{ width: 30, height: 30 }} />;
            } else {
              return <Image source={Images.home2} style={{ width: 30, height: 30 }} />;
            }
          },
        }}
      />

      <Tab.Screen
        name="Weather"
        component={Weather}
        options={{
          tabBarLabel: 'Weather',
          tabBarIcon: ({ focused }) => {
            if (focused == true) {
              return <Image source={Images.weather} style={{ width:40, height: 30, }} />;
            } else {
              return <Image source={Images.weather2} style={{ width:40, height: 30, }} />;
            }
          },
        }}
      />
      {/* <Tab.Screen
        name="Lands"
        component={Lands}
        options={{
          tabBarLabel: 'Crops',
          tabBarIcon: ({ focused }) => {
            if (focused == true) {
              return <Image source={Images.landIcon} style={{ width: 30, height: 30 }} />;
            } else {
              return <Image source={Images.landIcon2} style={{ width: 30, height: 30 }} />;
            }
          },
        }}
      /> */}
      <Tab.Screen
        name="Mandi"
        component={Mandi}
        options={{
          tabBarLabel: 'Buyers',
          tabBarIcon: ({ focused }) => {
            if (focused == true) {
              return <Image source={Images.mandi} style={{ width: 40, height: 40 }} />;
            } else {
              return <Image source={Images.mandi2} style={{ width: 40, height: 40 }} />;
            }
          },
        }}
      />



      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused }) => {
            if (focused == true) {
              return <Image source={Images.settingsIcon} style={{ width: 45, height:45 }} />;
            } else {
              return <Image source={Images.settingsIcon2} style={{ width:45, height:45 }} />;
            }
          },
        }}
      />

    </Tab.Navigator>
  );
}
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Ragistration"
        screenOptions={{
          headerShown: false,
        }}>
       
        <Stack.Screen name="SplashBstCrp" component={SpalshBstCrp} />
      
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Dashboard" component={AppHome} /> */}
        {/* <Stack.Screen name="DashboardMap" component={AppHome} /> */}
        <Stack.Screen name="Weather" component={Weather} />
        <Stack.Screen name="Soil" component={Soil} />
        <Stack.Screen name="Lands" component={AppHome} />
        <Stack.Screen name="Mandi" component={Mandi} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="Ragistration" component={Ragistration} />
        <Stack.Screen name="Example" component={Example} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="PincodeScreen" component={PincodeScreen} />
        <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
        <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HelpScreen" component={HelpScreen} />
        <Stack.Screen name="CropLockScreen" component={CropLockScreen} />
        <Stack.Screen name="CropListScreen" component={CropListScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="AnalysisScreen" component={AnalysisScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="ReferAndEarn" component={ReferAndEarn} />
        <Stack.Screen name="AddLand" component={AddLand} />
        <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
        <Stack.Screen name="CropStage" component={CropStage} />
        <Stack.Screen name="ForgotPin" component={ForgotPin} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
