import React from 'react';
import { makeStyles } from '@material-ui/styles';

const Footer = () => {
  const useStyles = makeStyles({
    link: {
      textDecoration: 'none',
      fontFamily: 'Roboto',
      color: '#0984e3',
      transition: 'all 0.3s',
      '&:link, &:visited': {
        color: '#0984e3',
      },
      '&:hover, &:active': {
        color: '#6c5ce7',
      },
    },
  });
  const classes = useStyles();
  return (
    <div>
      Material UI Button Showcase by{' '}
      <a
        className={classes.link}
        href="https://twitter.com/AtchyutPreetham"
        target="_blank"
        rel="noreferrer"
      >
        Atchyut Preetham Pulavarthi
      </a>
    </div>
  );
};

export default Footer;
