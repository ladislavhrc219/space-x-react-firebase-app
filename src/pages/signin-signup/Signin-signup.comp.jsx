import React from 'react';

import SignIn from './../../components/sign-in/sign-in.comp';
import SignUp from './../../components/sign-up/sign-up.comp';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

import './signin-signup.styles.scss';

const SignInSignUp = () => (
  <div className='sign-in-and-sign-up'>
     {/* <MDBContainer   className="flex-center"> */}
     <SignIn />

<SignUp/>
            
            {/* </MDBContainer> */}
    

  </div>
);

export default SignInSignUp;