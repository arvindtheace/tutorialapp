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
    getTodos().then(result => {
      this.setState({todos: result.data})
    });
  }

  render() {
    const { todos} = this.state;
    return (
      <Container>
        <ListGroup>
          {todos
            .map(todo => (
              <ListGroup.Item>{todo.title}  {todo.completed ? '✅': '❌'}</ListGroup.Item>
            )
            )}
        </ListGroup>
      </Container>
    )
  }
}

export default App;
