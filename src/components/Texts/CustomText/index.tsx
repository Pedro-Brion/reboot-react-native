import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export function CustomText ({...props}){
    return (
        <View>
            <Text style={[styles.default, props.style]}>
                {props.children}
            </Text>
        </View>
    )
}