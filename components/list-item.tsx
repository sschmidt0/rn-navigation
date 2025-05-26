import { Product } from "@/types/product";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export interface ListItemProps {
  item: Product;
}

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      <View style={styles.row}>
        <Text style={styles.price}>{`${item.price} €`}</Text>
        <Pressable onPress={() => router.push(`/products/${item.id}`)}>
          <Text style={styles.link}>Ver detalles</Text>
        </Pressable>

        {/* <Pressable
          onPress={() =>
            router.push({
              pathname: `/products/[id]`,
              params: {
                id: item.id,
                title: item.title,
                price: item.price,
                description: item.description,
              },
            })
          }
        >
          <Text style={styles.link}>Ver detalles</Text>
        </Pressable> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
  },
  description: {
    marginTop: 4,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  price: {
    fontSize: 16,
  },
  link: {
    color: "#007AFF",
    fontSize: 16,
  },
});
