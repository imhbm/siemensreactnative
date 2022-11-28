import React from 'react';
import { View,Text } from 'react-native';

const FlexDimensionsBasics = () => {
  return (
    // Try removing the `flex: 1` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    // What if you add `height: 300` instead of `flex: 1`?
    <View style={{ height: 300 }}>
      <View style={{ flex: 1, backgroundColor: 'powderblue' }} >
        <Text>Hello 1st View </Text>
        </View>
      <View style={{ flex: 2, backgroundColor: 'skyblue' }} >
      <Text>Hello 2nd View </Text>
        </View>
      <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
    </View>
  );
};

export default FlexDimensionsBasics;