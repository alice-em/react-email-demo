import { TableBody } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

import Item from './Item';
import CcItems from './CcItems';

const Body = ({
  cc,
  from,
  subject,
  to,
}) => (
  <TableBody>
    <Item title='to:' value={to} />
    <Item title='from:' value={from} />
    <CcItems cc={cc} />
    <Item title='subject' value={subject} />
  </TableBody>
);

Body.propTypes = {
  cc: PropTypes.array.isRequired,
  from: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Body;
