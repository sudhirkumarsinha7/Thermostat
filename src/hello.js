import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Hello extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello</Text>
      </View>
    );
  }
}
export default Hello;
