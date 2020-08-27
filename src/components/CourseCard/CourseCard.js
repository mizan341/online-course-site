import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import './CourseCard.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, CardDeck, Card, Col, Row } from 'react-bootstrap';

const CourseCard = (props) => {
    const element = <FontAwesomeIcon icon={faStar} />;
    const {title, price, teacher, url, duration}= props.course;
    return (
        <div className="totalCard">
            
                <Card className="cardSizing">
                    <Row>
                        <Col xs = {12} md = {12} lg={5} xl = {5} className = "align-self-center">
                            <Card.Img className="cardImg" variant="top" src={url}/>
                        </Col>
                         <Col xs = {12} md = {12} lg={7} xl = {7}>
                            <Card.Body>
                                <Card.Title className="text-capitalize pb-0 CardTitle">{title}</Card.Title>
                                <Card.Text>
                                    <p>By {teacher}</p>
                                    <p>Course Duration: {duration}</p>
                                    <p className="text-primary p-0 m-0">{element}{element}{element}{element}{element}</p>
                                    <h2 className="p-0 m-0">${price}</h2>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className = "cardFooter">
                                <Button onClick ={()=>props.addHandler(props.course)} variant="primary">Enroll Now</Button>
                            </Card.Footer>
                        </Col>
                    </Row>
                </Card>
            
        </div>
    );
};

export default CourseCard;