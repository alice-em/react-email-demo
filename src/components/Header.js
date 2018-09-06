import Table from '@material-ui/core/Table';
import PropTypes from 'prop-types';
import React from 'react';

import Body from './HeaderComponents/Body';
import Head from './HeaderComponents/Head';

const Header = ({
  cc,
  from,
  onClick,
  subject,
  to,
}) => (
  <Table>
    <Head onClick={onClick} />
    <Body
      cc={cc}
      from={from}
      subject={subject}
      to={to}
    />
  </Table>
);

Header.propTypes = {
  cc: PropTypes.array,
  from: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  subject: PropTypes.string,
  to: PropTypes.string.isRequired,
};

Header.defaultProps = {
  cc: [],
  subject: '',
};

export default Header;
