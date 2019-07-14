import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Paper, Avatar} from '@material-ui/core';

import {Page} from '../../uikit';
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));
export default function Users(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const {users} = props;
  return (
    <Page title="Users">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={fixedHeightPaper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Avatar</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell align="right">First Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map(user => (
                  <TableRow key={user.id}>
                    <TableCell component="th" scope="row">
                      {user.id}
                    </TableCell>
                    <TableCell>
                      <Avatar alt={user.first_name} src={user.avatar} />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {user.email}
                    </TableCell>
                    <TableCell align="right">{user.first_name}</TableCell>
                    <TableCell align="right">{user.last_name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </Page>
  );
}
