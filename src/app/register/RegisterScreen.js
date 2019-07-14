import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import RegisterView from './RegisterView';

class RegisterScreen extends React.Component<> {
  render() {
    return <RegisterView />;
  }
}

export default RegisterScreen;
