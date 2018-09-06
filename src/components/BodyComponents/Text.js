import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const Text = ({text}) => (
  <Typography
    gutterBottom
    style={style}
    variant="body2"
  >
    {text}
  </Typography>
);

Text.propTypes = {
  text: PropTypes.string.isRequired,
};

const style = {
  minHeight: 250,
  padding: 10,
};

export default Text;