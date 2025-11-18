import React, { useRef } from 'react';
import { View, Animated, Button } from 'react-native';

export default function Animatedd() {
  const position = useRef(new Animated.Value(0)).current;

  const startDecay = () => {
    Animated.decay(position, {
      velocity: 1, // how fast it starts moving
      deceleration: 0.981, // how fast it slows down
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          width: 60,
          height: 60,
          backgroundColor: 'blue',
          transform: [{ translateY: position }],
        }}
      />
      <Button title="Run Decay" onPress={startDecay} />
    </View>
  );
}
