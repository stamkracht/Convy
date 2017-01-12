import React from 'react';

class NavMore extends React.Component {
  render() {
    return (
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
    );
  }

  // functions.
}

export default NavMore;





// if (document.querySelector('.c-nav-more')) {
//   let navMoreButton = document.querySelector('.js-nav-more-button'),
//       navMoreDropdown = document.querySelector('.js-nav-more-dropdown');

//   // toggling the dropdown nav on and off by pressing the nav-more button.
//   navMoreButton.addEventListener('click', function (e) {
//     e.preventDefault();
//     navMoreDropdown.classList.toggle('state-active');
//   });
// }
