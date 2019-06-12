import React from 'react';
import FavoriteList from './FavoriteList';
import { RequestFavorites } from './github services/GithubFavoritos';
import { Typography } from '@material-ui/core';

class FavoriteReposContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favoriteRepos: []
        }
    }

    componentDidMount() {
        RequestFavorites().then(res => {
            this.setState({
                favoriteRepos: res.data
            });
        })
    }

    render() {

        const style = {
            inputHolder: {
                width: '100%',
                maxWidth: 600,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 30,
                marginBottom: 30
            },

            mainTitle: {
                textAlign: 'center',
                textTransform: 'uppercase',
                marginTop: 30,
                marginBottom: 30
            }
        }

        return(
            <div>
                <div style = {style.mainTitle}>
                    <Typography variant="h5">Repositórios Favoritos</Typography>
                </div>
                    
                <FavoriteList f_repos={this.state.favoriteRepos}/>
            </div>
        );
    }

}

export default FavoriteReposContainer;