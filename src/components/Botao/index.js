import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native"

const MeuBotao = (props) => {

    return (
        <View style={style.container}>
            <TouchableOpacity style={style.botao}
            onPress={props.acao}>
                <Text style={style.texto}>{props.value}</Text>
            </TouchableOpacity>
        </View>
    )
};

const style = StyleSheet.create({
    botao:{
        alignItems: "center",
        backgroundColor: "#6DE398",
        padding:15,
        width: 210,
        fontSize: 18,
        color: "#fff",
        borderRadius: 10,
        marginTop:5,

    },
    texto:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }

});

export default MeuBotao;