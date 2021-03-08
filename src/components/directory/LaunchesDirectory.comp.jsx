import React, {Component} from 'react';

import {SpaceXlist} from './../spacex-list/Spacex-list.comp';

import {SearchBox} from './../search-box/Searchbox.comp';

import { Jumbotron } from "mdbreact";

import MenuItem from './../menu-item/Menu-item.comp';

import './launchesdirectory.styles.scss';
// import {Switch, Route} from 'react-router-dom';

// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Jumbotron, Container } from 'react-bootstrap';
// !!! import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText, MDBBtn } from "mdbreact";
// import { MDBIcon, MDBCol } from "mdbreact";

// !!! import FormInput from './components/form-input/form-input.jsx';
//!!!  import {SignInAndSignOut} from './components/sign-in-sign-up.component.jsx';

// import Homepage from './homepage/Homepage';
let rockets = "https://api.spacexdata.com/v3/launches/rockets"

class LaunchesDirectory extends Component {

    constructor(props){
        super(props);
        this.state = {
          launches: [],
          searchField:'', 
          rockets: []
        }
      }
      componentDidMount(){
        fetch('https://api.spacexdata.com/v3/launches')
        // fetch('https://api.spacexdata.com/v3/rockets')
        .then(response=>response.json())
        .then(data=> this.setState({launches:data}));
     
      }
     
      
    
      
      handleChange =(e) => {
        this.setState({searchField:e.target.value})
      }
    
      render() {
        console.log(this.state);
        
        const {launches, searchField} = this.state;
        
        // launches
        const filteredLaunches = launches.filter(launch => 
          launch.mission_name.toLowerCase().includes(searchField.toLowerCase())
        )
        // toLoWerCase avoid casesensitivity 
    
      return (
        <>       
        <div className="App"> 
    
       
    <Jumbotron fluid>
    
    <MenuItem/>
        <SearchBox className='search' placeholder=' Search mission names' handleChange={this.handleChange}  />
    </Jumbotron>
   
        <div className="spacex-dates"> 
      
        </div>
          <SpaceXlist launches={filteredLaunches}/>
        </div>
        </>
      )
      }
    }
    


export default LaunchesDirectory;