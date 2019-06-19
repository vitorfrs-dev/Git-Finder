import React from 'react';
import { Grid, Paper, Typography, Button} from '@material-ui/core';
import { AddToFavorites, RemoveFavorites } from './github services/GithubFavoritos';

const style = {
    padding: 20,
    display: 'block'
}

class RepoCard extends React.Component {
    
    render(){

        return (
            
            <Grid item sm={6}>
                 <Paper style={style}>
                    <Typography variant="h6" gutterBottom>{this.props.name}</Typography>
                    <Typography gutterBottom>
                        {this.props.desc}
                    </Typography>
                    <Grid container>
                        <Grid item sm>
                            <Typography>    
                                <i className="fas fa-code-branch"></i> <strong>Forks: </strong> {this.props.forks}
                            </Typography>
                        </Grid>
                        <Grid item sm>
                            <Typography>
                                <i className="fas fa-star"></i> <strong>Stars: </strong>{this.props.stars}
                            </Typography>
                        </Grid>
                    </Grid>

                    {!this.props.remove && <Button onClick={()=> {
                        AddToFavorites(this.props.data).then(()=>{alert('Adicionado aos favoritos')})
                    }}>add aos favoritos</Button>}

                    {this.props.remove && <Button onClick={() =>{
                        RemoveFavorites(this.props.id).then(() => {
                            this.props.onDelete();
                        })
                    }}>Excluir</Button>}
                </Paper>
            </Grid>

        );
    }

}

export default RepoCard;