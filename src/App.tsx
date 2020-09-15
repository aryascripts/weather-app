import React from "react";
import "./App.scss";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { Switch, Route, Router } from "react-router";
import { HomeComponent } from "./pages/home/home.component";
import { MainComponent } from "./pages/main/main.component";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <HomeComponent />
        </Route>

        <Route path="/weather">
          <MainComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
