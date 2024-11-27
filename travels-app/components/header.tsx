import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useSegments } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  ActionSheetProvider,
  useActionSheet,
} from "@expo/react-native-action-sheet";
import AcTion from "./action";

const Header = () => {
  const router = useRouter();
  const segments = useSegments();
  const { showActionSheetWithOptions } = useActionSheet();

  const getTitle = () => {
    if (segments[0] === "lista") return "Lista";
    if (segments[0] === "sobre") return "Sobre";
    return "App";
  };

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{getTitle()}</Text>
      <ActionSheetProvider>
        <AcTion />
      </ActionSheetProvider>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  header: {
    height: 45,
    flexDirection: "row",
    backgroundColor: "black",
    alignItems: "center",
    paddingHorizontal: 12,
    justifyContent: "space-between",
    borderRadius: 0,
  },
});
