import React from 'react';
import { Grid } from '@material-ui/core';
import RepoCard from './RepoCard';

class FavoriteList extends React.Component { 
   
    render() {
        return(
            <Grid container spacing={2}>
                {this.props.f_repos.map(repo => (
                    <RepoCard
                    remove
                    key={repo.id}
                    id={repo.id} 
                    name={repo.name} 
                    stars={repo.stargazers_count}
                    forks={repo.forks}
                    desc={repo.description}
                />
                ))}
            </Grid>
        );
    }
}

export default FavoriteList;