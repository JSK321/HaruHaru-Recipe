import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./styles.css"

export default function LogInModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                {props.name}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Image
                        src="https://res.cloudinary.com/jsk321/image/upload/v1612472877/ummas_cb/fz7uquilwgm7lh045bph.jpg" 
                        className="modalProfilImage"
                        roundedCircle
                    />
                    <Modal.Title className="modalTitle">
                        {props.name}
                        <br></br>
                        {props.email}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ margin: "0 auto" }}>
                    <Link to={`/profile/${props.accountName}`} onClick={handleClose}>
                        View Profile
                    </Link>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" style={{ width: "70%", margin: "0 auto" }} onClick={props.logOut}>
                        Sign Out
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
