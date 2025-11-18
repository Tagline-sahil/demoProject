import { Animated, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';

const AnimatedTest = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const textOpacityX = useRef(new Animated.Value(0)).current;
  const textOpacityY = useRef(new Animated.Value(0.5)).current;

  const rotatedDeg = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    Animated.timing(position, {
      toValue: { x: 25, y: 35 },
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    Animated.timing(textOpacityX, {
      toValue: 170,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    Animated.timing(textOpacityY, {
      toValue: 250,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'red',
          transform: [{ rotate: rotatedDeg }],
        }}
      >
        <Animated.Text
          style={{
            color: 'black',
            fontSize: 20,
            transform: [{ translateX: position.x }, { translateY: position.y }],
          }}
        >
          Hello
        </Animated.Text>
      </Animated.View>
      <Animated.View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'green',
          transform: [
            { translateX: textOpacityX },
            { translateY: textOpacityY },
          ],
        }}
      ></Animated.View>
    </View>
  );
};

export default AnimatedTest;

const styles = StyleSheet.create({});
