import {
  IconButton,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});

const Head = ({classes, onClick}) => (
  <TableHead style={{background: 'red'}}>
    <TableRow>
      <TableCell>
        <IconButton
          className={classes.button}
          aria-label="Delete"
          onClick={onClick}
        >
          <Close style={{color: 'white'}} />
        </IconButton>
      </TableCell>
      <TableCell numeric>
        <Typography
          style={{
            color: 'white',
            textShadow: '0 0 5px rgba(0,0,0,0.3)'
          }}
          variant="headline"
        >
          Message
        </Typography>
      </TableCell>
    </TableRow>
  </TableHead>
);

Head.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(Head);