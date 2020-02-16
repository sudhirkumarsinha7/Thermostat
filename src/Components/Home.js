/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Animated,
} from 'react-native';

var HEADER_MAX_HEIGHT = 120;
var HEADER_MIN_HEIGHT = 70;
var PROFILE_IMAGE_MAX_HEIGHT = 80;
var PROFILE_IMAGE_MIN_HEIGHT = 40;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  render() {
    const hearderHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clap',
    });
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1}}>
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: 'lightskyblue',
            height: hearderHeight,
          }}
        />
        <ScrollView
          style={{flex: 1}}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: this.state.scrollY}}},
          ])}>
          <View
            style={{
              height: PROFILE_IMAGE_MAX_HEIGHT,
              width: PROFILE_IMAGE_MAX_HEIGHT,
              borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
              borderColor: 'white',
              borderWidth: 3,
              overflow: 'hidden',
              marginTop: HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
              marginLeft: 10,
            }}>
            <Image
              source={require('../Image/sudhir.jpg')}
              style={{flex: 1, width: null, height: null}}
            />
          </View>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 26, paddingLeft: 10}}>
              Sudhir Kumar
            </Text>
          </View>
          <View
            style={{
              height: PROFILE_IMAGE_MAX_HEIGHT,
              width: PROFILE_IMAGE_MAX_HEIGHT,
              borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
              borderColor: 'red',
              borderWidth: 3,
              overflow: 'hidden',
              marginTop: HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
              marginLeft: 10,
            }}>
            <Image
              source={require('../Image/me.jpg')}
              style={{flex: 1, width: null, height: null}}
            />
          </View>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 26, paddingLeft: 10}}>
              Sudhir Kumar
            </Text>
          </View>
          <View
            style={{
              height: PROFILE_IMAGE_MAX_HEIGHT,
              width: PROFILE_IMAGE_MAX_HEIGHT,
              borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
              borderColor: 'red',
              borderWidth: 3,
              overflow: 'hidden',
              marginTop: HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
              marginLeft: 10,
            }}>
            <Image
              source={require('../Image/me.jpg')}
              style={{flex: 1, width: null, height: null}}
            />
          </View>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 26, paddingLeft: 10}}>
              Sudhir Kumar
            </Text>
          </View>
          <View
            style={{
              height: PROFILE_IMAGE_MAX_HEIGHT,
              width: PROFILE_IMAGE_MAX_HEIGHT,
              borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
              borderColor: 'red',
              borderWidth: 3,
              overflow: 'hidden',
              marginTop: HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
              marginLeft: 10,
            }}>
            <Image
              source={require('../Image/me.jpg')}
              style={{flex: 1, width: null, height: null}}
            />
          </View>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 26, paddingLeft: 10}}>
              Sudhir Kumar
            </Text>
          </View>
          <View
            style={{
              height: PROFILE_IMAGE_MAX_HEIGHT,
              width: PROFILE_IMAGE_MAX_HEIGHT,
              borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
              borderColor: 'red',
              borderWidth: 3,
              overflow: 'hidden',
              marginTop: HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
              marginLeft: 10,
            }}>
            <Image
              source={require('../Image/me.jpg')}
              style={{flex: 1, width: null, height: null}}
            />
          </View>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 26, paddingLeft: 10}}>
              Sudhir Kumar
            </Text>
          </View>
          <View
            style={{
              height: PROFILE_IMAGE_MAX_HEIGHT,
              width: PROFILE_IMAGE_MAX_HEIGHT,
              borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
              borderColor: 'red',
              borderWidth: 3,
              overflow: 'hidden',
              marginTop: HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
              marginLeft: 10,
            }}>
            <Image
              source={require('../Image/me.jpg')}
              style={{flex: 1, width: null, height: null}}
            />
          </View>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 26, paddingLeft: 10}}>
              Sudhir Kumar
            </Text>
          </View>
          <View
            style={{
              height: PROFILE_IMAGE_MAX_HEIGHT,
              width: PROFILE_IMAGE_MAX_HEIGHT,
              borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
              borderColor: 'red',
              borderWidth: 3,
              overflow: 'hidden',
              marginTop: HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
              marginLeft: 10,
            }}>
            <Image
              source={require('../Image/me.jpg')}
              style={{flex: 1, width: null, height: null}}
            />
          </View>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 26, paddingLeft: 10}}>
              Sudhir Kumar
            </Text>
          </View>
          <View
            style={{
              height: PROFILE_IMAGE_MAX_HEIGHT,
              width: PROFILE_IMAGE_MAX_HEIGHT,
              borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
              borderColor: 'red',
              borderWidth: 3,
              overflow: 'hidden',
              marginTop: HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
              marginLeft: 10,
            }}>
            <Image
              source={require('../Image/me.jpg')}
              style={{flex: 1, width: null, height: null}}
            />
          </View>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 26, paddingLeft: 10}}>
              Sudhir Kumar
            </Text>
          </View>
        </ScrollView>
        {/* <Text>Home page</Text> */}
      </View>
    );
  }
}
export default Home;
