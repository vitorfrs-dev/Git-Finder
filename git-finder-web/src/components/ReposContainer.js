import React from 'react';
import { fetchRepos } from './github services/GithubRepos';
import Repos from './Repos';
import { Typography, TextField } from '@material-ui/core'

class ReposContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            repos: []
        };

        this.inputHandler = this.inputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    inputHandler(e) { //Evento do input - altera o estado username
        let text = e.target.value;
        this.setState({
            username: text
        });
    }

    submitHandler(e) {
        e.preventDefault(); 
        fetchRepos(this.state.username)
        .then(res => {
            this.setState({repos:res.data})
        })
        .catch(() => {
            this.setState({repos: []})
        }); 

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
        return (

                <div>
                    <div style={style.mainTitle}>
                        <Typography variant="h5">Repositórios</Typography>
                    </div>

                    <form action='#' onSubmit={this.submitHandler}>
                        
                        <div style ={style.inputHolder}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                onChange={this.inputHandler} 
                                placeholder = "Digite o nome do usuário"
                            />
                        </div>
                        
                    </form>

                    <Repos repos={this.state.repos}/>

                </div>
        );
    }
}

export default ReposContainer;