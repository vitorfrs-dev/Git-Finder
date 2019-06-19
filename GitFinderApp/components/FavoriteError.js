import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FavoriteError = () => (
    <View style={style.container}>
        <Text style ={style.title}>Ops, nenhum favorito encontrado</Text>
        <Text style ={style.text}>Pesquise por um usuário e adicione um repositório 
            para a sua lista de favoritos.</Text>
    </View>
);

style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 400,
        padding: 20
    },

    title: {
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 15
    },

    text: {
        lineHeight: 20,
        textAlign: 'center'
    }
});

export default FavoriteError;