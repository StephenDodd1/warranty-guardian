import React, { Component } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import {ItemContext} from './context'
import { Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        item: null
      }
  }
  //setup context for later use
  static contextType = ItemContext;

  render() {
    let item = null;
    const renderItem = (e) => {
      return this.setState({item: e.target.id});
    };
    return (
      <div className="App">
        <Header />
        <Route path = '/' render = {() => (<Main renderItem={renderItem} item={this.state.item} />)} />
      </div>
    );
  }
}

export default App;
