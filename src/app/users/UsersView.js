import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
  console.log(props);
  return (
    <Page title="Users">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={fixedHeightPaper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell align="right">First Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody />
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </Page>
  );
}
