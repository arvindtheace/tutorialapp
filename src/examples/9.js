class App extends Component {
    constructor() {
      super();
      this.state = {
        fruits:  [
          { name: 'apples', count: 4},
          { name: 'bananas', count: 2},
          { name: 'oranges', count: 3},
          { name: 'peaches', count: 1},
          { name: 'orchids', count: 2},
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
        </Container>
      )
    }
  }