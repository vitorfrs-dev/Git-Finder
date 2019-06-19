import React from 'react';
import ReposContainer from './ReposContainer';
import FavoriteReposContainer from './FavoriteReposContainer';
import { Button, Container } from '@material-ui/core';


class ViewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onHomeScreen: true
        }
        this.changeView = this.changeView.bind(this);
    }

    changeView() {
        this.setState({
            onHomeScreen: !this.state.onHomeScreen
        })
    }

    render() {
        return (
            <Container>
            <div style={{marginTop: 50}}>
                <div style={{textAlign:'center'}}>
                    <Button variant="outlined" color="primary" onClick={this.changeView}>
                        {this.state.onHomeScreen ? 'Meus favoritos' : 'Pesquisar no Github'}
                    </Button>
                </div>

                {this.state.onHomeScreen  && <ReposContainer />}
                {!this.state.onHomeScreen  && <FavoriteReposContainer />}
            </div>
            </Container>
        );
    }
}

export default ViewContainer;