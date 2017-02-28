import React from 'react';

import AppBackground from '../components/components.app-background';
import { connect } from 'react-redux';
import Header from '../scopes/scopes.header';
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

  // functions.
}

const mapStateToProps = (state, ownProps) => {
  return {
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

const ApplicationConnect = connect(mapStateToProps, mapDispatchToProps)(Application);

export default ApplicationConnect;
