import React from 'react';
import logo from './logo.svg';
import { Container, ListGroup } from 'react-bootstrap';
import './App.css';

function App() {
  var fruits = [
    { name: 'apples', count: 4},
    { name: 'bananas', count: 2},
    { name: 'oranges', count: 3},
    { name: 'peaches', count: 1},
    { name: 'orchids', count: 2},
  ]
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
    </Container>
  )
}

export default App;
