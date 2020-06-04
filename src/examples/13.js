import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Col, Container, FormControl, ListGroup, Row } from 'react-bootstrap';
import FruitItem from './FruitItem';
import './App.css';
import { getTodos } from './todo-service';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
      ],
    }
  }

  componentDidMount() {
    getTodos().then(result => console.log(result));
  }

  render() {
    return (
      <Container>
        <ListGroup>
          {/* {fruits
            .map(fruit => (
              <ListGroup.Item>{fruit.name}  {fruit.count}</ListGroup.Item>
            )
            )} */}
        </ListGroup>
      </Container>
    )
  }
}

export default App;
