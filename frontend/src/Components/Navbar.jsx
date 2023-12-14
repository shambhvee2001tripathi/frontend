import React from 'react'
import { NavLink } from 'react-router-dom';
// import useAppContext from '../AppContext';

const Navbar = () => {

//   const {loggedin , logout} = useAppContext();

//   const showOption = () => {
//     if(loggedin) {
//       return (
//        <li className='nav-item'>
//         <button className='btn btn-danger' onClick={logout}>Logout</button>
//       </li>
//       )
//     }
  // }


  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid" style={{backgroundColor:'crimson',}}>
    <a style={{color:'white'}} className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink style={{color:'white'}} className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={{color:'white'}} className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={{color:'white'}} className="nav-link" to="/signup">
            Signup
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={{color:'white'}} className="nav-link" to="/addhandicrafts">
            AddHandicrafts
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={{color:'white'}} className="nav-link" to="/browsehandicraft">
            BrowseHandicraft
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink style={{color:'white'}} className="nav-link" to="/viewhandicraft">
            ViewHandicraft
          </NavLink>
        </li> */}
       {/* <li style={{color:'white'}} className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <NavLink className="dropdown-item" to="/event">
                EventHandling
              </NavLink>
            </li>

            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li> */}
        {/* { showOption() } */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> */}
    </div>
  </div>
</nav>
  )
}

export default Navbar;