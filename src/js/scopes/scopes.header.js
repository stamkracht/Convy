import React from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { dynamicClassNames } from '../utillities';
import actions from '../actions';
import NavMore from '../components/components.nav-more';

class Header extends React.Component {
  render() {
    let navigation;
    let headerClass;
    let logoClass;
    let backButtonClass;

    if (this.props.headerState.mode == 'CHAT') {
      navigation = <NavChat { ...this.props } key="nav-chat"/>;
      headerClass = 's-header state-active';
      logoClass = 'logo';
      backButtonClass = 'back-button state-active';
    } else if (this.props.headerState.mode == 'PROFILE') {
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
          <Link to="/" className={ backButtonClass }>
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

        <NavMore active={this.props.headerState.navMoreActive} toggle={this.props.toggleNavMore}/>
      </header>
    );
  }
}

class NavMain extends React.Component {
  render() {
    return (
      <nav className="c-nav-main">
        <ul>
          <li><IndexLink
            className={dynamicClassNames("c-nav-main__button", { 'state-active': this.props.swipeViewState['mainSwipeView'] == 0})}
            onClick={() => this.props.setMainSwipeViewIndex(0)}
          >
            Chats
          </IndexLink></li>
          <li><Link
            className={dynamicClassNames("c-nav-main__button", { 'state-active': this.props.swipeViewState['mainSwipeView'] == 1})}
            onClick={() => this.props.setMainSwipeViewIndex(1)}
          >Contacts</Link></li>
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
            <Link
              className={dynamicClassNames("c-nav-main__button c-nav-main__button--chat", { 'state-active': this.props.swipeViewState['conversationSwipeView'] == 0})}
              onClick={() => this.props.setConversationSwipeViewIndex(0)}
            >
              <i className="icon-message"></i>
            </Link>
          </li>
          <li>
            <Link
              className={dynamicClassNames("c-nav-main__button c-nav-main__button--profile", { 'state-active': this.props.swipeViewState['conversationSwipeView'] == 1})}
              onClick={() => this.props.setConversationSwipeViewIndex(1)}
              >
              <i className="icon-person"></i>
            </Link>
          </li>
          <li>
            <Link
              className={dynamicClassNames("c-nav-main__button c-nav-main__button--charts", { 'state-active': this.props.swipeViewState['conversationSwipeView'] == 2})}
              onClick={() => this.props.setConversationSwipeViewIndex(2)}
              >
              <i className="icon-bar-chart"></i>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleNavMore: () => {
      dispatch(actions.header.toggleNavMore());
    },

    setMainSwipeViewIndex: (index) => {
      dispatch(actions.swiper.setSwipeViewIndex('mainSwipeView', index));
    },

    setConversationSwipeViewIndex: (index) => {
      dispatch(actions.swiper.setSwipeViewIndex('conversationSwipeView', index));
    },
  };
};

const HeaderConnect = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderConnect;
