import React from 'react';
import { RequestFavorites } from './github services/GithubFavoritos';
import { Typography, Grid } from '@material-ui/core';
import RepoCard from './RepoCard';

class FavoriteReposContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favoriteRepos: []
        }

        this.requestApi = this.requestApi.bind(this);
    }

    componentDidMount() {
       this.requestApi();
    }

    requestApi() {
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
                    
                {/* <FavoriteList f_repos={this.state.favoriteRepos}/> */}

                <Grid container spacing={2}>
                    {this.state.favoriteRepos.map(repo => (
                        <RepoCard
                        remove
                        onDelete ={this.requestApi}
                        key={repo.id}
                        id={repo.id} 
                        name={repo.name} 
                        stars={repo.stargazers_count}
                        forks={repo.forks}
                        desc={repo.description}
                    />
                    ))}
            </Grid>
            </div>
        );
    }

}

export default FavoriteReposContainer;