import React from 'react';

import HomePage from './homepage.component';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <HomePage />
        <h1 style={{textAlign:"center"}}>Harshit Bansal</h1>
      </div>
    );
  }
}

export default App;
