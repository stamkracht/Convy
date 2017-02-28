import React from 'react';

import AppBackground from '../components/components.app-background';
import { connect } from 'react-redux';
import Header from '../scopes/scopes.header';
import { fetchMe } from '../actions/actions'
import Adapter from '../adapter'

class Application extends React.Component {
  render() {
    return (
      <div>
        <AppBackground backgroundImage="dest/bg-app.jpg"/>
        <Header/>
        { this.props.children }
      </div>
    );
  }

  componentWillMount() {
    this.props.fetchMe();
  }

}

const mapStateToProps = (state, ownProps) => state;
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMe: () => dispatch(fetchMe())
  };
};

const ApplicationConnect = connect(mapStateToProps, mapDispatchToProps)(Application);

export default ApplicationConnect;
