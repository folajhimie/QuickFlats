import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainLayout from "./layout/Main-layout";
import HomePage from "./pages/Home-page";
import SignInPage from "./pages/sign-in-page"
import "./App.css";

class App extends React.Component {

  
  render() {
  //   window.onscroll= function() {
  //     var y= window.pageYOffset;
  //     if(y>200){
  //         document.getElementById("c-nav").classList.add("nav-scroll")
  //         document.getElementById("logo").classList.remove("hide")
  //     }
  //     else{
  //         document.getElementById("logo").classList.add("hide")
  //         document.getElementById("c-nav").classList.remove("nav-scroll")
  //     }
  // }
  
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact>
              <MainLayout>
                <HomePage />
              </MainLayout>
            </Route>
            <Route path="/signIn" exact>
              <MainLayout>
                <SignInPage />
              </MainLayout>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
