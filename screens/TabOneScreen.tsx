import * as React from "react";
import { StyleSheet, Animated } from "react-native";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Card from "../components/card/Card";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  
  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
 
});
