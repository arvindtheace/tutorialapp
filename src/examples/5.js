function App() {
    var fruits = [
      { name: 'apples', count: 4},
      { name: 'bananas', count: 2},
      { name: 'oranges', count: 3},
      { name: 'peaches', count: 1},
      { name: 'orchids', count: 2},
    ]
    
    return (
      <div>
          <ol>
          {fruits
          .filter(fruit => fruit.count > 1)
          .map(fruit => (
            <li>{fruit.name}  {fruit.count}</li>
          )
          )}
          </ol>
      </div>
    )
  }