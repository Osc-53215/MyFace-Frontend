import React from 'react'
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreOutlined';
import { Avatar, IconButton } from '@material-ui/core';

const NavBar =()=>{
    return(

  <nav>
  <div className="nav-wrapper white" >
    <Link to="/" className="brand-logo left">My Face</Link>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
      <li><Link to="/create">Post</Link></li>
     <li>
     <IconButton>
          <ExpandMoreIcon />
      </IconButton>
     </li>
      
    </ul>
  </div>
</nav>
    )
}

export default NavBar