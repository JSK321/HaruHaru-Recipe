import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'

export default function NavBar(props) {
    return (
        <Navbar
            expand="lg-md-sm"
            style={{ backgroundColor: "silver" }}
        >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="/">조리법!</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {props.isLoggedIn ?
                        <Nav.Link onClick={props.handleLogOut}>로그 아웃</Nav.Link>
                        :
                        <Nav.Link href="/signin">로그인</Nav.Link>
                    }
                    <Nav.Link href="/recipeform">Add new recipe</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
