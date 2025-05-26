import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>
          Navegación básica con app router y Link
        </Text>
        <Link href="/settings" style={styles.link}>
          <Text>Página de ajustes</Text>
        </Link>
        <Link
          href={{ pathname: "/profile", params: { name: "Sarah Schmidt" } }}
          style={styles.link}
        >
          <Text>Página de perfil</Text>
        </Link>
        <Link href="/products" style={styles.link}>
          <Text>Página de productos</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginBottom: 10,
    fontSize: 16,
  },
});
