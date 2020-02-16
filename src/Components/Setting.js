import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Setting page</Text>
      </View>
    );
  }
}
export default Setting;
