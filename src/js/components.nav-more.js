import React from 'react';

class NavMore extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showNavMore: false
    };
  }

  render() {
    let dropdownClass = `c-nav-more__dropdown ${this.state.showNavMore ? 'state-active' : ''}`;

    return (
      <nav className="c-nav-more">
        <button className="c-nav-more__button" onClick={this.showNavMore.bind(this)}>
          <i className="icon-more"></i>
        </button>

        <ul className={dropdownClass}>
          <li><a href="#"><i className="icon-person-outline"></i>Profile</a></li>
          <li><a href="#"><i className="icon-notifications-none"></i>Notification settings</a></li>
          <li><a href="#"><i className="icon-earth"></i>Platforms</a></li>
          <li><a className="sign-out" href="#"><i className="icon-sign-out"></i>Logout</a></li>
        </ul>
      </nav>
    );
  }

  showNavMore() {
    this.setState({
      showNavMore: !this.state.showNavMore
    });
  }
}

export default NavMore;
