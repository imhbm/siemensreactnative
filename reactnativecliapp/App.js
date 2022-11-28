import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import HelloWorldApp from './HelloWorldApp';
import Hello from './Hello';
import HelloUsingClass from './HelloUsingClass';
import Cat from './Cat';
import styles from './Styles';
import Cafe from './StateExample';
const App=() =>{
  return (
    <View style={styles.container}>
      <Text>Inside App we will render Hello World Component ! </Text>
      <HelloWorldApp />
      <Hello />
      <HelloUsingClass />
      <Cat />
      <Cafe />
    </View>
  )
}



export default App;