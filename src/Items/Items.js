import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom'

class Items extends Component {
  componentDidMount() {
}
  render() {
    let itemsList = () => {
      let items = []
        for(let i = 1; i < 3; i++){
        items.push(<li id={`${i}`}><Link id='1' to={`item/${this.id}`} replace>test {i}</Link></li>)
        }
        console.log(items)
      return items;
    }
  return(
    <div>
      <ul>
        {itemsList()}
      </ul>
    </div>
  )
}
}

export default Items;