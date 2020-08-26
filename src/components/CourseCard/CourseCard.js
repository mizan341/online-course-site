import React from 'react';
import './CourseCard.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, CardDeck, Card, Col, Row } from 'react-bootstrap';

const CourseCard = (props) => {
    const {title, price, teacher, url}= props.course;
    return (
        <div className="totalCard">
            <CardDeck>
                <Card>
                    <Row>
                        <Col xs lg = "3" className = "align-self-center" >
                            <Card.Img variant="top" src={url}/>
                        </Col>
                         <Col md="9">
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    <p>By {teacher}</p>
                                    <h2>${price}</h2>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className = "cardFooter">
                                <Button onClick ={()=>props.addHandler(props.course)} variant="primary">Enroll Now</Button>
                            </Card.Footer>
                        </Col>
                    </Row>
                </Card>
            </CardDeck>
        </div>
    );
};

export default CourseCard;