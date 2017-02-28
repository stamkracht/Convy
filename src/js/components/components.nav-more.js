import React from 'react';
import { Link } from 'react-router';

import { dynamicClassNames } from '../utillities'

class NavMore extends React.Component {
  render() {
    let dropdownClass = dynamicClassNames('c-nav-more__dropdown', {
      'state-active': this.props.active
    })

    return (
      <nav className="c-nav-more">
        <button className="c-nav-more__button" onClick={ this.props.toggle }>
          <i className="icon-more"></i>
        </button>

        <ul className={ dropdownClass }>
          <li>
            <Link to="/my-profile">
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
