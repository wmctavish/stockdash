import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import MainDisplay from './components/MainDisplay';
import Trade from './components/Trade';
import Market from './components/Market';
import './App.css';

const Main = <MainDisplay />;
const Docs = <Trade />;
const Mark = <Market />;

class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
    pages: [
        {
            id: 1,
            name: 'Main',
        },
        {
            id: 2,
            name: 'Trade',
        },
        {
            id: 3,
            name: 'Market'
        }
    ],
            view: Main
  }  
  this.showView = this.showView.bind(this);
}
 
  
  showView = (page) => {
    console.log(page);
    if (page.id === 1) {
      this.setState({ view: Main })
    };

    if (page.id === 2) {
      this.setState({ view: Docs })
    };

    if (page.id === 3) {
      this.setState({ view: Mark })
    };
  }

  render() {
    return (
      <div className="App">
        <div style={sidebarStyle}>
          <Sidebar pages={this.state.pages} showView={this.showView} />
        </div>
        {this.state.view}
      </div>
    );
  }
}

const sidebarStyle = {
  backgroundImage: 'linear-gradient(#0f63ff, #2679ff)',
  textAlign: 'left',
  color: 'white',
  height: '700px',
  width: '200px',
  margin: '15px',
  borderRadius: '5px'
}

export default App;
