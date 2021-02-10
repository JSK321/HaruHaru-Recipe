import LogInModal from '../LogInModal'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
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
                <FontAwesomeIcon icon={faHome} className="fa-fw"/>
                <strong>Home</strong>
            </Navbar.Brand>
            {props.isLoggedIn ?
                <Navbar.Brand>
                    <LogInModal
                        name={props.name}
                        email={props.email}
                        accountName={props.accountName}
                        profileImage={props.profileImage}
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
                        <Nav.Link href="/signin"><strong>Sign in</strong></Nav.Link>
                    }
                    {props.isLoggedIn ?
                        <Nav.Link href="/recipeform"><strong>Add new Recipe</strong></Nav.Link>
                        :
                        <Nav.Link href="/signup"><strong>Register</strong></Nav.Link>
                    }
                    <NavDropdown title="View by Category" id="nav-dropdown">
                        {/* <NavDropdown.Item href={`/profile/${props.id}`}>Profile</NavDropdown.Item> */}
                        {/* <NavDropdown.Item onClick={handleCategorySelect} name="breakfast">Breakfast</NavDropdown.Item> */}
                        <NavDropdown.Item href="/category/breakfast"><strong>Breakfast</strong></NavDropdown.Item>
                        <NavDropdown.Item href="/category/lunch"><strong>Lunch</strong></NavDropdown.Item>
                        <NavDropdown.Item href="/category/dinner"><strong>Dinner</strong></NavDropdown.Item>
                        <NavDropdown.Item href="/category/soup or stew"><strong>Soup/Stew</strong></NavDropdown.Item>
                        {/* <NavDropdown.Item href="#action/3.3">Dessert</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Snack</NavDropdown.Item> */}
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/category/other"><strong>Other</strong></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}
