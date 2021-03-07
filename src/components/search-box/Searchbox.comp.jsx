import React from 'react';
// import { MDBInput, MDBCol } from "mdbreact";
import './searchbox.styles.scss';

export const SearchBox = ({placeholder, handleChange }) => (

    <>
    <h2>Search Previous Missions</h2>
    {/* <h2>yo</h2> */}
    <input 
    className='search'
    type="search" 
    placeholder={placeholder}
    onChange={handleChange}/>

     {/* <MDBCol md="6">
     <MDBInput 
     className="form-control" 
     type="text"
      placeholder={placeholder} 
      onChange={handleChange} 
     aria-label="Search" />
    </MDBCol>  */}

    </>


)