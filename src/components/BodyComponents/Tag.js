import PropTypes from 'prop-types';
import {Chip} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

const Tag = ({classes, text}) => (
  <Chip label={text} className={classes.chip} />
);

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit,
  },
});

Tag.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
};

export default withStyles(styles)(Tag);