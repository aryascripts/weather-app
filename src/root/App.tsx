import React from 'react';
import './App.scss';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '../pages/Home/Home';
import Content from '../pages/Content/Content';

const history = createBrowserHistory({});

function App() {
  return (
    <div className="app">
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/weather">
            <Content />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
