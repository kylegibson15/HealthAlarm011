import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView, } from 'react-native';
import LoginForm from './LoginForm';
import SignUp from '../SignUp/SignUp';

export default class Login extends Component {

  render() {
    const { navigate } = this.props.navigation
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>HealthAlarm</Text>
          <Image style={styles.clock} source={smiley}/>
          <Text style={styles.description}>waking up with a smile on</Text>
        </View>
        <View>
          <Text style={styles.signUp}
            onPress = {() => navigate('SignUp', {screen: 'SignUp'})}> Don't have an account? Sign up here
          </Text>
          <LoginForm
            handleLogin={this.props.handleLogin}
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

var clock = require('../../assets/images/alarm-clock.png');
var smiley = require('../../assets/images/sunglasses.png');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    color: '#2c3e50',
    fontSize: 50,
  },
  description: {
    color: '#2c3e50',
    marginTop: 10,
    textAlign: 'center',
    opacity: 0.9,
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  signUp: {
    alignSelf: 'center',
    color: '#2c3e50'
  },
  clock: {
    height: 60,
    width: 60,
  }

})
