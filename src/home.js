/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View,Text, FlatList,TouchableOpacity} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Tab from './tab.js'
import Test from './test.js'
import Hello from './hello.js'


export default class Homes extends Component {
    Item(title ) {
        return (
            <TouchableOpacity onPress= {() =>this.onPressTittle()} >
                <View style={{justifyContent:'center',alignItems:'center',padding:10}}>
                    <Text>{title}</Text>
                </View>
            </TouchableOpacity>

        );
    }
    onPressTittle () {
            return (<View><Tab/></View>)

    }
  render() {
    var dummy = {
      list: [{
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  
],
    };
    return (
        <View style={{flex:1,borderWidth:1}}>
            {/* <View style={{flex:0.1,borderWidth:1}}>
                <Text>Header</Text>
            </View> */}
             {/* <View style={{flex:0.7,borderWidth:1}}>
                <Text>Body</Text>
            </View> */}
             {/* <View style={{flex:0.05,flexDirection:'row',borderWidth:1,}}>
                <FlatList
                    data={dummy.list}
                    horizontal
                    renderItem={({ item }) => this.Item(item.title)}
                    keyExtractor={item => item.id}
                />
            </View> */}
             {/* <View style={{flex:0.9,borderWidth:1}}>
             <Tab/>
            </View> */}
                         <Tab/>

        </View>
    );
  }
}


