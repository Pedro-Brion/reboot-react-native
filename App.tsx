import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Product } from "./src/components/CardProduct";

interface Product{
  name: string;
  description:string;
  price:number;
  image:string;
}

const response = {
  data: [
    {
      name: "Mamacode",
      description: "Cool Monkey",
      price: 666.66,
      image: "https://picsum.photos/200?grayscale",
    },
    {
      name: "DogCode",
      description: "Cool Dog",
      price: 66.66,
      image: "https://picsum.photos/200?grayscale",
    },
    {
      name: "Mamacode",
      description: "Cool Monkey",
      price: 666.66,
      image: "https://picsum.photos/200",
    },
    {
      name: "Mamacode",
      description: "Cool Monkey",
      price: 666.66,
      image: "https://picsum.photos/200?grayscale",
    },
  ],
};

import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#3c244b"></StatusBar>
      <View style={styles.header}>
        <Text style={styles.title}>Olá Code</Text>
      </View>
      <ScrollView
        style={styles.products}
        contentContainerStyle={styles.productsContainer}
      >
        {productsRender()}
      </ScrollView>
    </View>
  );

  function productsRender(){
    const productList=
    response.data.map((product)=>(
      <Product
        name={product.name}
        description={product.description} 
        price={product.price}
        image={product.image}
      />
    ))

    return productList;
  }
}
