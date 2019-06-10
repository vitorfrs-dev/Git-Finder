import React from 'react';
import FavoriteList from './FavoriteList';
import { RequestFavorites } from './github services/GithubFavoritos';

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
        return(
            <div>
                <h1>Repositórios Favoritos</h1>
                <FavoriteList f_repos={this.state.favoriteRepos}/>
            </div>
        );
    }

}

export default FavoriteReposContainer;