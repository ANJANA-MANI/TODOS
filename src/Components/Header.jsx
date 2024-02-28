import React from 'react'
import logo from '../assets/to-do-list.png'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <>
     <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src={logo}
              height='50'
              alt=''
              loading='lazy'
            />
           TO DO
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar></>
  )
}

export default Header