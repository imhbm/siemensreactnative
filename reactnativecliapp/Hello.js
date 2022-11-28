import {React,Component} from 'react';
import {Text} from 'react-native';

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
}

const Hello = () => {
  return (
    <Text>
      Hello, I am {getFullName("Narendra", "Damodar Das", "Modi")}!
    </Text>
  );
}
export default Hello;

