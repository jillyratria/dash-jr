import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './app/login/LoginScreen';
import Register from './app/register/RegisterScreen';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/register/" component={Register} />
      <Route path="/users/" component={Users} />
    </Router>
  );
}

export default App;
