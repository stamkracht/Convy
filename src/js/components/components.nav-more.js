import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import actions from '../actions';
import config from '../config';
import { classNames } from '../utillities';

class NavMore extends React.Component {

  render() {
    return (
      <nav className="c-nav-more">
        <button className="c-nav-more__button" onClick={ this.props.toggle }>
          <i className="icon-more"></i>
        </button>

        <ul className={ classNames('c-nav-more__dropdown', {'state-active': this.props.active}) }>
          <li>
            <Link to={config.urlPrefix + "my-profile"}>
              <i className="icon-person-outline"></i>Profile
            </Link>
          </li>
          <li><a href="#"><i className="icon-notifications-none"></i>Notification settings</a></li>
          <li><a href="#"><i className="icon-earth"></i>Platforms</a></li>
          <li><a className="sign-out" href="#" onClick={ this.props.logout.bind(this) }><i className="icon-sign-out"></i>Logout</a></li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state, ownProps) => state[config.stateName];

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(actions.auth.logout()),
  };
};

const NavMoreConnect = connect(mapStateToProps, mapDispatchToProps)(NavMore);

export default NavMoreConnect;
