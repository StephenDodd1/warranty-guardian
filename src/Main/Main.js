import React from 'react';
import Items from '../Items/Items'
import Item from '../Item/Item'
import {Link} from 'react-router-dom'

function Main() {
  return(
    <main>
      <div className = 'items-container'>
      <Link to='Add'>( + )</Link>
      <Items />
      </div>
      <Item />
    </main>
  )
}

export default Main;