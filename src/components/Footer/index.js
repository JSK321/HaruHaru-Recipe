import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from "react-scroll"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

export default function Footer() {

    return (
        <Navbar fixed="bottom" className="footer">
            <Link activeClass="active" className="backToTop" to="top" spy={true} smooth={true} duration={500} >
                <FontAwesomeIcon
                    icon={faAngleDoubleUp}
                    className="fa-fw"
                />
            </Link>
        </Navbar>
    )
}
