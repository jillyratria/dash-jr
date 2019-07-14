import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {Redirect} from 'react-router';

import RegisterView from './RegisterView';

class RegisterScreen extends React.Component<> {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    axios
      .post(`https://reqres.in/api/register`, data)
      .then(res => {
        this.props.history.push('/dashboard');
      })
      .catch(err => {
        alert(err);
      });
  }
  render() {
    return <RegisterView onSubmit={this.handleSubmit} />;
  }
}

export default RegisterScreen;
