import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {DataFormat} from '../Utils/InputData.js';
import {InputTextChildren, ButtonComponents} from './Common/helper.js';
class loginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState(updateElements) {
    this.setState(updateElements);
  }
  onClearClicked() {
    this.setState({
      username: '',
      password: '',
    });
  }

  render() {
    return (
      <View>
        <View>
          {Object.keys(DataFormat.login).map(item => {
            var eachrow = DataFormat.login[item];
            if (eachrow.type === 'string') {
              return (
                <InputTextChildren
                  eachRow={eachrow}
                  state={this.state}
                  updateState={this.updateState}
                />
              );
            } else if (eachrow.type === 'button') {
              return <ButtonComponents eachRow={eachrow} />;
            } else {
              return <Text>{JSON.stringify(eachrow)}</Text>;
            }
          })}
        </View>
      </View>
    );
  }
}
export default loginScreen;
