import React from 'react';
// import ReactPlayer from "react-player";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";

// import './spacex-cards.styles.scss';

// curly braces then return in components otherwise error 
// without return normal braces after props 
export const SpaceXcards = (props) => {
    return (
    <>
            <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title pb-2">
              <strong>Flight Number: {props.launch.flight_number} </strong>
              {/* <strong>Mission Name: {props.launch.mission_name} </strong> */}
            </MDBCardTitle>
            <MDBCardTitle className="card-title  pb-2">
              {/* <strong>Flight Number: {props.launch.flight_number} </strong> */}
              
              <MDBCardText>Mission Name </MDBCardText>
              <strong>
                 {props.launch.mission_name} </strong>
            </MDBCardTitle>
            <MDBCardTitle className="indigo-text h5 m-4">
                MISSION PATCH
              </MDBCardTitle>

            <MDBContainer   className="flex-center">
            {/* <MDBCardImage */}

                <MDBCardImage
               
                cascade
                overlay="white-light"
                hover
                mx-auto
                src={props.launch.links.mission_patch_small} 
                                        className="img-fluid" 
                                        
                />
            
            </MDBContainer>


            <MDBCardBody>
              <MDBCardTitle className="indigo-text m-4">
               <h2>Rocket details </h2> 
              </MDBCardTitle>


              <MDBCardText>

                <MDBCardText>
                Rocket ID: {props.launch.rocket.rocket_id}
              </MDBCardText>
              

              <MDBCardText>
               Name: {props.launch.rocket.rocket_name}
              </MDBCardText>
              <MDBCardText>
                Type: {props.launch.rocket.rocket_type}

               </MDBCardText>
            

           
           

              <MDBCardText> 
                Launch site: 
              <span>  {props.launch.launch_site.site_name_long}</span>
              </MDBCardText>

             
              </MDBCardText>

              <MDBJumbotron> 
         
            <MDBCardText> Failure details </MDBCardText>
            <MDBCardText>  {props.launch.details}</MDBCardText>
            
           
             </MDBJumbotron>

     
      <MDBCardText>
      <h5> Read the article on  </h5>
                <a href={props.launch.links.article_link}> Space.com </a>   
                {/* /or/  */}
      </MDBCardText>
                

                <MDBCardText>
                <h5> Watch it on </h5>
                <a href={props.launch.links.video_link}>  Youtube </a>
              </MDBCardText>

   

           
          
         
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
            
    </>
    )
}



