import React from "react";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { PRODUCTS } from "@/db/products";

const ProductDetail = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams<{
    id: string;
  }>();

  const product = PRODUCTS.find((product) => product.id === id);

  React.useEffect(() => {
    navigation.setOptions({
      title: product?.title || "Detalles del producto",
    });
  }, [navigation]);

  if (!product) {
    return <Redirect href="/products" />;
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>{product?.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{`${product.price} €`}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    marginTop: 8,
    fontSize: 16,
  },
  price: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: "bold",
  },
});
