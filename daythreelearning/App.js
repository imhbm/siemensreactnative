import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import PizzaTranslator from './PizzaTranslator';
import styles from './Styles';
import ScrollViewApp from './ScrollViewApp';
import FlatListBasics from './FlatListBasics';
const App=() =>{
  return (
    <View style={styles.container}>
      <Text>Inside App we will render Hello World Component ! </Text>
     <FlatListBasics /> 
    
    </View>
  )
}



export default App;