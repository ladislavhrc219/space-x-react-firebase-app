import React from 'react';
import {SpaceXcards} from '../spacex-cards/Spacex-cards.comp';
import { MDBJumbotron, MDBContainer, MDBCol } from "mdbreact";

import './spacex-list.styles.scss';

// import {Navbar} from '../navbar/navbar';
// import {SearchBox} from './../searchbox/searchbox.jsx';
// import {SearchBox} from './components/searchbox/searchbox.jsx';


// handleChange = (e) => {
//     this.setState({searchField: e.target.value})
// }

// handleChange =(e) => {
//     this.setState({searchField: e.target.value})
//   }

export const SpaceXlist =(props, id)=> {
    return (
                <>
        
     <MDBJumbotron fluid>
     <MDBCol style={{ maxWidth: "55rem" }}>
      <MDBContainer>
             <div className="card-list">
                                {props.launches.map(launch => (
                                    <SpaceXcards key={id}  launch={launch} />
                                )
                                    )}
                            </div>
      </MDBContainer>
      </MDBCol>
    </MDBJumbotron>
               
               
                {/* <h2 className="spacex-footer"> SpaceX 2021</h2>  */}
                
                {/* <Navbar/> */}
                </>
    )
   
}