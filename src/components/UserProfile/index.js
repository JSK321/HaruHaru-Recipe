import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Tabs } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import './styles.css'

export default function UserProfile() {
    const [key, setKey] = useState('recipe');

    return (
        <Container>
            <Row className="justify-content-md-center no-gutters">
                <Col md={3}>
                    <Card className="ProfileCard">
                        <Card.Img
                            className="ProfileImage"
                            variant="top"
                            src="https://res.cloudinary.com/jsk321/image/upload/v1611706500/ummas_cb/2014cody_ku5msz.jpg" />
                        <Card.Body>
                            <Card.Text>
                                Name:
                            </Card.Text>
                            <Card.Text>
                                Email:
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={9}>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                    >
                        <Tab eventKey="recipe" title="Recipes">
                            <Card>
                                <Card.Body>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            type="search"
                                            placeholder="Search"
                                        />
                                    </InputGroup>
                                    <ListGroup variant="flush">
                                        <Row lg={3} md={2} sm={2} xs={1} className="no-gutters">
                                            <ListGroup.Item className="RecipeListGroup">Cras justo odio</ListGroup.Item>
                                            <ListGroup.Item className="RecipeListGroup">Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item className="RecipeListGroup">Vestibulum at eros</ListGroup.Item>
                                            <ListGroup.Item className="RecipeListGroup">Vestibulum at eros</ListGroup.Item>
                                        </Row>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Tab>
                        <Tab eventKey="savedRecipes" title="Saved Recipes">
                            <Card>
                                <Card.Body>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            type="search"
                                            placeholder="Search"
                                        />
                                    </InputGroup>
                                    <ListGroup variant="flush">
                                        <Row lg={3} md={2} sm={2} xs={1} className="no-gutters">
                                            <ListGroup.Item className="RecipeListGroup">Cras justo odio</ListGroup.Item>
                                            <ListGroup.Item className="RecipeListGroup">Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item className="RecipeListGroup">Vestibulum at eros</ListGroup.Item>
                                            <ListGroup.Item className="RecipeListGroup">Vestibulum at eros</ListGroup.Item>
                                            <ListGroup.Item className="RecipeListGroup">Vestibulum at eros</ListGroup.Item>
                                        </Row>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container >
    )
}