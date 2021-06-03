import React from 'react'
import { Link } from 'react-router-dom';

const NavBar =()=>{
    return(

  <nav>
  <div className="nav-wrapper white" >
    <Link className="brand-logo left">My Face</Link>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <Link to="/"><i class="material-icons">home</i></Link>
        </li>
      <li>
        <Link to="/create"><i class="material-icons">add_a_photo</i></Link>
      </li>
      <li>
        <Link to="/profile"><i class="material-icons">account_circle</i></Link>
      </li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
    </ul>
  </div>
</nav>
    )
}

export default NavBar