import React from 'react';
import ReposContainer from './ReposContainer';
import FavoriteReposContainer from './FavoriteReposContainer';
import { Button, Container } from '@material-ui/core';


class ViewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: true
        }
        this.changeView = this.changeView.bind(this);
    }

    changeView() {
        this.setState({
            view: !this.state.view
        })
    }

    render() {
        return (
            <Container>
            <div style={{marginTop: 50}}>
                <div style={{textAlign:'center'}}>
                    <Button variant="outlined" color="primary" onClick={this.changeView}>
                        Ver {this.state.view ? 'favoritos' : 'Repositórios'}
                    </Button>
                </div>

                {this.state.view  && <ReposContainer />}
                {!this.state.view  && <FavoriteReposContainer />}
            </div>
            </Container>
        );
    }
}

export default ViewContainer;