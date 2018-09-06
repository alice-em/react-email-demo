import { List, TableCell, TableRow } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

import CcItem from './CcItem';

const renderCcItem = (text, key) => (
  <CcItem text={text} key={key} />
);

const CcItems = ({cc}) => {
  const CcList = cc.map((text, key) => renderCcItem(text, key));

  return (
    <TableRow>
      <TableCell
        numeric
        style={styles}
      >
        cc:
      </TableCell>
      <TableCell>
        <List dense>
          {CcList}
        </List>
      </TableCell>
    </TableRow>
  );
};

CcItems.propTypes = {
  cc: PropTypes.array.isRequired,
};

const styles = {
  paddingTop: 0
};

export default CcItems;
