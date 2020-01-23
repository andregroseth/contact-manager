import React, { Component } from 'react';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The App Component</h1>
        <Contact />
      </div>
    );
  }
}

export default App;
