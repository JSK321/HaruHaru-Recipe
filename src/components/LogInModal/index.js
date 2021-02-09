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
            <Link
                onClick={handleShow}
                className="accoutNameLink"
            >
                <strong>{props.name}</strong>
            </Link>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modalHeader" closeButton>
                    <Image
                        src={props.profileImage === "" || props.profileImage === null ? null : props.profileImage}
                        className="modalProfilImage"
                        roundedCircle
                    />
                    <Modal.Title className="modalTitle">
                        <strong>{props.name}</strong>
                        <br></br>
                        {props.email}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                    <Link
                        to={`/profile/${props.accountName}`}
                        onClick={handleClose}
                        className="viewProfileLinkBtn"
                    >
                        <strong>View Profile</strong>
                    </Link>
                </Modal.Body>
                <Modal.Footer className="modalFooter">
                    <Button className="signOutBtn" onClick={props.logOut}>
                        <strong>Sign Out</strong>
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
