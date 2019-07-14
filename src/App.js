import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './app/login/LoginScreen';
import Register from './app/register/RegisterScreen';
import Dashboard from './app/dashboard/DashboardScreen';
import Users from './app/users/UsersScreen';
import Cookies from 'universal-cookie';

function App() {
  const cookies = new Cookies();
  const token = cookies.get('token');
  const isLoggedIn = token ? true : false;
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/register/" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/users" component={Users} />
    </Router>
  );
}

export default App;
