import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createAppContainer, FlatList} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const data = ['test', 'test1'];

class Test extends Component {
  renderItem = ({index}) => {
    return (
      <View style={{height: 50}}>
        <Text style={{textAlign: 'center'}}>Item {index}</Text>
      </View>
    );
  };

  render() {
            
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          contentContainerStyle={{padding: 10}}
        />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: {screen: Test},
});

export default createAppContainer(TabNavigator);
