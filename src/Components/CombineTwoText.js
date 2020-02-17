import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
class CombineTwoText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getInputText1(text) {
    this.props.getMessage1(text);
    this.getInputText3();
  }
  getInputText2(text) {
    this.props.getMessage2(text);
    //this.props.changeMessage(text);
    this.getInputText3();
  }
  getInputText3() {
    const {msg1, msg2} = this.props;
    var text3 = '';
    for (var i = 0; i < msg1.length || i < msg2.length; i++) {
      if (i < msg1.length) {
        text3 += msg1[i];
      }
      if (i < msg2.length) {
        text3 += msg2[i];
      }
      if (i >= msg1.length || i >= msg2.length) {
      } else {
        text3 = text3 + '_';
      }
    }
    this.props.changeMessage(text3);
  }

  render() {
    const {msg, msg1, msg2} = this.props;

    return (
      <View>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          styles={{
            flex: 5,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>First Input</Text>
          <TextInput
            // eslint-disable-next-line react-native/no-inline-styles
            style={{height: 40, borderColor: 'blue', borderWidth: 1}}
            onChangeText={text => this.getInputText1(text)}
          />
          <Text>{msg1}</Text>
          <Text>2nd Input</Text>
          <TextInput
            // eslint-disable-next-line react-native/no-inline-styles
            style={{height: 40, borderColor: 'blue', borderWidth: 1}}
            onChangeText={text => this.getInputText2(text)}
          />
          <Text>{msg2}</Text>
          <Text>Output</Text>
          <Text>{msg}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count.count,
  msg: state.msg.msg,
  msg1: state.msg.msg1,
  msg2: state.msg.msg2,
});

const mapDispatchToProps = dispatch => ({
  getMessage1: msg => dispatch({type: 'MESSAGE1', msg}),
  getMessage2: msg => dispatch({type: 'MESSAGE2', msg}),
  changeMessage: msg => dispatch({type: 'MESSAGE', msg}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CombineTwoText);
