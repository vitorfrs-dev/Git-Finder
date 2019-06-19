import React from 'react';
import {StyleSheet, Text, TextInput, View, ScrollView, Button} from 'react-native';
import axios from 'axios';
import Repo from './Repo';
import GitNotFound from './GitNotFound';

class GitApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            repos: [],
            notFound: false
        }

        this.handleInput = this.handleInput.bind(this);
        this.addToFavorite = this.addToFavorite.bind(this);
    }

    handleInput(event) {

        let text = event.nativeEvent.text;

        axios.get('https://api.github.com/users/' +  text + '/repos')
        .then(res => {
            this.setState({repos: res.data, notFound: false});
        })
        .catch(() => {
            this.setState({repos: [], notFound: true});
        });

    }

    addToFavorite(data) {
        axios.post('https://gitapp-5d5d5.firebaseio.com/favorites.json', data)
        .then(() => {
            alert('Adicionado aos favoritos');
        });
    }

    render() {
        return (
            <ScrollView style = {style.mainWrapper}>
                <View style={style.intro}>
                    <Text style={style.introTitle}>Bem-vindo ao Git Finder!</Text>
                    <Text style={style.introText}>Olá, digite o nome de um usuário/organização 
                        e o Git Finder irá buscar pelos repositórios no Github</Text>
                </View>

                <View style={style.inputArea}>
                    <TextInput 
                        placeholder="Digite o nome do usuário"
                        onSubmitEditing={this.handleInput}
                        style = {style.inputUser}                   
                    />
                </View>

                {this.state.notFound && <GitNotFound />}

                <View style = {style.reposSection}>
                    {this.state.repos.map(repo => 
                    <Repo 
                        name={repo.name}
                        key={repo.id}
                        id={repo.id}
                        desc={repo.description}
                        stars={repo.stargazers_count}
                        forks={repo.forks}
                        data={repo}
                        onAddToFavorite = {this.addToFavorite}
                    />)}
                </View>
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        marginBottom:40
    },

    intro: {
        backgroundColor: '#0070c0',
        paddingTop: 30,
        alignItems: 'center'
    },

    introTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700'
    },

    introText: {
        color: '#fff',
        lineHeight: 22,
        textAlign: 'center',
        marginTop: 10
    },

    reposSection: {
        padding: 10
    },

    inputUser: {
        backgroundColor: '#9fabb4',
        borderRadius: 6,
        marginTop: 10,
        padding: 10
    },

    inputArea: {
        padding: 20,
        backgroundColor: '#0070c0'
    }

});

export default GitApp;