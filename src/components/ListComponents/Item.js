import {ListItem, ListItemText} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const MailItem = ({
  onClick,
  from,
  subject,
}) => (
  <ListItem
    button
    onClick={onClick}
  >
    <ListItemText
      primary={subject}
      secondary={from}
    />
  </ListItem>
);

MailItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  from: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired
};

export default MailItem;