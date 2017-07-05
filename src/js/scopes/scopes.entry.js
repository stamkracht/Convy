import React from 'react';

import config from '../config';
import Authentication from '../components/components.authentication';

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showRegister: false
    };
  }

  render() {
    return (
      <main className="s-entry">
        <div className="logo">
          <img src={ config.companyLogo } alt="Convy logo" width="284" height="73" />
        </div>

        <Authentication showRegister={this.state.showRegister} hideRegister={this.hideRegister.bind(this)}/>

        <button className="register-trigger" onClick={this.showRegister.bind(this)}>Not registered? Create account.</button>
      </main>
    );
  }

  showRegister() {
    this.setState({
      showRegister: true
    });
  }

  hideRegister() {
    this.setState({
      showRegister: false
    });
  }
}

export default Entry;
