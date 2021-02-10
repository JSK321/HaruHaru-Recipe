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
                <Card.Title style={{ textAlign: "center", color:"lightgoldenrodyellow" }}><strong>Update Profile</strong></Card.Title>
                <Card.Text>
                    <Form onSubmit={props.handleFormSubmit}>
                        <Form.Group>
                            {props.loading ? (
                                <h3 style={{ textAlign: "center", color:"lightgoldenrodyellow" }}><strong>Loading Image...</strong></h3>
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
                                placeholder="Email"
                                value={props.email}
                                onChange={props.handleInputChange}
                                name="email"
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
                                placeholder="Current Password (Required)"
                                onChange={props.handleInputChange}
                                name="password"
                                className="signUpFormControl"
                                required
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
                            className="updateProfileBtn"
                        >
                            Update Image
                         </Button>
                        <Form.File
                            id="uploadImg"
                            onChange={props.handleUploadImg}
                            style={{ display: "none" }}
                            name="recipeImage"
                        />

                        <Button
                            variant="primary"
                            type="submit"
                            className="updateProfileBtn"
                        >
                            Update
                        </Button>
                        <Button
                            variant="primary"
                            type="submit"
                            className="updateProfileBtn"
                            onClick={props.handleDeleteProfileBtn}
                        >
                            Delete Profile
                        </Button>

                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
