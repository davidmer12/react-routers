import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home';
import History from './components/History';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink exact to="/"> Accueil</NavLink>
          <span> - </span>
          <NavLink to="/notre-histoire" activeClassName="selected"> Notre histoire </NavLink>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notre-histoire" component={History} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
