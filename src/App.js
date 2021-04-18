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
          <Route exact path="/service/:servicetitle">
            <ShipMent/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route  exact path="/serviceform">
            <FormService/>
          </Route>
          <Route  exact path="/reviewform">
            <FormReView/>
          </Route>
          <Route  exact path="/orders">
            <OrderData/>
          </Route>
          <Route  exact path="/dashboard">
            <DashBoard/>
          </Route>
          <Route  exact path="/manage">
            <ManageData/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
