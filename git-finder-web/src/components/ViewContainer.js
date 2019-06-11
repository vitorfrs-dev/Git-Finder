import React from 'react';
import ReposContainer from './ReposContainer';
import FavoriteReposContainer from './FavoriteReposContainer';
import { Button } from '@material-ui/core';


class ViewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'search'
        }
        this.changeView = this.changeView.bind(this);
    }

    changeView() {

        let newView = this.state.view === 'search' ? 'favorite': 'search';

        this.setState({
            view: newView
        })
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <div>
                    <Button variant="outlined" color="primary" onClick={this.changeView}>
                        Ver {this.state.view === 'search'? 'favoritos' : 'Repositórios'}
                    </Button>
                </div>

                {this.state.view === 'search' && <ReposContainer />}
                {this.state.view === 'favorite' && <FavoriteReposContainer />}
            </div>
        );
    }
}

export default ViewContainer;