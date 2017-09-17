// accessing fonts

import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Button } from 'react-native';


// set up three buttons to hit three separate endpoints
// on a client app
export default class App extends Component {

  constructor() {
    super()
    this.state = {
      networkStatus: 'pp',
      networkResponse: 'ww'
    }
  }

  turnOn = () => {
    axios.get('https://localhost:6969/api/turnOn').then( response => {
      alert('The response isss ', response)  
      console.log(response)
    }).catch( err => alert(err))
    }
  

  turnOff = () => {
    axios.get('https://localhost:6969/api/turnOff').then( response => {
      alert("The response is ", response)  
      console.log(response)
    }).catch( err => alert(err))
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Text>
asd
      </Text>
        <Button onPress={ this.turnOn } type="button" title="Turnsome shit on">Turn some shit on</Button>
        <Button onPress={ this.turnOff } type="button" title="Offf">Turn some shit off</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
