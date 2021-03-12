import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainLayout from "./layout/Main-layout";
import HomePage from "./pages/Home-page";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact>
              <MainLayout>
                <HomePage />
              </MainLayout>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
