import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './SpaceX_logo_blackwhite.svg';
// import {withRouter} from "react-router-dom"
import { MDBCardText, MDBContainer, Jumbotron } from "mdbreact";

import {auth} from './../../firebase/firebase.utils';
// import Homepage from '../../pages/Homepage.comp';
import './header.styles.scss';

const Header = ({currentUser}) => (
  <>
 <Jumbotron fluid>
 <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>

   
</Jumbotron>

<div className='header'>
    {/* <Link className='logo-container' to='/'> */}
      {/* <Logo className='logo' /> */}
    {/* </Link> */}

    <div className='options'>
      
      {/* <Link className='option' > 
      <a href='http://google.com'> Googoge </a>
      </Link> */}

      <Link className='option' to='/homepage'>
        Launch History
      </Link>

      {/* <Link className='option' to='/signin'>
        Login 
      </Link> */}
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
        :
        <Link className='option' to='/signin'>
          Sign in 
        </Link>
      }
    </div>
  </div>



{/* </MDBContainer> */}

  

  

  </>
);

export default Header;