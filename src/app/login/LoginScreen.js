import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import LoginView from './LoginView';
import axios from 'axios';
import Cookies from 'universal-cookie';

class LoginScreen extends React.Component<> {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    axios
      .post(`https://reqres.in/api/login`, data)
      .then(res => {
        const cookies = new Cookies();
        cookies.set('token', res.data.token);
        this.props.history.push('/dashboard');
      })
      .catch(err => {
        alert(err);
      });
  }

  render() {
    return <LoginView onSubmit={this.handleSubmit} />;
  }
}

export default withRouter(LoginScreen);
