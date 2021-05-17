import React from 'react';
import { ActivityIndicator } from 'react-native';


const LoadingIcon = ({ loadingApp }) => <ActivityIndicator 
style={{zIndex:5, position:'absolute',alignItems:'center', top:'60%', left:'45%', }} size="large" color="#006631" animating={loadingApp} ></ActivityIndicator>;

export default LoadingIcon;