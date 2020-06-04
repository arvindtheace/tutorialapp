import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Col, Container, FormControl, ListGroup, Row } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fruits: [
        { name: 'apples', count: 4 },
        { name: 'bananas', count: 2 },
        { name: 'oranges', count: 3 },
        { name: 'peaches', count: 1 },
        { name: 'orchids', count: 2 },
      ]
    }
  }

  render() {
    const { fruits } = this.state;
    var totalCount = fruits.reduce((count, fruit) => {
      count += fruit.count;
      return count;
    }, 0)
    return (
      <Container>
        <ListGroup>
          {fruits
            .map(fruit => (
              <ListGroup.Item>{fruit.name}  {fruit.count}</ListGroup.Item>
            )
            )}
        </ListGroup>
        <h2>Total Count: {totalCount} </h2>
        <Row>
          <Col md={5}>
            <FormControl></FormControl>
          </Col>
          <Col md={2}>
            <Button>Add Fruit</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
