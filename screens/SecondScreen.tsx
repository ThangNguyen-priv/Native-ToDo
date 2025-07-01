import { StyleSheet, Text, View } from "react-native";

import React from "react";

export default function SecondScreen() {
    return (
        <View style={styles.container}>
            <Text>This is the second screen.</Text>
            <Text>You can navigate to this screen from the first screen.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCFFCC",
  },
});
