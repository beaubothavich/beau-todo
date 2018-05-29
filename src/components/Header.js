import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    button: {
        margin: theme.spacing.unit,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  });

const Header = (props) => {
    const { classes } = props;
return (
    <AppBar position="static">
        <Toolbar>
        <Typography variant="title" color="inherit" className={classes.flex}>
        <h1>ToDo</h1>
          </Typography>
          <NavLink to="/"  exact ><Button variant="raised" color="secondary">Dashboard</Button></NavLink>
          <NavLink to="/add" exact ><Button variant="raised" color="secondary">Add</Button></NavLink>
        </Toolbar>
    </AppBar>
    );
}
    export default  withStyles(styles)(Header);