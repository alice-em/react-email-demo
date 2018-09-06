import autoBind from 'auto-bind';
import { Modal } from '@material-ui/core';
import React, { Component } from 'react';

import Email from './Email';
import EmailList from '../components/EmailList';
import Sidebar from '../components/Sidebar';
import styles from '../styles';

const toJson = (data) => (
  data.json()
);
const uri = 'https://morning-falls-3769.herokuapp.com/api/messages';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
      data: [],
      id: null,
    };
    autoBind.react(this);
  }

  componentDidMount() {
    fetch(uri)
      .then(toJson)
      .then(this.setData)
      .catch((err) => {
        console.error(err);
      });
  }

  closeEmail() {
    this.setState({
      active: false,
      id: null
    });
  }

  openEmail(id) {
    this.setState({
      active: true,
      id
    });
  }

  setData(data) {
    console.log(data);
    this.setState({ data });
  }

  renderEmail() {
    const {id} = this.state;
    return (
      <Email 
        closeEmail={this.closeEmail}
        id={id}
      />
    );
  }

  renderEmailList() {
    const { data } = this.state;
    return (
      <EmailList
        data={data}
        onItemClick={this.openEmail}
      />
    );
  }
  render() {
    const {active} = this.state;
    return (
      <div style={styles.flex}>
        <div className='sidebar' style={styles.duo}>
          <Sidebar />
        </div>
        <div className='main' style={styles.duo}>
          {this.renderEmailList()}
        </div>
        <div style={styles.container}>
          <Modal
            disableAutoFocus
            open={active}
            style={{
              alignContent: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            {this.renderEmail()}
          </Modal>
        </div>
      </div>
    );
  }
}

export default Home;