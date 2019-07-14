import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './app/login/LoginScreen';
import Register from './app/register/RegisterScreen';
import Dashboard from './app/dashboard/DashboardScreen';
import Users from './app/dashboard/UsersScreen';

function App() {
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
