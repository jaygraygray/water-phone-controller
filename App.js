// accessing fonts

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ReactMic } from 'react-mic'

export default class App extends React.Component {

  constructor() {
     super()
     this.state = {
        record: false
     }
  }

  startRecording = () => {
    this.setState({ record: true })
  }

  stopRecording = () => {
    this.setState({ record: false })
  }

  onStop = (blibby) => {
    console.log("Recording: ", blibby)
  }
  render() {
    return (
      <View style={styles.container}>
        <ReactMic 
          record={ this.state.record }
          className="sound-wave"
          onStop={ this.stop }
          strokeColor="blue"
          backgroundColor="#fff"
        />
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
  },
  title: {
    color: 'orange',
    fontWeight: 'bold'
  }
});
