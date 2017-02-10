import React from 'react';
import { Link } from 'react-router';

class NavMore extends React.Component {
  render() {
    let dropdownClass = `c-nav-more__dropdown ${this.props.navMoreActive ? 'state-active' : ''}`;

    return (
      <nav className="c-nav-more">
        <button className="c-nav-more__button" onClick={ this.props.toggleNavMore }>
          <i className="icon-more"></i>
        </button>

        <ul className={ dropdownClass }>
          <li>
            <Link to="/my-profile" onClick={ this.props.openMyProfile }>
              <i className="icon-person-outline"></i>Profile
            </Link>
          </li>
          <li><a href="#"><i className="icon-notifications-none"></i>Notification settings</a></li>
          <li><a href="#"><i className="icon-earth"></i>Platforms</a></li>
          <li><a className="sign-out" href="#"><i className="icon-sign-out"></i>Logout</a></li>
        </ul>
      </nav>
    );
  }
}

export default NavMore;
