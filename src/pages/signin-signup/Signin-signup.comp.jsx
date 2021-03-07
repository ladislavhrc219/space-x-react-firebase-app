import React from 'react';

import SignIn from './../../components/sign-in/sign-in.comp';
import SignUp from './../../components/sign-up/sign-up.comp';

import './signin-signup.styles.scss';

const SignInSignUp = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />

    <SignUp/>

  </div>
);

export default SignInSignUp;