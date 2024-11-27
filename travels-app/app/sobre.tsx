import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import AcTionSobre from "@/components/actionSobre";

const Sobre = () => {
  const handleOpenGitHub = () => {
    Linking.openURL("https://github.com/josejunior2023/avaliacao-01-mobile");
  };

  return (
    <ActionSheetProvider>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Sobre</Text>
          <AcTionSobre />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardText}>DESENVOLVIDO POR</Text>
          <Text style={styles.cardText}>JOSÉ ALBANIR DE RE JÚNIOR</Text>
          <TouchableOpacity onPress={handleOpenGitHub}>
            <Text style={[styles.cardText, styles.cardLink]}>
              GitHub: https://github.com/josejunior2023/avaliacao-01-mobile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheetProvider>
  );
};

export default Sobre;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  card: {
    flexGrow: 0,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 300,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 10,
    color: "white",
  },
  cardLink: {
    textDecorationLine: "underline",
    color: "white",
  },
});
