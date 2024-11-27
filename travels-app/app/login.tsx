import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import ImageButton from "../components/ImageButton";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      alert("Por favor digite um usuário e senha!");
      return;
    }
    if (username !== "fulano" || password !== "123") {
      alert("Usuário ou senha incorreto.");
      return;
    }

    router.push("./lista");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <ImageButton
        source={require("../assets/images/login.png")}
        onPress={handleLogin}
        style={styles.buttonImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logo: {
    marginBottom: 20,
    width: 170,
    height: 170,
  },
  input: {
    width: "100%",
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 1,
    padding: 7,
  },
  buttonImage: {
    marginTop: 20,
    width: 200,
    height: 50,
  },
});
