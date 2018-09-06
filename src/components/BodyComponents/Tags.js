import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import Tag from './Tag';

const renderTags = text => (
  <Tag text={text} />
);

const Tags = ({classes, tags}) => (
  <div className={classes.root}>
    {tags.map(renderTags)}
  </div>
);

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

Tags.propTypes = {
  classes: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired,
};

export default withStyles(styles)(Tags);


