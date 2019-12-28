import React from 'react';
import './App.css';
import Sidebar from './display/Sidebar';
import Newsfeed from './display/Newsfeed';
import Trendbar from './display/Trendbar';
import {Route, Switch} from 'react-router-dom';
import SingleTweet from './display/SingleTweet';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles (theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing (2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App () {
  const classes = useStyles ();
  return (
    // <React.Fragment>
    //   <div className={classes.root}>
    //     <Grid container spacing={3}>
    //       <Grid item xs={6}>
    //         <Sidebar />
    //       </Grid>
    //     </Grid>

    //     <Grid item xs={6}>
    //       <Trendbar />
    //     </Grid>;

    //     <Switch>
    //       <Route exact path="/" />
    //       <Route path="/:id" component={SingleTweet} />
    //     </Switch>
    //   </div>
    // </React.Fragment>
    (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={5}>
            <Newsfeed />
          </Grid>
          <Grid item xs={4}>
            <Trendbar />
          </Grid>
        </Grid>
      </div>
    )
  );
}

export default App;
