import React, { useState, useEffect } from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import "./styles.css"

export default function NavBar(props) {
    // const [categoryState, setCategoryState] = useState({
    //     category: ""
    // })

    // const handleCategorySelect = event => {
    //     event.preventDefault();
    //     let category = event.target.name
    //     setCategoryState({
    //         category: category
    //     })
    //     if (categoryState.category != "") {
    //         changeCategoryPage()
    //     }
    // }

    // function changeCategoryPage() {
    //     if (categoryState.category !== "" && categoryState.category === "breakfast") {
    //         window.location.href = "/breakfast"
    //         // console.log('Here')
    //     }
    // }

    return (
        <Navbar
            className="NavBar"
            expand="lg-md-sm"
        >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {props.isLoggedIn ?
                <Navbar.Brand
                    href={`/profile/${props.accountName}`}
                    className="ml-auto">
                    Profile!
                </Navbar.Brand>
                : null}
            <Navbar.Brand href="/">조리법!</Navbar.Brand>
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
                    {/* {props.isLoggedIn ?
                        <Nav.Link href={`/profile/${props.accountName}`}>Profile</Nav.Link>
                        :
                        null
                    } */}
                    <NavDropdown title="View by Category" id="nav-dropdown">
                        {/* <NavDropdown.Item href={`/profile/${props.id}`}>Profile</NavDropdown.Item> */}
                        {/* <NavDropdown.Item onClick={handleCategorySelect} name="breakfast">Breakfast</NavDropdown.Item> */}
                        <NavDropdown.Item href="/breakfast">Breakfast</NavDropdown.Item>
                        <NavDropdown.Item href="/lunch">Lunch</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Dinner</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Soup/Stew</NavDropdown.Item>
                        {/* <NavDropdown.Item href="#action/3.3">Dessert</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Snack</NavDropdown.Item> */}
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Other</NavDropdown.Item>
                    </NavDropdown>
                    {props.isLoggedIn ?
                        <Nav.Link onClick={props.handleLogOut}>로그 아웃</Nav.Link>
                        :
                        null
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
