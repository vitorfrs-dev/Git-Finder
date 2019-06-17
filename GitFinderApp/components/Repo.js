import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Repo = props => (
    <View style={style.box}>
        <Text style={style.title}>{props.name}</Text>
        {props.desc && <Text style ={style.description}>{props.desc}</Text>}

        <View style={style.repoInfo}>
            <Text style = {style.repoInfoData}>Forks: {props.forks}</Text>
            <Text style = {style.repoInfoData}>Stars: {props.stars}</Text>
        </View>

        {!props.remove && <TouchableOpacity  style={style.btn} onPress={() => {props.onAddToFavorite(props.data)}}>
            <Text>Add Favoritos</Text>
        </TouchableOpacity>}

        {props.remove && <TouchableOpacity  style={style.btn} onPress={() => {props.onRemoveFavorite(props.id)}}>
            <Text style={style.btnDelete}>Excluir</Text>
        </TouchableOpacity>}

    </View>
);

const style = StyleSheet.create({
    
    box: {
        borderRadius: 5,
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10
    },

    btn: {
        marginTop: 10,
        textAlign: 'center'
    },

    btnDelete: {
        color: '#ff0000'
    },

    title: {
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 10
    },

    repoInfo: {
        flexDirection: 'row'
    },

    repoInfoData: {
        marginRight: 10,
        fontWeight: '700'
    },
    description: {
        marginBottom: 10
    }
});

export default Repo;