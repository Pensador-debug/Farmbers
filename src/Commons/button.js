import React, { Component } from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
export default class ButtonField extends Component {
  render(props) {
    return (
      <View style={styles.container}>
        <Button
          // style={styles.button}
          title={this.props.title}
          type={this.props.type}
          onPress={this.props.onPress}
          View style={{ borderRadius: 40, }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    //   paddingTop: 10,
  },
  button: {
    borderRadius: 40,
    borderWidth: 1,
  },
});
