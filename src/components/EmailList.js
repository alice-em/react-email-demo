import {List} from '@material-ui/core';
import autoBind from 'auto-bind';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Item from './ListComponents/Item';

class EmailList extends Component {
  constructor() {
    super();
    autoBind.react(this);
  }
  generateItem(item) {
    return item
      ?(
        <Item
          from={item.from}
          key={item.id}
          onClick={() => {this.onItemClick(item.id);}}
          subject={item.subject}
        />
      ) : null;
  }

  onItemClick(id) {
    this.props.onItemClick(id);
  }

  renderList() {
    const {data} = this.props;
    console.log(data);
    return data.map(this.generateItem);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List>
          {this.renderList()}
        </List>
      </div>
    );
  }
}

EmailList.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

export default withStyles(styles)(EmailList);

