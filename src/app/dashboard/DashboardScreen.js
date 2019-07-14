import React, {Component} from 'react';
import axios from 'axios';
import DashboardView from './DashboardView';

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  getUserList() {
    axios
      .get(`https://reqres.in/api/users`)
      .then(res => {
        console.log(res);
        let users = res.data.data;
        console.log(users);
        this.setState({users: users});
      })
      .catch(err => {
        alert(err);
      });
  }

  componentDidMount() {
    this.getUserList();
  }

  render() {
    return <DashboardView />;
  }
}
export default DashboardScreen;
