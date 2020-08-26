import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from './components/Header/Header';
import Course from './components/Course/Course';


function App() {
  return (
    <div className="body-content">
      <Header></Header>
      <Course></Course>
    </div>
  );
}

export default App;
