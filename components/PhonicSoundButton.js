import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Audio } from 'expo-av';

export default class PhonicSoundButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressedButtonIndex: '',
    };
  }

  playSound = async (soundChunk) => {
    var soundLink =
      'https://curriculum.whitehatjr.com/Visual+Project+Asset/PRO_VD/Phones/phones/' +
      soundChunk +
      '.mp3';
    await Audio.Sound.createAsync(
      {
        uri: soundLink,
      },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <TouchableOpacity style={this.props.buttonIndex===this.state.pressButtonIndex
      ?[styles.chunkButton, {backgroundColor:'red'}]
      :[styles.chunkButton, {backgroundColor: 'red'}]
      }
      onPress={()=>{

        this.setState({pressButtonIndex:this.props.buttonIndex});
        this.playSound(this.props.soundChunk)

      }}
      >
        <Text style={this.props===this.state.pressButtonIndex
      ?[styles.displayText, {color: 'white'}]
      :[styles.displayText, {color: 'white'}]
      }>
      {this.props.wordChunk}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({

  displayText:{

    textAlign: 'center',
    fontSize: 30,
    color: 'white',

  },

  chunkButton:{

    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItem: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red',

  }

})