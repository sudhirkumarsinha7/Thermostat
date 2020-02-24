import React, {Component} from 'react';
import {View, Text, TextInput, Keyboard, Button} from 'react-native';
import Styles from '../../Utils/Style.js';
import {renderEmptyStringIfUndefined} from '../../Utils/Utils.js';

export class InputTextChildren extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var {eachRow, state, updateState} = this.props;
    return (
      <View>
        {eachRow ? (
          <View>
            <Text style={Styles.inputHeaderText}>{eachRow.displayName}</Text>
            <TextInput
              style={Styles.inputStyle}
              placeholder={eachRow.displayName}
              KeyboardType={eachRow.keyboardType}
              returnKeyType={'done'}
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
              value={renderEmptyStringIfUndefined(state[eachRow.stateName])}
              onChangeText={text => updateState({[eachRow.stateName]: text})}
            />
          </View>
        ) : null}
      </View>
    );
  }
}
export class ButtonComponents extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var {eachRow} = this.props;
    return (
      <View>
        {eachRow ? (
          <View>
            <Button
              title={eachRow.leftButton.displayName}
              onPress={() => alert('Simple Button pressed')}
            />
          </View>
        ) : null}
      </View>
    );
  }
}
