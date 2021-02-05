import React from 'react'
import { Card } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import './styles.css'

export default function EditProfileForm(props) {
    return (
        <Card className="EditProfileForm">
            <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Update Profile</Card.Title>
                <Card.Text>
                    <Form onSubmit={props.handleFormSubmit}>
                        <Form.Group>
                            {props.loading ? (
                                <h3 style={{ textAlign: "center" }}><strong>Loading Image...</strong></h3>
                            ) : (
                                    <Image
                                        src={
                                            props.profileImage ?
                                                (props.profileImage)
                                                : null
                                        }
                                        className="recipeImageUpdate"
                                    />
                                )}
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                value={props.name}
                                onChange={props.handleInputChange}
                                name="name"
                                className="signUpFormControl"
                                // required
                            />
                            <Form.Control
                                type="text"
                                placeholder="Accout Name"
                                onChange={props.handleInputChange}
                                value={props.accountName}
                                name="accountName"
                                className="signUpFormControl"
                                // required
                            />
                            <Form.Control
                                type="password"
                                placeholder="Current Password"
                                onChange={props.handleInputChange}
                                name="password"
                                className="signUpFormControl"
                                // required
                            />
                            <Form.Control
                                type="password"
                                placeholder="New Password"
                                onChange={props.handleInputChange}
                                name="newPassword"
                                className="signUpFormControl"
                                // required
                            />
                            <Form.Control
                                type="password"
                                placeholder="Confirm new Password"
                                onChange={props.handleInputChange}
                                name="confirmNewPassword"
                                className="signUpFormControl"
                                // required
                            />
                        </Form.Group>
                        <Button
                            type="button"
                            onClick={props.handleUploadImgBtn}
                            style={{ width: "100%", marginBottom: "10px" }}
                        >
                            Upload Image
                         </Button>
                        <Form.File
                            id="uploadImg"
                            onChange={props.handleUploadImg}
                            style={{ display: "none" }}
                            name="recipeImage"
                        />

                        <Button variant="primary" type="submit" className="signUpBtn">
                            Update
                        </Button>

                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
