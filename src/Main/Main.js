import React, { Component } from "react";
import Items from "../Items/Items";
import Item from "../Item/Item";
import Add from '../Add/Add'
import { Link, Route, Switch } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <main>
        <div className="items-container">
          <Link to="../Add">( + )</Link>
          <Items renderItem={this.props.renderItem} />
        </div>
        <Switch>
          <Route
            path="/item"
            render={() => {
              return <Item item={this.props.item} />;
            }}
          />
          <Route
            path="/add"
            render={() => {
              return <Add />;
            }}
          />
        </Switch>
      </main>
    );
  }
}

export default Main;
