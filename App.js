import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from './localdb';
import PhonicSoundButton from './components/PhonicSoundButton'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      chunks: [],
      phonicSounds: [],
    };
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor={'#ffee6b'}
            centerComponent={{
              text: 'Monosilábico',
              style: { color: '#6b6b6b', fontsize: 5 },
            }}
          />
          <Image style={styles.imageIcon} source={require('./mono.png')} />
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ text: text });
            }}
            value={this.state.text}
          />
          <TouchableOpacity
            style={styles.goButton}
            onPress={() => {
              var word = this.state.text.toLowerCase().trim();
              db[word]
                ? (this.setState({ chunks: db[word].chunks }),
                  this.setState({ phonicSounds: db[word].phones }))
                : Alert.alert("The word doesn't exists");
            }}>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableOpacity>
          <View>
            {this.state.chunks.map((item, index) => {
              return (
                <PhonicSoundButton
                  wordChunk={this.state.chunks[index]}
                  soundChunk={this.state.phonicSounds[index]}
                  buttonIndex={index}
                />
              );
            })}
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
  goButton: {
    width: '50%',
    alingSelf: 'center',
    height: 55,
    padding: 10,
    margin: 10,
    justify: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    justify: 'center',
  },
});
