import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import MainLayout from "./layout/Main-layout";
import UserDashboard from './layout/user-dashboard/user-dashboard';
import DashboardPage from "./pages/dashboard-pages/dashboard-page"
import HomePage from "./pages/Home-page";
import SignInPage from "./pages/sign-in-page"
import "./App.css";

import ListFlatPage from "./pages/list-flat-page";
import 'react-toastify/dist/ReactToastify.css'

class App extends React.Component {
 
  
  
  render() {  
    return (
      <div className="App ">
         <ToastContainer
              position="top-right"
              autoClose="3000"
              hideProgressBar
              closeOnClick
            />
        <Router >
          <Switch>
            
            <Route path="/" exact>
              <MainLayout  >
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
