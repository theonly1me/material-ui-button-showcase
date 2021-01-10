import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Buttons = () => {
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    btmSpacing: {
      marginBottom: 60,
    },
    colorDanger: {
      backgroundColor: '#d63031',
      color: '#FFF',
      '&:hover, &:active': {
        backgroundColor: '#b02324',
        color: '#FFF',
      },
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.btmSpacing}>
        Buttons
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.btmSpacing}>
          <Button variant="contained">Default Button</Button>
        </Grid>
        <Grid item xs={12} className={classes.btmSpacing}>
          <Button variant="outlined" color="primary">
            Outlined Button
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.btmSpacing}>
          <Button variant="text" display="block">
            Text Button
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.btmSpacing}>
          <Button
            variant="contained"
            disableElevation
            display="block"
            color="primary"
          >
            I'm Shadowless
          </Button>
        </Grid>
        <Grid item xs={6} className={classes.btmSpacing}>
          <Button variant="contained" disabled display="block" color="primary">
            Disabled Button
          </Button>
        </Grid>
        <Grid item xs={6} className={classes.btmSpacing}>
          <Button variant="text" disabled display="block" color="primary">
            Disabled Text Button
          </Button>
        </Grid>
        <Grid item xs={6} className={classes.btmSpacing}>
          <Button
            variant="contained"
            startIcon={<AddShoppingCartIcon />}
            color="primary"
          >
            Add to cart
          </Button>
        </Grid>
        <Grid item xs={6} className={classes.btmSpacing}>
          <Button
            variant="contained"
            endIcon={<AddShoppingCartIcon />}
            color="primary"
          >
            Add to cart
          </Button>
        </Grid>
        <Grid item xs={4} className={classes.btmSpacing}>
          <Button variant="contained" size="small" color="primary">
            Small
          </Button>
        </Grid>
        <Grid item xs={4} className={classes.btmSpacing}>
          <Button variant="contained" size="medium" color="primary">
            Medium
          </Button>
        </Grid>
        <Grid item xs={4} className={classes.btmSpacing}>
          <Button variant="contained" size="large" color="primary">
            Large
          </Button>
        </Grid>
        <Grid item xs={3} className={classes.btmSpacing}>
          <Button variant="contained" color="default">
            Default
          </Button>
        </Grid>
        <Grid item xs={3} className={classes.btmSpacing}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </Grid>
        <Grid item xs={3} className={classes.btmSpacing}>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
        </Grid>
        <Grid item xs={3} className={classes.btmSpacing}>
          <Button variant="contained" className={classes.colorDanger}>
            Danger
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Buttons;
