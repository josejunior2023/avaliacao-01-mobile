import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import Login from "./login";

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <Login></Login>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    padding: 20,
  },
});