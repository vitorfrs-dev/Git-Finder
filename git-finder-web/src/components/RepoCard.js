import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import { AddToFavorites, RemoveFavorites } from './github services/GithubFavoritos';

class RepoCard extends React.Component {
    

    render(){

        const classes = () => {
            const card = {
                width: '300px',
                marginTop: '1em',
                float: 'left'
            }
        }

        return (
            <Card  style={{
                width: '300px',
                marginTop: '1em'
            }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">{this.props.name}</Typography>
                    <Typography varian="body2">{this.props.desc}</Typography>
                    <Typography>Forks: {this.props.forks}</Typography>
                    <Typography>Stars: {this.props.stars}</Typography>
                    
                    {!this.props.remove && <Button onClick={() => {
                        AddToFavorites(this.props.data)
                    }}>Add Favoritos</Button>}

                    {this.props.remove && <Button onClick={() => {
                        RemoveFavorites(this.props.id);
                    }}>Excluir</Button>}


                </CardContent>

            </Card>
        );
    }

}

export default RepoCard;