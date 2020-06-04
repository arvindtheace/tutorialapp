import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Col, Container, FormControl, ListGroup, Row } from 'react-bootstrap';
import FruitItem from './FruitItem';
import './App.css';
import { getTodos } from './todo-service';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
