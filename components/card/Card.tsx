import React from "react";

import { StyleSheet, Animated } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

export default function Card() {
  let translateX = new Animated.Value(0);
  let translateY = new Animated.Value(0);
  let onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );
  return (
    <PanGestureHandler onGestureEvent={onPanGestureEvent}>
      <Animated.View
        style={[
          styles.card,
          {
            transform: [
              {
                translateX: translateX,
              },
              {
                translateY: translateY,
              },
            ],
          },
        ]}
      >
       
      </Animated.View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "50%",
    height: "30%",
    backgroundColor: "red",
    padding: 25,
    borderRadius: 25,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: "red",
    shadowOffset: { height: 0, width: 0 },
  },
});
