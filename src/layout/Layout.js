import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Recipe from '../recipe/Recipe';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          {/* <Paper className={classes.paper}>
            
          </Paper> */}
          <Recipe/>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Recipe/>
          {/* <Paper className={classes.paper}>
          <Recipe/>
          </Paper> */}
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Recipe/>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Recipe/>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Recipe/>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Recipe/>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Recipe/>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Recipe/>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Recipe/>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Recipe/>
        </Grid>

      </Grid>
    </div>
  );
}