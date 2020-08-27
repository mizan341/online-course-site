import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from './components/Header/Header';
import Course from './components/Course/Course';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className = "mainBody">
      <Header></Header>
      <Course></Course>
      <Footer></Footer>
    </div>
  );
}

export default App;
