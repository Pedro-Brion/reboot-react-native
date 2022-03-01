import React from "react";
import { Image, Text, View } from "react-native";

import { styles } from "./styles";

interface ProductProperties{
    name:string;
    description:string;
    price:number;
    image:string;
}

export function Product (props:ProductProperties){
    return (
        <View style={styles.contentProduct}>
          <Image style={styles.image} source={{uri:props.image}} />
          <Text style={styles.productTitle}>{props.name}</Text>
          <Text style={styles.productDescription}>{props.description}</Text>
          <Text style={styles.price}>R${props.price}</Text>
        </View>
    )
}
