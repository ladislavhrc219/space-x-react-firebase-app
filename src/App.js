import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage.comp';
// 3.step todo: import in swithcn and route and wrap the route into switch 
import SignInSignUp from './pages/signin-signup/Signin-signup.comp'
import Header from './components/header/Header.comp';

// import SignIn from './components/sign-in/sign-in.comp';

// import LaunchesDirectory from './components/directory/LaunchesDirectory.comp'
// import RocketsDirectory from './components/directory/RocketsDirectory.comp';
import LandingPage from './pages/landing-page/Landing-page.comp'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    // this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
    //   this.setState({currentUser: user});
    // })
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          },           
          // ()=> {console.log(this.state);}
          );

        });
      }

      this.setState({ currentUser: userAuth });
    });
  }


  componentWillUnmount () {
    this.unsubscribeFromAuth()
  };

  render(){
    return (
      <div>
        
  
          {/* <Header/> */}
          {/* <Homepage/> */}
  
          <Header currentUser={this.state.currentUser}/>
          <Switch> 
  
         <Route exact path='/' component={LandingPage}/> 
         <Route path='/signin' component={SignInSignUp}/>
         <Route path='/homepage' component={Homepage}/>
        
         </Switch>
       
        
      </div>
    );

  }
  
}

export default App;
