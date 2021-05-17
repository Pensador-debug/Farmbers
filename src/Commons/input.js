import React, {Component} from 'react';
import {View, Platform, StyleSheet} from 'react-native';
import {Text } from 'react-native-elements';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class InputField extends Component {
  render(props) {
    return (
      <View style={styles.container}>
        <Text style={styles.inputLabel}>{this.props.name}</Text>
        <Input 
        style={{fontSize:14,fontWeight:'bold',width:"100%",marginTop:8}}
        placeholder={this.props.placeholder}
        secureTextEntry={this.props.secureTextEntry}
        errorStyle={{color: 'red'}}
        errorMessage={this.props.errorMessage}
         
        />
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    
    marginLeft: 5,
    // paddingTop: 10,
  },
  inputLabel: {
    paddingLeft: 15,
    fontWeight:'bold'
    

  },
});
