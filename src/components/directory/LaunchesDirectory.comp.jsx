import React, {Component} from 'react';


import {SpaceXlist} from './../spacex-list/Spacex-list.comp';
import {SearchBox} from './../search-box/Searchbox.comp';

import { MDBCard, MDBCardText, MDBContainer, Jumbotron } from "mdbreact";

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


class LaunchesDirectory extends Component {

    constructor(props){
        super(props);
        this.state = {
          launches: [],
          searchField:''
        }
      }
      componentDidMount(){
        fetch('https://api.spacexdata.com/v3/launches')
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
    
      <MDBContainer>

      <MDBCard>
          <MDBCardText>
          
          <h1> SpaceX Launch Manifest</h1>
                          <p> 2006 - 2019 </p>
          </MDBCardText>
        <div className="flex-row">
          <a href="#!" style={{color:"magenta"}}> Rockets</a>
          <a href="#!" style={{ marginLeft: "1.25rem", color:"whitesmoke" }}>Upcoming Launches</a>
              </div>
        </MDBCard>
      </MDBContainer>
    
      <h2>Search Previous Missions</h2>
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