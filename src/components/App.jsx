import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Buttons from './Buttons';
import Footer from './Footer';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 1024,
    margin: '0  auto',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        <Buttons />
      </div>
      <Footer/>
    </Container>
  );
};

export default App;
