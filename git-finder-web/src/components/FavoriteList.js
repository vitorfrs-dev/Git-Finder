import React from 'react';
import { ListItem } from '@material-ui/core';

class FavoriteList extends React.Component { 
   
    render() {
        return(
            <div>
                {this.props.f_repos.map(repo => (
                    <ListItem key={repo.id}>{repo.name} </ListItem>
                ))}
            </div>
        );
    }
}

export default FavoriteList;