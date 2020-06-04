function getBody(condition, text) {
    if(condition) {
      return (<h1>{text}</h1>)
    }
    else{
      return (<div></div>)
    }
  }
  
  function App() {
    var text = "hello world";
    var condition = false;
    return (
      <div className="App">
        {getBody(condition, text)}
      </div>
    );
  }