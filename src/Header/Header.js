import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
  return(
    <header>
      <h1>Welcome to Warranty Guardian!</h1>
      <nav>
        <Link to='Login'>Login</Link>
        <Link to='Signup'>Signup</Link>
      </nav>
    </header>

  )
}

export default Header;