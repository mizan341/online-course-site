import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import './Course.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, CardDeck } from 'react-bootstrap';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Cart from '../Cart/Cart'

const Course = () => {
    const first15 = fakeData.slice(0, 15);
    const [course, setCourse] = useState(first15);
    // console.log(course);
    const [cart, setCart] = useState([]);
    const addHandler = (course) => {

    const newCart = [...cart, course];
    setCart(newCart);
    }
    // console.log(cart);
    return (
    <div className="courseView">
        <Container>
            <Row>
                <Col xs={12} md={7} lg={8} xl={9}>
                    <CardDeck>
                        {
                            course.map(course=><CourseCard course={course} addHandler ={addHandler} key ={course.id}></CourseCard>)  
                        }
                    </CardDeck>
                </Col>
                <Col xs = {12} md = {5} lg={4} xl={3}>
                    <Cart cart = {cart}></Cart>
                </Col>
            </Row>
           
        </Container>
    </div>
    );
};

export default Course;