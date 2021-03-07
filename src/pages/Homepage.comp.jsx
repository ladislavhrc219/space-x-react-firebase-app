import React from 'react';
import LaunchesDirectory from './../components/directory/LaunchesDirectory.comp';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Homepage() {
    return (
        <div className='homepage'>
     <LaunchesDirectory/>
    
     <MDBFooter color="white" className="black-text font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            {/* <h5 className=" title">Links</h5> */}
            <ul>
              <li className=" list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
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