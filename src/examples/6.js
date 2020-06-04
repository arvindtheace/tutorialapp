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
      <div>
          <ol>
          {fruits
          .map(fruit => (
            <li>{fruit.name}  {fruit.count}</li>
          )
          )}
          </ol>
          <h2>Total Count: {totalCount} </h2>
      </div>
    )
  }