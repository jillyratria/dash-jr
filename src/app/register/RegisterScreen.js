import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import RegisterView from './RegisterView';

class RegisterScreen extends React.Component<> {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    console.log(data);
    axios
      .post(`https://reqres.in/api/register`, data)
      .then(res => {
        console.log(res);
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
