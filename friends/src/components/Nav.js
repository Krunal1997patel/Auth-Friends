import React from 'react';
import { NavLink, withRouter  } from 'react-router-dom';

const Nav = props => {


    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('message')
        props.history.push('/')
    }

    return(

        localStorage.getItem('token') 
        ?
        <nav>
          <NavLink  onClick={logOut} className='Link' to='/'>Log Out</NavLink>
          <NavLink  className='Link' to='/friendList'>Friends</NavLink>
          <NavLink  className='Link' to='/addFriend'>Add Friends</NavLink>
        </nav>
        :
        <nav>
          <NavLink  className='Link' to='/'>SignUp</NavLink>
        </nav>
    )
}

export default withRouter(Nav)