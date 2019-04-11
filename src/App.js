import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        theme: 'Blue',
    };
  }

  toggleLight = (e) => {
    const currentState = this.state.theme;
    if (currentState == 'Blue'){
      this.setState({ theme: 'Light' });
    }else {
      this.setState({ theme: 'Blue' });
    }
  };




  render() {
    return (
      
      <div id="app" className={this.state.theme + " full"}>
      
        <button
        className="bigButton"
        onClick={
          this.toggleLight
        }
        >
        {this.state.theme} Mode

        </button>
        
        
      </div>
    );
  }
}

export default App;