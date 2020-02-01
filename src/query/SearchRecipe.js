import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 425,
    margin: '25px auto 45px auto',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  searchButton: {
    padding: '12px 15px',
    margin: '-7px -5px -7px 5px',
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search recipe"
        inputProps={{ 'aria-label': 'search recipe' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <Button color="primary" variant="contained" className={classes.searchButton} aria-label="search recipe">
        Search
      </Button>
    </Paper>
  );
}