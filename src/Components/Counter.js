import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
// import {PropTypes} from 'prop-types';
// import {inCrementCount, decCrementCount} from '../Actions/counter.js';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  incrementCount = count => {
    this.props.inCrementCount(count);
  };
  decrementCount = count => {
    this.props.deCrementCount(count);
  };
  render() {
    const {count} = this.props.data.count;

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
      </View>
    );
  }
}
// Counter.propTypes = {
//   inCrementCount: PropTypes.func,
//   deCrementCount: PropTypes.func,
// };
const mapStateToProps = state => ({
  data: state,
  // inCrementCount: state.Counter.inCrementCount,
});

const mapDispatchToProps = dispatch => ({
  inCrementCount: count => dispatch({type: 'INCREMENT', count}),
  deCrementCount: count => dispatch({type: 'DECREMENT', count}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
