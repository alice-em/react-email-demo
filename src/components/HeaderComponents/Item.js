import {TableCell, TableRow} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const Item = ({title, value}) => (
  <TableRow>
    <TableCell numeric>
      {title}
    </TableCell>
    <TableCell>
      {value}
    </TableCell>
  </TableRow>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Item;