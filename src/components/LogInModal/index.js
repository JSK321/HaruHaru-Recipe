import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
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
                    <Modal.Title>
                        {props.name}
                        <br></br>
                        {props.email}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{margin:"0 auto"}}>
                    <Link to={`/profile/${props.accountName}`} onClick={handleClose}>
                        View Profile
                    </Link>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" style={{ width: "80%", margin: "0 auto" }} onClick={props.logOut}>
                        Sign Out
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
