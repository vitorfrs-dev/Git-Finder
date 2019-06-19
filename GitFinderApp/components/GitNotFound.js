import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GitNotFound = () => (
    <View style={error.containerError}>
        <Text style = {error.bigTitle}>404</Text>
        <Text style ={error.text}>Verifique se o nome se a pesquisa esta correta ou
        busque por outro usuário.</Text>
    </View>
);

const error = StyleSheet.create({
    bigTitle: {
        fontSize: 30,
        fontWeight: '700'
    },
    containerError: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        lineHeight: 20
    }
});

export default GitNotFound;