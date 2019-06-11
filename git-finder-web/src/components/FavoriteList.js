import React from 'react';
import { ListItem } from '@material-ui/core';
import RepoCard from './RepoCard';

class FavoriteList extends React.Component { 
   
    render() {
        return(
            <div>
                {this.props.f_repos.map(repo => (
                    <RepoCard 
                    key={repo.id} 
                    name={repo.name} 
                    stars={repo.stargazers_count}
                    forks={repo.forks}
                    desc={repo.description}
                />
                ))}
            </div>
        );
    }
}

export default FavoriteList;