import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="s-header state-chat">
        <div className="icon">
          <img className="logo" src="dest/text-icon.png" alt="Convy icon" width="30" height="30"/>
          <a className="back-button js-back-button state-active" href="#"><i className="icon-arrow-back"></i></a>
        </div>

        <span className="seperator"></span>

        <nav className="c-nav-main">
          <ul>
            <li><a className="c-nav-main__button" href="#">Chats</a></li>
            <li><a className="c-nav-main__button" href="#">Contacts</a></li>
          </ul>
        </nav>

        <nav className="c-nav-main c-nav-main--chat js-nav-main-chat state-active">
          <ul>
            <li><a className="c-nav-main__button c-nav-main__button--chat" href="#"><i className="icon-message"></i></a></li>
            <li><a className="c-nav-main__button c-nav-main__button--profile" href="#"><i className="icon-person"></i></a></li>
            <li><a className="c-nav-main__button c-nav-main__button--charts" href="#"><i className="icon-bar-chart"></i></a></li>
          </ul>
        </nav>

        <nav className="c-nav-more">
          <button className="c-nav-more__button js-nav-more-button">
            <i className="icon-more"></i>
          </button>
          <ul className="c-nav-more__dropdown js-nav-more-dropdown">
            <li><a href="#"><i className="icon-person-outline"></i>Profile</a></li>
            <li><a href="#"><i className="icon-notifications-none"></i>Notification settings</a></li>
            <li><a href="#"><i className="icon-earth"></i>Platforms</a></li>
            <li><a className="sign-out" href="#"><i className="icon-sign-out"></i>Logout</a></li>
          </ul>
        </nav>
      </header>
    );
  }

  // functions.
}

export default Header;





// if (document.querySelector('.s-header') && document.querySelector('.js-trigger')) {
//   let trigger = document.querySelector('.js-trigger'),
//       header = document.querySelector('.s-header'),
//       navChat = document.querySelector('.js-nav-main-chat'),
//       logo = document.querySelector('.s-header .icon .logo'),
//       backButton = document.querySelector('.js-back-button');

//   trigger.addEventListener('click', function (e) {
//     e.preventDefault();
//     header.classList.toggle('state-chat');
//     navChat.classList.toggle('state-active');
//     logo.classList.toggle('state-active');
//     backButton.classList.toggle('state-active');
//     this.classList.toggle('state-active');
//   });

//   backButton.addEventListener('click', function (e) {
//     e.preventDefault();
//     trigger.classList.toggle('state-active');
//     header.classList.toggle('state-chat');
//     navChat.classList.toggle('state-active');
//     logo.classList.toggle('state-active');
//     this.classList.toggle('state-active');
//   });
// }