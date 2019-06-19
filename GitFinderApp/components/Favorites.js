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

            let keys, data, repos;

            repos = [];

            /*  
                Transforma a reposta do firebase em um array de objetos,
                cada item do array terá a seguinte estrutura:
                {  
                    key: 'hash unico de cada registro no firebase',
                    data: {...}
                }
            */

            if (res.data) {                                        
                keys = Object.keys(res.data);
                data = Object.values(res.data);

                for (let i = 0; i < keys.length; i++) {
                    let newData = {
                        firebaseKey: keys[i],
                        data: data[i]
                    }

                    repos.push(newData);
                }

                this.setState({favorites: Object.values(repos)});
                
            } else {
                this.setState({favorites: []});
            }  
        })
    }

    deleteFavorite(id) {
        axios.delete('https://gitapp-5d5d5.firebaseio.com/favorites/' + id + '.json')
        .then(() => {
            this.requestFavortite();
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
                            onRemoveFavorite = {() => {this.deleteFavorite(item.firebaseKey)}} 
                            key={item.data.id}
                            name={item.data.name}
                            desc={item.data.description}
                            forks={item.data.forks}
                            stars={item.data.stargazers_count}
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