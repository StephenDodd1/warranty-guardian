import React from 'react';
import { Component } from 'react';

class Item extends Component {
 
  render() {
    const renderItem = this.props.item !== null ? 
    <div>Item rendered {this.props.item}</div> : <></>
  return(
    renderItem
  )
}
}

export default Item;