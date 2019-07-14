import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Paper, Avatar, Button, Modal, Fab, Icon} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
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
  button: {
    width: '200px',
    marginBottom: '32px',
  },
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
  },
  margin: {
    margin: '0 6px',
  },
}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function Users(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const {users} = props;
  const [openCreateModal, setOpenCreateModal] = React.useState(false);
  const [name, setName] = React.useState('');

  const handleOpen = () => {
    setOpenCreateModal(true);
  };

  const handleClose = () => {
    setOpenCreateModal(false);
  };
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <Page title="Users">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={handleOpen}>
            Add User
          </Button>
          <Paper className={fixedHeightPaper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Avatar</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell align="right">Action</TableCell>
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
                    <TableCell>{user.first_name}</TableCell>
                    <TableCell>{user.last_name}</TableCell>
                    <TableCell align="right">
                      <Fab
                        size="small"
                        color="primary"
                        aria-label="Add"
                        className={classes.margin}>
                        <Icon>edit_icon</Icon>
                      </Fab>
                      <Fab
                        size="small"
                        color="secondary"
                        aria-label="Add"
                        className={classes.margin}>
                        <DeleteIcon />
                      </Fab>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={openCreateModal}
        onClose={handleClose}>
        <div style={modalStyle} className={classes.modal}>
          <h2 id="modal-title">Create User</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
    </Page>
  );
}
