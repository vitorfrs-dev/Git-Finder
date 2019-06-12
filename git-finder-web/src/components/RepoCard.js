import React from 'react';
import { Grid, Paper, Typography} from '@material-ui/core';
import { AddToFavorites, RemoveFavorites } from './github services/GithubFavoritos';

const style = {
    padding: 20
}

class RepoCard extends React.Component {
    

    render(){

        return (
            
            <Grid item sm={4}>
                 <Paper style={style}>
                    <Typography variant="h5" gutterBottom>{this.props.name}</Typography>
                    <Typography gutterBottom>
                        {this.props.desc}
                    </Typography>
                    <Grid container>
                        <Grid item sm>
                            Forks: {this.props.forks}
                        </Grid>
                        <Grid item sm>
                            Stars: {this.props.stars}
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

        );
    }

}

export default RepoCard;