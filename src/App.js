import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 'Blue'
    };
  }

  clicked(menu){
    this.setState({
      active : menu,
    });
  }

  render() {
    return (
      
      <div id="app" className={this.state.active + " background"}>
        <nav className="nav">{this.props.items.map ((menu, index) => {
        var style = 'menu';

        if(this.state.active === menu){
          style = `${style} is-active`;
        }
        return <button className={style}
        // bind untuk membuat 'menu' bisa diklik ke fungsi 'clicked'
        onClick={this.clicked.bind(this, menu)}
        key = {index}
        >
        Thema {menu}
        </button>;
      })  }
      </nav>       
        
      </div>
    );
  }
}

export default App;