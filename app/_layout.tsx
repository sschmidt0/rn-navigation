import React from "react";
import { Slot, Stack } from "expo-router";

// const RootLayout = () => {
//   return <Slot />;
// };

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: true }} />
      <Stack.Screen name="settings" options={{ title: "Ajustes" }} />
      <Stack.Screen
        name="profile"
        options={{ title: "Perfil", headerBackTitle: "Inicio" }}
      />
      <Stack.Screen
        name="products/index"
        options={{ title: "Productos", headerBackTitle: "Inicio" }}
      />
      <Stack.Screen name="products/[id]" />
    </Stack>
  );
};

export default RootLayout;
