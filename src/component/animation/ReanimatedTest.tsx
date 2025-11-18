import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Animated from 'react-native-reanimated';
import createBoxAnimation from './createBoxAnimation';

const ReanimatedTest = () => {
  const redStyle = createBoxAnimation(1500, -150, -370, -360);
  const yellowStyle = createBoxAnimation(2000, 150, -370, 360);
  const greenStyle = createBoxAnimation(2500, -150, 370, -360);
  const blueStyle = createBoxAnimation(3000, 150, 370, 360);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {/* blue */}
      <Animated.View
        style={[
          {
            height: 100,
            width: 100,
            backgroundColor: 'blue',
            position: 'absolute',
          },
          blueStyle,
        ]}
      ></Animated.View>
      {/* green */}
      <Animated.View
        style={[
          {
            height: 100,
            width: 100,
            backgroundColor: 'green',
            position: 'absolute',
          },
          greenStyle,
        ]}
      ></Animated.View>
      {/* yellow */}
      <Animated.View
        style={[
          {
            height: 100,
            width: 100,
            backgroundColor: 'yellow',
            position: 'absolute',
          },
          yellowStyle,
        ]}
      ></Animated.View>
      {/* red */}
      <Animated.View
        style={[
          {
            height: 100,
            width: 100,
            backgroundColor: 'red',
            position: 'absolute',
          },
          redStyle,
        ]}
      ></Animated.View>
    </View>
  );
};

export default ReanimatedTest;

const styles = StyleSheet.create({});
