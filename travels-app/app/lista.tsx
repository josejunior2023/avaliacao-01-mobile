import React from "react";
import { SectionList, Text, View, Image, StyleSheet } from "react-native";
import { organizeByOrigin } from "../helpers/helper";
import AcTion from "../components/action";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

const Lista = () => {
  const sections = organizeByOrigin();

  return (
    <ActionSheetProvider>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Lista</Text>
          <AcTion />
        </View>

        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id.toString()}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image
                source={{ uri: item.passenger_avatar }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.name}>{item.passenger_name}</Text>
                <Text style={styles.details}>
                  Origem: {item.origin} - Destino: {item.destination}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </ActionSheetProvider>
  );
};

export default Lista;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
  details: {
    fontSize: 14,
    color: "#666",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  header: {
    fontSize: 17,
    marginTop: 10,
    marginBottom: 3,
    margin: 10,
    fontWeight: "bold",
    borderRadius: 1,
    backgroundColor: "gray",
    padding: 1,
    color: "black",
  },
  avatar: {
    borderRadius: 10,
    width: 37,
    height: 37,
    marginRight: 10,
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "black",
    fontSize: 15,
    alignItems: "center",
    padding: 10,
    margin: 10,
    marginBottom: 3,
    borderRadius: 1,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
