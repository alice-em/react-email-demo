import autoBind from 'auto-bind';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { CircleLoader } from 'react-spinners';

import Body from '../components/Body';
import Header from '../components/Header';

const toJson = (data) => (
  data.json()
);

const setId = id => item => item.id === id;

const uri = 'https://morning-falls-3769.herokuapp.com/api/messages';

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,

      id: this.props.id, // number
      from: '', // string Email@email.com
      to: '', // string Email@email.com
      cc: [], // array of string Email@email.com
      subject: '', // string
      body: '', // string
      tags: [] // array of strings
    };
    autoBind.react(this);

  }

  componentDidMount() {
    fetch(uri)
      .then(toJson)
      .then(this.filterData)
      .then(this.setData)
      .catch((err) => {
        console.error(err);
      });
  }

  filterData(data) {
    const {id} = this.state;
    console.log(data);
    const compareId = setId(id);
    return data.find(compareId);
  }


  setData(data) {
    const {
      from,
      to,
      cc,
      subject,
      body,
      tags,
    } = data;
    const loading = false;
    this.setState({
      body,
      cc,
      from,
      loading,
      subject,
      tags,
      to,
    });
  }

  determineView() {
    const {loading} = this.state;
    return loading
      ? this.renderLoadingScreen()
      : this.renderEmail();
  }

  renderBody() {
    const {body, tags} = this.state;
    return (
      <Body 
        body={body}
        tags={tags}
      />
    );
  }

  renderEmail() {
    return(
      <Paper>
        {this.renderHeader()}
        {this.renderBody()}
      </Paper>
    );
  }

  renderHeader() {
    const {closeEmail} = this.props;
    const {
      cc,
      from,
      subject,
      to,
    } = this.state;
    return (
      <Header
        cc={cc}
        onClick={closeEmail}
        from={from}
        subject={subject}
        to={to}
      />
    );
  }

  renderLoadingScreen() {
    return (
      <div style={styles.container} >
        <CircleLoader />
      </div>
    );
  }

  render() {
    console.log('this.state', this.state);
    return (
      <div>
        {this.determineView()}
      </div>
    );
  }
}

const styles = {
  container: {
    minHeight: 300,
    minWidth: 600,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  }
};

Email.propTypes = {
  closeEmail: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Email;