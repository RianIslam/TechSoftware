import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Shared/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import ShipMent from './components/ShipMent/ShipMent';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import FormService from './components/FormService/FormService';
import FormReView from './components/FormReView/FormReView';
import DashBoard from './components/DashBoard/DashBoard';
import OrderData from './components/Orders/OrderData';
import FooterInfo from './components/Shared/Footer/FooterInfo';
import ManageData from './components/ManageData/ManageData';
import DashBoardMain from './components/DashBoard/DashBoardMain';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    
    <Router>
      <NavBar/>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <PrivateRoute exact path="/service/:servicetitle">
            <ShipMent/>
          </PrivateRoute>
          <Route exact path="/login">
            <Login/>
          </Route>
          <PrivateRoute  exact path="/serviceform">
            <FormService/>
          </PrivateRoute>
          <PrivateRoute  exact path="/reviewform">
            <FormReView/>
          </PrivateRoute>
          <PrivateRoute  exact path="/orders">
            <OrderData/>
          </PrivateRoute>
          <PrivateRoute  exact path="/dashboard">
            <DashBoardMain/>
          </PrivateRoute>
          <PrivateRoute  exact path="/manage">
            <ManageData/>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
