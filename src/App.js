import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
// import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import LoginHome from './components/Login/LoginHome/LoginHome';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
// import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AddAdmin from './components/AddAdmin/AddAdmin';
import Contact from './components/Contact/Contact/Contact';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          {/* <Route path="/appointment">
            <Appointment></Appointment>
          </Route> */}
          {/* <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute> */}
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          {/* <PrivateRoute path="/allPatients">
            <AllPatients></AllPatients>
          </PrivateRoute> */}
          {/* <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute> */}
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <LoginHome></LoginHome>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;