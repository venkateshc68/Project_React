
import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../images/logo.png'


const Styles=styled.div`
.navbar{
    background-color:#45CE30;
    

}
.navbar-brand,.navbar-nav .nav-link{
    color:white;
    &:hover{
        color:#4834DF;
    }
}
`;

export default function Navibar() {
    return (
        <Styles>
        <Navbar expand="lg">
            
            <Navbar.Brand ><img src={logo}  alt=".." style={{height:"70px",width:"90px",marginLeft:"0px"}}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">HOME</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Aboutus">ABOUT US</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Services">SERVICES</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Gallery">GALLERY</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Contactus">CONTACT US</Nav.Link></Nav.Item>
                    
                    
                   



                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
        
    )
}


