import React, { Component } from "react";
import { Grommet } from 'grommet';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home.js';

const theme = {
  global: {
    font: {
      family: 'Roboto',
    },
  },
};

class App extends Component {
  render() {
    return (
      <Router>
        <Grommet theme={theme}>
          <div>
            <header></header>
            <div>
              <Route exact path="/" component={Home} />
            </div>
          </div>
        </Grommet>
      </Router>
    );
  }
}

export default App;