import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from "./layout/Main-layout";
import UserDashboard from './layout/user-dashboard/user-dashboard';
import DashboardPage from "./pages/dashboard-pages/dashboard-page"
import HomePage from "./pages/Home-page";
import SignInPage from "./pages/sign-in-page"
import "./App.css";
import ListFlatPage from "./pages/list-flat-page";

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
            <Route path="/listFlat" exact>
              <MainLayout>
                <ListFlatPage/>
              </MainLayout>
            </Route>
            <Route path="/dashboard" exact>
              <UserDashboard children={<DashboardPage/>}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
