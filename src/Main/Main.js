import React, { Component } from "react";
import Items from "../Items/Items";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <main>
        <div className="items-container">
          <Link to="Add">( + )</Link>
          <Items renderItem={this.props.renderItem} />
        </div>
        <Item />
      </main>
    );
  }
}

export default Main;
