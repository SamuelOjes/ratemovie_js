import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import useStyles from './styles';

import { Actors, Movies, MovieInformation, Profiles, NavBar } from './index';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="movie/:id" element={<MovieInformation />} />
          <Route path="actors/:id" element={<Actors />} />
          <Route path="/" element={<Movies />} />
          <Route path="profiles/:id" element={<Profiles />} />
          <Route path="movies" element={<NavBar />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
