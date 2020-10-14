import React from 'react';
import {Link} from 'react-router-dom'

function Items() {
  return(
    <div>
      <ul>
        <li id='1'><Link to='Item/:id'>test 1</Link></li>
        <li id='2'><Link to='Item/:id'>test 2</Link></li>
      </ul>
    </div>
  )
}

export default Items;