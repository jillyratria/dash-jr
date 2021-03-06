import React, {useState} from 'react';
import {Button, Grid, Paper, TextField, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #3f51b5 30%, #c2d880 90%)',
    border: 0,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: '100vh',
    overflow: 'hidden',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/user/erondu/1600x900)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '32px',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: '16px 0',
    height: '56px',
  },
});

export default function LoginView(props) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            LOGIN
          </Typography>
          <div className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={event => {
                setEmail(event.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={event => {
                setPassword(event.target.value);
              }}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {
                props.onSubmit({
                  email: email,
                  password: password,
                });
              }}>
              LOGIN
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/register" variant="">
                  Don't have an account? Register
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
