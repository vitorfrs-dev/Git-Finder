import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import Repo from './Repo';

class Favorites extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favorites: []
        }

        this.deleteFavorite = this.deleteFavorite.bind(this);
        this.requestFavortite = this.requestFavortite.bind(this);

    }

    componentDidMount() {
        this.requestFavortite();
    }

    requestFavortite() {
        axios.get('https://gitapp-5d5d5.firebaseio.com/favorites.json')
        .then(res => {
            // this.setState({favorites: res.data})
            console.log(res);
        })
    }

    deleteFavorite(id) {
        axios.delete('https://gitapp-5d5d5.firebaseio.com/favorites.json/' + id)
        .then(() => {
            requestFavortite();
        });
    }

    render() {
        return(
            <ScrollView style = {styles.mainWrapper}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Favoritos</Text>
                </View>

                <View style={styles.favoritesSection}>
                    {this.state.favorites.map(item => 
                        <Repo
                            remove
                            onRemoveFavorite = {this.deleteFavorite} 
                            key={item.id}
                            name={item.name}
                            desc={item.description}
                            forks={item.forks}
                            stars={item.stargazers_count}
                        />
                    )}
                </View>
            </ScrollView>
        );
    }
    
}

const styles = StyleSheet.create({
    mainWrapper : {
        flex: 1,
        marginBottom: 40
    },
    header: {
        backgroundColor: '#0070c0',
        padding: 20,
        marginBottom: 30
    },

    headerText: {
        color: '#fff',
        fontWeight: '700',
        textAlign: 'center'
    },

    favoritesSection: {
        padding: 10
    }
});

export default Favorites;