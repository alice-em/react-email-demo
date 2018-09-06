import {ListItem, ListItemText} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const CcItem = ({text}) => (
  <ListItem
    dense
    disableGutters
  >
    <ListItemText primary={text} />
  </ListItem>
);

CcItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CcItem;