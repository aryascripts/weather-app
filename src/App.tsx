import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Router, Route, Switch} from 'react-router';
import { HomeComponent } from './pages/home/home';
import {WeatherComponent} from './pages/weather/weather';
import {history} from './services/history';

function App() {
  return (
    <Router history={history}>

      <Switch>
        <Route exact path="/" component={HomeComponent} />

        <Route exact path="/weather" component={WeatherComponent} />

      </Switch>

    </Router>
  );
}

export default App;
