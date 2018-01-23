import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Splash from './src/components/Splash';
import Login from './src/components/Login/Login';
import SignUp from './src/components/SignUp/SignUp';

const HealthAlarm = StackNavigator({
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  }
});

export default class App extends Component < {} > {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      timePassed: false
    }
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setTimePassed();
    }, 3000);
  }

  setTimePassed() {
    this.setState({timePassed: true});
  }

  login = (username, password) => {
    this.setState({username: 'username', password: 'password'});

    alert(username + " " + password)
  }

  render() {

    if (!this.state.timePassed) {
      return <Splash/>;
    } else {
      return <HealthAlarm/>;
    }
    // <Splash />
    // <Login
    //   handleLogin={this.login}
    // />);
  }
}
