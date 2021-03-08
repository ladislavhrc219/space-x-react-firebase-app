import React from 'react';
import LaunchesDirectory from './../components/directory/LaunchesDirectory.comp';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Homepage() {
    return (
        <div className='homepage'>
     <LaunchesDirectory/>
    
     <MDBFooter color="white" className="black-text font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        
      </MDBContainer>
      <div className="black-text footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://docs.spacexdata.com/#intro"> SpaceXdata.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>

    );
}

export default Homepage;