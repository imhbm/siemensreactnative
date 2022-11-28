import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './Styles';
//import cssstyle from './Cat.css';
const Cat = () => {
  return (
    <View>
      <Text style={styles.textcolor}>Hello, I am...</Text>
      <TextInput
        style={styles.boxstyle}
        defaultValue="Name me!"
      />
    </View>
  );
}

export default Cat;
