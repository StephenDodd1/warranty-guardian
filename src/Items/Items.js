import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class Items extends Component {
  componentDidMount() {}

  render() {
    let itemsList = () => {
      let items = [];
      for (let i = 1; i < 3; i++) {
        items.push(
          <li id={`${i}`} key={`${i}`}>
            <Link
              id={`${i}`}
              to={`../item/${i}`}
              value={`${i}`}
              onClick={(e) => this.props.renderItem(e)}
            >
              test {i}
            </Link>
          </li>
        );
      }
      return items;
    };
    return (
      <div>
        <ul>{itemsList()}</ul>
      </div>
    );
  }
}

export default Items;
