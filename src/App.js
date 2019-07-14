import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import Login from './app/login/LoginScreen';
import Register from './app/register/RegisterScreen';
import Dashboard from './app/dashboard/DashboardScreen';
import Users from './app/users/UsersScreen';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const token = cookies.get('token');
const isLoggedIn = token && token !== '' ? true : false;
console.log(isLoggedIn);

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      token && token !== '' ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/register/" component={Register} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/users" component={Users} />
    </Router>
  );
}

export default App;
