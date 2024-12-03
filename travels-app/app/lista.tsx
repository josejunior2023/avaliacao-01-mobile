import React from "react";
import { SectionList, Text, View, StyleSheet, Image } from "react-native";
import { organizeByCountry } from "../helpers/helper";

const Lista = () => {
  const groupedData = organizeByCountry();

  const renderItem = ({
    item,
  }: {
    item: (typeof groupedData)[0]["data"][0];
  }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.passenger_avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.passenger_name}</Text>
        <Text>{`${item.origin} → ${item.destination}`}</Text>
      </View>
    </View>
  );

  const renderSectionHeader = ({
    section: { title },
  }: {
    section: { title: string };
  }) => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={groupedData}
        keyExtractor={(item, index) => item.passenger_name + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  header: {
    backgroundColor: "gray",
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
  },
});

export default Lista;
