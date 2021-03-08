import React from 'react';

import FormInput from './../form-input/Form-input.comp';
import CustomButton from './../custom-button/Custom-button.comp';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch(err){
      console.log(err);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

// import React from 'react';
// import FormInput from './../form-input/Form-input.comp';
// import CustomButton from '../custom-button/Custom-button.comp';

// import {signInWithGoogle} from './../../firebase/firebase.utils';

// // import './sign-in.styles.scss';



// class SignIn extends React.Component{
//   constructor(props){
//       super(props);

//       this.state = {
//           email: '',
//           password: ''

//       }

     
//   }

// //   handleSubmit= async event=>{
// //       event.preventDefault();

// //       const {email, password} = this.state;

// //       //try block goin to await 
// //       try{
// //           await auth.signInWithEmailAndPassword(email, password);
          
// //           this.setState({email:'', password:''})
// //       } catch(err){
// //           console.log(err);
// //       }
// //   }

// //   handleChange = event => {
// //       const {value, name} =event.target;

// //       this.setState({ [name]: value})

// //   }


//   render(){
//       return(

//           <div className="sign-in">
//                {/* <h2> Sign In</h2> */}
//           <h2> I already have and account </h2>
//           <span> Sign in with your Email and password </span>

//           <form onSubmit={this.handleSubmit}> 

//               <FormInput 
//               name="email" 
//               type="email"
//               value={this.state.email}
//               label="Email" 
//               handleChange={this.handleChange}
//               required /> 
//               <label> Email</label>


//               <FormInput 
//               name="password" 
//               type="password"
//               value={this.state.password} 
//               label="Password" 
//               handleChange={this.handleChange}
//               required />

//               <label> Password</label>

//               <div className="button">

//             <CustomButton type="submit"> Sign in </CustomButton> 
//               <CustomButton  
//               onClick={signInWithGoogle} > {' '}Sign in with Google {' '}
//               </CustomButton> 

            
//               </div>
              
//           </form>


//           </div>
//       )
//   }
// }

// export default SignIn;
