import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


// Vai receber uma função como callback que irá alterar o estado da view
// Vai receber também  um prop que vai mostrar a view atual

const Navbar = props => (

    <View style={styles.navbar}>
        <View style={styles.navItem}>
            <TouchableOpacity style={styles.btn} onPress={() => {props.onViewChange(2)}}>
                <Text style={props.actView == 2 ? styles.actView : null}>Favoritos</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.navItem}>
            <TouchableOpacity style={styles.btn} onPress={() => {props.onViewChange(1)}}>
                <Text style={props.actView == 1 ? styles.actView : null}>Home</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.navItem}>
            <TouchableOpacity style={styles.btn} onPress={() => {props.onViewChange(3)}}>
                <Text style={props.actView == 3 ? styles.actView : null}>Sobre</Text>
            </TouchableOpacity>
        </View>
    </View>

);

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom:0
    },

    navItem: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    },

    btn:{
        padding: 15
    },

    actView: {
        fontWeight: '700'
    }
});


export default Navbar;