import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    isLoaded: false,
    items: []
  };

  async componentDidMount() {
    fetch("http://localhost:8080/api/appointment/all")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  render() {
    const { items, isLoaded } = this.state;

    if (!isLoaded) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>JUG List</h2>
            {items.map(item => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
