import React from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import config from '../config';
import actions from '../actions';
import { conditionalClass } from '../utillities';
import NavMore from '../components/components.nav-more';

class Header extends React.Component {
  render() {
    const header = conditionalClass({
      's-header': true,
      'state-active': this.props.headerState.mode == 'CHAT' || this.props.headerState.mode == 'PROFILE',
    });

    const logo = conditionalClass({
      'logo': true,
      'state-active': this.props.headerState.mode !== 'CHAT' && this.props.headerState.mode !== 'PROFILE',
    });

    const backButton = conditionalClass({
      'back-button': true,
      'state-active': this.props.headerState.mode == 'CHAT' || this.props.headerState.mode == 'PROFILE',
    });

    let navigation;

    if (this.props.headerState.mode == 'CHAT') {
      navigation = <NavChat { ...this.props } key="nav-chat"/>;
    } else {
      navigation = <NavMain { ...this.props } key="nav-main"/>;
    }

    return (
      <header className={ header }>
        <div className="icon">
          <img className={ logo } src="/dest/text-icon.png" alt="Convy icon" width="30" height="30"/>
          <Link to="/" className={ backButton }>
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

        <NavMore active={ this.props.headerState.navMoreActive } toggle={ this.props.toggleNavMore }/>
      </header>
    );
  }
}

class NavMain extends React.Component {
  render() {
    const navMainItem1 = conditionalClass({
      'c-nav-main__button': true,
      'state-active': this.props.swipeViewState['mainSwipeView'] == 0,
    });

    const navMainItem2 = conditionalClass({
      'c-nav-main__button': true,
      'state-active': this.props.swipeViewState['mainSwipeView'] == 1,
    });

    return (
      <nav className="c-nav-main">
        <ul>
          <li>
            <IndexLink className={ navMainItem1 } onClick={ () => this.props.setMainSwipeViewIndex(0) }>
              Chats
            </IndexLink>
          </li>
          <li>
            <Link className={ navMainItem2 } onClick={ () => this.props.setMainSwipeViewIndex(1) }>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

class NavChat extends React.Component {
  render() {
    const navChatItem1 = conditionalClass({
      'c-nav-main__button c-nav-main__button--chat': true,
      'state-active': this.props.swipeViewState['conversationSwipeView'] == 0,
    });

    const navChatItem2 = conditionalClass({
      'c-nav-main__button c-nav-main__button--profile': true,
      'state-active': this.props.swipeViewState['conversationSwipeView'] == 1,
    });

    const navChatItem3 = conditionalClass({
      'c-nav-main__button c-nav-main__button--charts': true,
      'state-active': this.props.swipeViewState['conversationSwipeView'] == 2,
    });

    return (
      <nav className="c-nav-main c-nav-main--chat">
        <ul>
          <li>
            <Link className={ navChatItem1 } onClick={ () => this.props.setConversationSwipeViewIndex(0) }>
              <i className="icon-message"></i>
            </Link>
          </li>
          <li>
            <Link className={ navChatItem2 } onClick={ () => this.props.setConversationSwipeViewIndex(1) }>
              <i className="icon-person"></i>
            </Link>
          </li>
          <li>
            <Link className={ navChatItem3 } onClick={ () => this.props.setConversationSwipeViewIndex(2) }>
              <i className="icon-bar-chart"></i>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state, ownProps) => state[config.stateName];

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleNavMore: () => {
      dispatch(actions.header.toggleNavMore());
    },

    setMainSwipeViewIndex: (index) => {
      dispatch(actions.swipeView.setSwipeViewIndex('mainSwipeView', index));
    },

    setConversationSwipeViewIndex: (index) => {
      dispatch(actions.swipeView.setSwipeViewIndex('conversationSwipeView', index));
    },
  };
};

const HeaderConnect = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderConnect;
