import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import LoginView from './LoginView';

class LoginScreen extends React.Component<> {
  render() {
    return <LoginView />;
  }
}

export default LoginScreen;
