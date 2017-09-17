// accessing fonts

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


// set up three buttons to hit three separate endpoints
// on a client app
export default class App extends React.Component {

  constructor() {
     super()
     this.state = {
        record: false
     }
  }

  render() {
    return (
      <View style={styles.container}>
        <button onTouchTap={ this.startRecording } type="button">Start Recording</button>
        <button onTouchTap={ this.stopRecording} type="button">Stop Recording</button>
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
