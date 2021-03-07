import React from 'react';
// import ReactPlayer from "react-player";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";

// import './spacex-cards.styles.scss';

// curly braces then return in components otherwise error 
// without return normal braces after props 
// export const
export const RocketsCard = (props) => {
    return (
    <>
            <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>Flight Number: {props.rockets.cost_per_launch} </strong>
              {/* <strong>Mission Name: {props.launch.mission_name} </strong> */}
            </MDBCardTitle>
            <MDBCardTitle className="card-title h4 pb-2">
              {/* <strong>Flight Number: {props.launch.flight_number} </strong> */}
              
              <MDBCardText>Mission Name </MDBCardText>
              <strong>
                 {props.rockets.company} </strong>
            </MDBCardTitle>
            <MDBCardTitle className="indigo-text h5 m-4">
                MISSION PATCH
              </MDBCardTitle>

            
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
            
    </>
    )
}



