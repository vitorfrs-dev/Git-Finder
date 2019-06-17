/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GitApp from './components/GitApp';
import Navbar from './components/Navbar';
import Favorites from './components/Favorites';
export default class App extends Component {

  constructor(props) {
    super(props);

    this.state ={
      view: 1
    }

    this.changeView = this.changeView.bind(this);
  }

  changeView(view) {
    this.setState({
      view: view
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.view == 1 && <GitApp />}
        {this.state.view == 2 && <Favorites />}
        <Navbar onViewChange={this.changeView} actView={this.state.view}/>
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
