import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const createBoxAnimation = (delay, x, y, rotate) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotation = useSharedValue(0);

  useEffect(() => {
    setTimeout(() => {
      translateX.value = withTiming(x, { duration: 800 });
      translateY.value = withTiming(y, { duration: 800 });
      rotation.value = withTiming(rotate, { duration: 800 });
    }, delay);
  }, []);

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotate: `${rotation.value}deg` },
      ],
    };
  });
  return style;
};

export default createBoxAnimation;

const styles = StyleSheet.create({});
