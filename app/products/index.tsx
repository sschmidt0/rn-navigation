import { View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { PRODUCTS } from "@/db/products";
import { ListItem } from "@/components/list-item";

const Products = () => {
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={PRODUCTS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Products;
