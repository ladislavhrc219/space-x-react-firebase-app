import React from 'react';
// import { Jumbotron, Button } from 'react-bootstrap';
import {SpaceXcards} from '../spacex-cards/Spacex-cards.comp';

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

export const SpaceXlist =(props)=> {
    return (
                <>


                <div className="space-img">
                   
                    
                </div>
                {/* <SearchBox
                className='search'
                placeholder=' mission names'
                handleChange={this.handleChange}
                /> */}
                <div className="card-list">
                        {props.launches.map(launch => (
                            
                            <SpaceXcards launch={launch} />
                        )
                            )}
                    </div>
               
               
                {/* <h2 className="spacex-footer"> SpaceX 2021</h2>  */}
                
                {/* <Navbar/> */}
                </>
    )
   
}