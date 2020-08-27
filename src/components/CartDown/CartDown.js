import React from 'react';
import './CardDown.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Row} from 'react-bootstrap';
const CartDown = () => {
    return (
        <div>
            
            <Row className="text-justify otherItem">
                <img  src = "https://www.getsmarter.com/assets/icons/certificate-d30d10b2de1295935cdd96d863702a99a1e4cf48e716e275d293fc6527bae2a9.png"/>
                <p className="p-3">Earn a certificate from a world-class university as powerful proof of your new competencies and use it to differentiate yourself and get recognised in the job market.</p>
                <img src="https://www.getsmarter.com/assets/icons/support-3b52b162cd4ac43fc7534b11c9fc2425ebc6e4a2f4785bdacc6b1bd3a785407e.png"/>
                <p className="p-3">Enjoy a personalised, people-mediated online learning experience that constantly achieves unprecedented course completion rates.</p>
                <img src="https://www.getsmarter.com/assets/icons/skills-18b358cb32a04e13ea3d9ef5d4b21432b4ac44ef8df59b562fd27c4937a94dba.png"/>
                <p className="p-3">Gain verifiable and relevant competencies through a career-focused curriculum that achieves specific learning outcomes and skill gains.</p>

                <Button className="ml-3" variant="primary">Learn More</Button>
            </Row>
        </div>
    );
};

export default CartDown;