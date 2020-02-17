import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {connect} from 'react-redux';
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  incrementCount = count => {
    this.props.inCrementCount(count + 1);
  };
  decrementCount = count => {
    this.props.deCrementCount(count - 1);
  };
  onChangeText(text) {
    this.props.changeMessage(text);
  }
  render() {
    const {msg, count} = this.props;

    return (
      <View>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          styles={{
            flex: 2,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            title="increment"
            onPress={() => this.incrementCount(count)}
          />
          <Text>{count}</Text>
          <Button
            title="decrement"
            onPress={() => this.decrementCount(count)}
          />
        </View>
        <Text>{JSON.stringify(this.props)}</Text>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          styles={{
            flex: 5,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            // eslint-disable-next-line react-native/no-inline-styles
            style={{height: 40, borderColor: 'blue', borderWidth: 1}}
            onChangeText={text => this.onChangeText(text)}
          />
          <Text>{msg}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count.count,
  msg: state.msg.msg,
});

const mapDispatchToProps = dispatch => ({
  changeMessage: msg => dispatch({type: 'MESSAGE', msg}),
  inCrementCount: count => dispatch({type: 'INCREMENT', count}),
  deCrementCount: count => dispatch({type: 'DECREMENT', count}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
