/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View,Text,StyleSheet, Animated,
  Image,
  Button,
  TouchableOpacity} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Svg,Circle,Ellipse } from 'react-native-svg';
import Hello from './hello.js'
export class HomeScreen extends Component {
  navigateScreen = () => {
    const {navigate} = this.props.navigation;
    navigate('Hello')
  }
  render() {
      return (
      <View style={{flex: 1}}>
          <View style={{flex: 2, borderWidth:1}}>
          </View>
          <View style={{flex: 7, borderWidth:1, borderColor:'#2F4F4F',justifyContent:'center',alignItems:'center'}}>
              <Text>HI</Text>
          </View>
           {/* <View style={{flex: 1,flexDirection:'row', borderWidth:1}}>
              <View style={{flex: 3.3, borderWidth:1}}>
                <Button
                title='Home'
                color='blue'
                onPress={() =>this.navigateScreen('Home')}
                />
              </View> 
              <View style={{flex: 3.3, borderWidth:1}}>
               <Button
                title='Settings'
                color='blue'
                onPress={() =>this.navigateScreen('Settings')}
                />
              </View> 
              <View style={{flex: 3.3, borderWidth:1}}>
                 <Button
                  title='Hello'
                  color='blue'
                  onPress={() => this.navigateScreen('Hello')}
                  />
              </View> 
          </View>  */}
          {/* <Svg height="200" width="200">
                  <Circle cx="100" cy="100" r="100" fill="green" 
                   />
                   <Circle cx="100" cy="100" r="80" fill="red" 
                   />
                   
                   <Circle cx="100" cy="100" r="60" fill="blue" 
                   />
                                
              </Svg> */}
      </View>
    );
}
}

export class SettingsScreen extends Component {
  hello=()=>{
    alert("test")
    // return <View>
    // <Hello/>
    // </View>
    
    // const {navigate} = this.props.navigation;
    // navigate('Hello')
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress ={()=>this.props.navigation.navigate('Hello')}>
          <Text>Settings!</Text>
          </TouchableOpacity>
          {/* <Tab2 /> */}
         
           {/* <Text>Settings!</Text> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})



export const  TabTest1 = createStackNavigator ({
  Home: {screen: HomeScreen},
  Settings: {screen: SettingsScreen},
  Hello: {screen: Hello},
}, {
  cardStyle: { shadowColor: 'transparent' },
});

const Tab2 = createBottomTabNavigator({
   Home: {screen: HomeScreen},
  Settings: {screen: SettingsScreen},
  Hello: {screen: Hello},
  }, {
  cardStyle: { shadowColor: 'transparent' },
});


export default createAppContainer(Tab2)
