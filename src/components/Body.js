import PropTypes from 'prop-types';
import React from 'react';

import Text from './BodyComponents/Text';
import Tags from './BodyComponents/Tags';

const Body = ({
  body,
  tags,
}) => (
  <div style={{maxWidth: 600}}>
    <Text text={body} />
    <Tags tags={tags} />
  </div>
);

Body.propTypes = {
  body: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

export default Body;