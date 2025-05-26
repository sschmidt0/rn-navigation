import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
//import { useLocalSearchParams } from "expo-router";

const Profile = () => {
  // const params = useLocalSearchParams();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Perfil</Text>
        {/* <Text style={styles.name}>{params.name}</Text> */}
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: { fontSize: 16, fontWeight: "bold" },
  name: { fontSize: 30, marginTop: 10 },
});
