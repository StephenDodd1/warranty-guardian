import React from 'react';
import { Component } from 'react';

class Item extends Component {
 
  render() {
    console.log(this.params)
  return(
    <div>Item rendered </div>
  )
}
}

export default Item;