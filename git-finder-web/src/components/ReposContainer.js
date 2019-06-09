import React from 'react';
import { fetchRepos } from './github services/GithubRepos';
import Repos from './Repos';

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

    inputHandler(e) { //Evento do input - altera o stado username
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
        });
    }

    render() {
        return (
            <div>
                <h1>Repositórios</h1>
                <form action='#' onSubmit={this.submitHandler}>
                    <input 
                        type="text"
                        onChange={this.inputHandler} 
                        placeholder = "Digite o nome do usuário"
                    />
                </form>

                <Repos repos={this.state.repos}/>

            </div>
        );
    }
}

export default ReposContainer;