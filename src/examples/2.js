function App() {
    var text = "hello world";
    var condition = true;
    return (
      <div className="App">
        {condition && (<h1>{text}</h1>)}
      </div>
    );
  }
  