import React from 'react';

import NavMore from './components.nav-more';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatActive: true
    };
  }

  render() {
    let navigation;
    let headerClass;
    let logoClass;
    let backButtonClass;

    if (this.state.chatActive) {
      navigation = <NavChat/>;
      headerClass = 's-header state-chat';
      logoClass = 'logo';
      backButtonClass = 'back-button state-active';
    } else {
      navigation = <NavMain/>;
      headerClass = 's-header';
      logoClass = 'logo state-active';
      backButtonClass = 'back-button';
    }

    return (
      <header className={headerClass}>
        <div className="icon">
          <img className={logoClass} src="dest/text-icon.png" alt="Convy icon" width="30" height="30"/>
          <a className={backButtonClass} onClick={this.closeConversation.bind(this)}><i className="icon-arrow-back"></i></a>
        </div>

        <span className="seperator"></span>

        {navigation}

        <NavMore/>
      </header>
    );
  }

  closeConversation() {
    this.setState({
      chatActive: false
    });
  }
}

class NavMain extends React.Component {
  render() {
    return (
      <nav className="c-nav-main">
        <ul>
          <li><a className="c-nav-main__button" href="#">Chats</a></li>
          <li><a className="c-nav-main__button" href="#">Contacts</a></li>
        </ul>
      </nav>
    );
  }
}

class NavChat extends React.Component {
  render() {
    return (
      <nav className="c-nav-main c-nav-main--chat js-nav-main-chat state-active">
        <ul>
          <li><a className="c-nav-main__button c-nav-main__button--chat" href="#"><i className="icon-message"></i></a></li>
          <li><a className="c-nav-main__button c-nav-main__button--profile" href="#"><i className="icon-person"></i></a></li>
          <li><a className="c-nav-main__button c-nav-main__button--charts" href="#"><i className="icon-bar-chart"></i></a></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
