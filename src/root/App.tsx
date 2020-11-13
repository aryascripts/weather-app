import React from 'react';
import './App.scss';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '../pages/Home/Home';
import Content from '../pages/Content/Content';
import { CityProvider } from '../stores/CityContext';
import { SearchProvider } from '../stores/SearchContext';

const history = createBrowserHistory({});

function App() {
  return (
    <div className="app">
      <CityProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/">
              <SearchProvider>
                <Home />
              </SearchProvider>
            </Route>

            <Route path="/weather">
              <Content />
            </Route>
          </Switch>
        </Router>
      </CityProvider>
    </div>
  );
}

export default App;
