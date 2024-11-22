import React from 'react'
import Logo from "../img/logo.png"
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
const Navbar = () => {

  const {currentUser,logout}=useContext(AuthContext)
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
          
        </div>
        <div className="links">
          <Link className="link" to ="/?cat=IEEE">
            <h6> IEEE</h6>
          </Link>
          <Link className="link" to ="/?cat=Securinets">
            <h6> Securinets</h6>
          </Link>
          <Link className="link" to ="/?cat=Tunivision">
            <h6> Tunivision</h6>
          </Link>
          <Link className="link" to ="/?cat=Gaming-LAb">
            <h6> Gaming-LAb</h6>
          </Link>
          <Link className="link" to ="/?cat=Game-zone">
            <h6> Game-zone</h6>
          </Link>
          {/* <Link className="link" to ="/?cat=ACM">
            <h6> ACM</h6>
          </Link> */}
          <Link className="link" to ="/?cat=Formaclub">
            <h6> Formaclub</h6>
          </Link>
          <Link className="link" to ="/?cat=MTC">
            <h6> MTC</h6>
          </Link>
          
          <span>{currentUser?.username}</span>
          {currentUser?
          <span onClick={logout}>Logout</span>:
          <Link className='link' to='/login'> Login</Link>}

          <span className='write'>
            <Link className="link"to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
