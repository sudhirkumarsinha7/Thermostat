/* eslint-disable react/jsx-no-comment-textnodes */
import React, {Component} from 'react';
import {Animated, View, Text} from 'react-native';
export class SquareAnimation extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: {x: 10, y: 10},
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.square} />
      </Animated.View>
    );
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <SquareAnimation />
      </View>
    );
  }
}
export default Main;
const styles = {
  square: {
    width: 120,
    height: 120,
    borderRadius: 120,
    backgroundColor: 'red',
  },
};
