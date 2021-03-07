import React from 'react';
import {withRouter} from "react-router-dom"
import { MDBCardText, MDBContainer, Jumbotron } from "mdbreact";
import './menu-item.styles.scss';
// import LaunchesDirectory from './../directory/LaunchesDirectory.comp'

let url = "https://google.com" ;

const MenuItem = ({prop, size,url, history, linkUrl, match })=>(

<>

  <div className={`menu-item`} onClick={() => history.push(`${url}${url}`)}>
  
    <div className='content'>
      {/* <h1 className='title'> {props.launches.company}</h1> */}
      <span className='subtitle'> lost in space... </span>
    </div>



   
  </div>



<MDBContainer>
<Jumbotron fluid>
          <MDBCardText>
           {/* SpaceX Launch History */}
           <h1> SpaceX Launch History</h1>
            
        </MDBCardText>
        <MDBCardText>
         
             <p> 2006 - 2019 </p>
        </MDBCardText>

      <div className="flex-row">
        <a href="/rockets" style={{color:"black"}}> Rockets</a>
        <a href="#!" style={{marginLeft: "1.25rem",color:"black"}}> Past Launches</a>
        <a href="#!" style={{ marginLeft: "1.25rem", color:"magenta" }}>Upcoming Launches</a>
        <a href="#!" style={{ marginLeft: "1.25rem", color:"black" }}>Historical Events</a>
    </div>
   </Jumbotron>
  </MDBContainer>
  </>

);


export default withRouter (MenuItem);