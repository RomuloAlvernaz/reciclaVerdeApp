import React from "react";
import {SafeAreaView, TextInput, StyleSheet} from 'react-native';

    const MyInput = () => {
        return (
            <SafeAreaView>
                <TextInput
                style={style.input}
                placeholder="Digite aqui a sua busca"
                ></TextInput>
            </SafeAreaView>
        );

    }

    const style = StyleSheet.create({
        input: {
            borderWidth: 1,
            marginBottom: 15,
            marginTop: -90,
            padding: 10,
            width: 320,
            fontSize: 18,
            color:"#1a1a1a",
            borderRadius: 4,
        }
    });

    export default MyInput;