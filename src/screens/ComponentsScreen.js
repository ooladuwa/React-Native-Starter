import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  let name = "Onaje";

  return (
    <View>
      <Text style={styles.textStyle2}>Getting started with React Native!</Text>
      <Text style={styles.textStyle3}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  textStyle2: {
    fontSize: 45,
  },
  textStyle3: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
