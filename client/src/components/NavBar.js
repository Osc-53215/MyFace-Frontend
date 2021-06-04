import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {UserContext} from '../App';


const NavBar =()=>{
const {state,dispatch} = useContext(UserContext)
const renderList = ()=>{
  if(state){
    return [
      <li><Link to="/"><i class="material-icons">home</i></Link></li>,
      <li><Link to="/profile"><i class="material-icons">account_circle</i></Link></li>,
      <li><Link to="/create"><i class="material-icons">add_a_photo</i></Link>
      </li>
    ]
  }else{
    return [
      <li><Link to="/login">Login</Link></li>,
      <li><Link to="/signup">Signup</Link></li>
    ]
  }
}


return(
  <nav>
  <div className="nav-wrapper white" >
    <Link to={state?"/":"login"} className="brand-logo left">My Face</Link>
    <ul id="nav-mobile" className="right">
      {renderList()}
      
      </ul>
  </div>
</nav>
    )
}
export default NavBar