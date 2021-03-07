import React from 'react';
import {RocketsCard} from './Rockets-card.comp';
import { MDBJumbotron, MDBContainer, MDBCol } from "mdbreact";

// import './spacex-list.styles.scss';

export const RocketsList =(props, id)=> {
    return (
                          
        <div>

                {props.rockets.map(rockets => (
                                    <RocketsCard key={id}  rockets={rockets} />
                                )
                                    )}
                          

    </div>
     
                               
                
    )
   
}