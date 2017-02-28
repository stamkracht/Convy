import React from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import actions from '../actions';
import NavMore from '../components/components.nav-more';

class Header extends React.Component {
  render() {
    let navigation;
    let headerClass;
    let logoClass;
    let backButtonClass;

    if (this.props.chatActive) {
      navigation = <NavChat { ...this.props } key="nav-chat"/>;
      headerClass = 's-header state-active';
      logoClass = 'logo';
      backButtonClass = 'back-button state-active';
    } else if (this.props.myProfileActive) {
      headerClass = 's-header state-active';
      logoClass = 'logo';
      backButtonClass = 'back-button state-active';
    } else {
      navigation = <NavMain { ...this.props } key="nav-main"/>;
      headerClass = 's-header';
      logoClass = 'logo state-active';
      backButtonClass = 'back-button';
    }

    return (
      <header className={ headerClass }>
        <div className="icon">
          <img className={ logoClass } src="/dest/text-icon.png" alt="Convy icon" width="30" height="30"/>
          <Link to="/" className={ backButtonClass } onClick={ this.props.closeOverlayNav }>
            <i className="icon-arrow-back"></i>
          </Link>
        </div>

        <span className="seperator"></span>

        <ReactCSSTransitionGroup
          transitionName="state"
          transitionEnterTimeout={ 800 }
          transitionLeaveTimeout={ 300 }
        >
          { navigation }
        </ReactCSSTransitionGroup>

        <NavMore { ...this.props }/>
      </header>
    );
  }
}

class NavMain extends React.Component {
  render() {
    return (
      <nav className="c-nav-main">
        <ul>
          <li><IndexLink className="c-nav-main__button" to="/" activeClassName="state-active">Chats</IndexLink></li>
          <li><Link className="c-nav-main__button" to="contact-list" activeClassName="state-active">Contacts</Link></li>
        </ul>
      </nav>
    );
  }
}

class NavChat extends React.Component {
  render() {
    return (
      <nav className="c-nav-main c-nav-main--chat">
        <ul>
          <li>
            <Link to="/conversation" className="c-nav-main__button c-nav-main__button--chat" activeClassName="state-active">
              <i className="icon-message"></i>
            </Link>
          </li>
          <li>
            <Link to="/conversation/profile"  className="c-nav-main__button c-nav-main__button--profile" activeClassName="state-active">
              <i className="icon-person"></i>
            </Link>
          </li>
          <li>
            <Link to="/conversation/stats" className="c-nav-main__button c-nav-main__button--charts" activeClassName="state-active">
              <i className="icon-bar-chart"></i>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.headerState;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeOverlayNav: () => {
      dispatch(actions.header.closeChat());
      dispatch(actions.header.closeMyProfile());
    },

    openMyProfile: () => {
      dispatch(actions.header.openMyProfile());
    },

    toggleNavMore: () => {
      dispatch(actions.header.toggleNavMore());
    },
  };
};

const HeaderConnect = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderConnect;
