import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { closeChat, openMyProfile, toggleNavMore, setSwipeViewIndex } from '../actions/actions';
import NavMore from '../components/components.nav-more';

class Header extends React.Component {
  render() {
    let navigation;
    let headerClass;
    let logoClass;
    let backButtonClass;

    if (this.props.chatActive) {
      navigation = <NavChat { ...this.props } key="nav-chat"/>;
      headerClass = 's-header state-chat';
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
          <img className={ logoClass } src="dest/text-icon.png" alt="Convy icon" width="30" height="30"/>
          <Link to="/" className={ backButtonClass } onClick={ this.props.closeConversation }>
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
          <li><a onClick={() => this.props.setMainSwipeViewIndex(0)} className="c-nav-main__button" href="#chat-list">Chats</a></li>
          <li><a onClick={() => this.props.setMainSwipeViewIndex(1)} className="c-nav-main__button" href="#contact-list">Contacts</a></li>
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
            <a className="c-nav-main__button c-nav-main__button--chat" href="#">
              <i className="icon-message"></i>
            </a>
          </li>
          <li>
            <a className="c-nav-main__button c-nav-main__button--profile" href="#">
              <i className="icon-person"></i>
            </a>
          </li>
          <li>
            <a className="c-nav-main__button c-nav-main__button--charts" href="#">
              <i className="icon-bar-chart"></i>
            </a>
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
    closeConversation: () => {
      dispatch(closeChat());
    },

    openMyProfile: () => {
      dispatch(openMyProfile());
    },

    toggleNavMore: () => {
      dispatch(toggleNavMore());
    },

    setMainSwipeViewIndex: (index) => {
      dispatch(setSwipeViewIndex('mainSwipeView', index));
    },
  };
};

const HeaderConnect = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderConnect;
