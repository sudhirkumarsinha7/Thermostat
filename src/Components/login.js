import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Text,
  Button,
  Input,
  Form,
  Body,
  Title,
  Left,
  Right,
  Label,
  Item,
  Footer,
  Content,
} from 'native-base';
class login extends Component {
  constructor(props) {
    super(props);
    // this.delay = this.delay.bind(this)
    this.state = {
      username: '',
      password: '',
      shouldDisplayUsername: false,
    };
  }
  _login = () => {
    alert(this.state.username + ' ' + this.state.password);
  };

  render() {
    var {username, password, shouldDisplayUsername} = this.state;
    return (
      <Container>
        <Header />
        <Content>
          <View style={{flex: 10, borderWidth: 1}}>
            <View style={{flex: 6, borderWidth: 1}}>
              <Form>
                <Item floatingLabel>
                  <Label>Username</Label>
                  <Input
                    onChangeText={username => {
                      this.setState({username: username});
                    }}
                  />
                </Item>
                {/* {this.delay()} */}
                <Item floatingLabel>
                  <Label>Password</Label>
                  <Input
                    onChangeText={password =>
                      this.setState({password: password})
                    }
                  />
                </Item>
              </Form>
            </View>
            <View style={{flex: 2, borderWidth: 1}}>
              <Button block onPress={() => this._login()}>
                <Text>Login</Text>
              </Button>
            </View>
            <View style={{flex: 2, borderWidth: 1}}>
              <Button block onPress={() => this._login()}>
                <Text>Register</Text>
              </Button>
            </View>
          </View>
        </Content>

        <Footer />
      </Container>
    );
  }
}

export default login;
