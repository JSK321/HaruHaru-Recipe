// import React, { useState, useEffect } from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import LogInModal from '../LogInModal'
import "./styles.css"

export default function NavBar(props) {
    
    return (
        <Navbar
            className="NavBar"
            expand="lg-md-sm"
        >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Brand
                href="/"
                className="ml-auto"
            >
                조리법!
            </Navbar.Brand>
            {props.isLoggedIn ?
                <Navbar.Brand>
                    <LogInModal
                        name={props.name}
                        email={props.email}
                        accountName={props.accountName}
                        logOut={props.handleLogOut}
                    />
                </Navbar.Brand>
                : null
            }

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {props.isLoggedIn ?
                        null
                        :
                        <Nav.Link href="/signin">로그인</Nav.Link>
                    }
                    {props.isLoggedIn ?
                        <Nav.Link href="/recipeform">Add new recipe</Nav.Link>
                        :
                        <Nav.Link href="/signup">Register</Nav.Link>
                    }
                    <NavDropdown title="View by Category" id="nav-dropdown">
                        {/* <NavDropdown.Item href={`/profile/${props.id}`}>Profile</NavDropdown.Item> */}
                        {/* <NavDropdown.Item onClick={handleCategorySelect} name="breakfast">Breakfast</NavDropdown.Item> */}
                        <NavDropdown.Item href="/breakfast">Breakfast</NavDropdown.Item>
                        <NavDropdown.Item href="/lunch">Lunch</NavDropdown.Item>
                        <NavDropdown.Item href="/dinner">Dinner</NavDropdown.Item>
                        <NavDropdown.Item href="/soupsandstews">Soup/Stew</NavDropdown.Item>
                        {/* <NavDropdown.Item href="#action/3.3">Dessert</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Snack</NavDropdown.Item> */}
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/other">Other</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}
