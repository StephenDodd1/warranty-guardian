import React from 'react';
import { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null
    }
  }
  render() {
    const renderItem = this.state.item !== null ? 
    <div>Item rendered {window.location.pathname}</div> : <></>
  return(
    renderItem
  )
}
}

export default Item;