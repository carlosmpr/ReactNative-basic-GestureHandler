import React from 'react'
import { View } from '../Themed'
import { StyleSheet } from 'react-native';

export default function Square() {
    return (
        <View style={styles.card} >
            
        </View>
    )
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