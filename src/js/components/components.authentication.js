import React from 'react';
import { connect } from 'react-redux';

import actions from '../actions';
import config from '../config'

class Authentication extends React.Component {

  render() {
    let authenticationClass = 'c-authentication c-authentication--vertical';
    let connectClass;

    if (this.props.showRegister) {
      authenticationClass += ' state-register';
    }

    if (this.props.authState.isConnecting) {
      connectClass = 'state-loading';
    }

    return (
      <section className={authenticationClass}>
        <section className="c-authentication__inner">
          <article className="c-authentication__front">
            <form method="post">
              <div className="c-authentication__fields">
                <label>
                  { this.getEmailError() }
                  <input ref={(input => this.email = input)} type="email" name="email" placeholder="email" required/>
                </label>

                <label>
                  { this.getPasswordError() }
                  <input ref={(input => this.password = input)} type="password" name="password" placeholder="password" required/>
                </label>
              </div>
              <div className="c-authentication__submit">
                <button className={connectClass} onClick={this.connect.bind(this)}>Connect</button>
              </div>
            </form>
          </article>

          <article className="c-authentication__back">
            <form method="post">
              <div className="c-authentication__fields">
                <label>
                  {/* <span className="c-authentication__feedback">Woops! Your email address is invalid.</span> */}
                  <input type="email" name="email" placeholder="email" required/>
                </label>

                <label>
                  {/* <span className="c-authentication__feedback">Your password is too short. Let's not make it too easy.</span> */}
                  <input type="password" name="password" placeholder="password" required/>
                </label>
              </div>
              <div className="c-authentication__submit">
                <span onClick={this.props.hideRegister}>
                  <i className="icon-arrow-back"></i>
                </span>

                <button>Register</button>
              </div>
            </form>
          </article>
        </section>
      </section>
    );
  }

  connect(event) {
    event.preventDefault();
    this.props.login(this.email.value, this.password.value);
  }

  getEmailError() {
    if(this.props.authState.error && this.props.authState.error.email) {
      return (<span className="c-authentication__feedback"><i className="icon-alert-outline"></i>{this.props.authState.error.email[0]}</span>);
    } else if(this.props.authState.error && this.props.authState.error.non_field_errors) {
      return (<span className="c-authentication__feedback"><i className="icon-alert-outline"></i>{this.props.authState.error.non_field_errors[0]}</span>);
    }
  }

  getPasswordError() {
    if(this.props.authState.error && this.props.authState.error.password) {
      return (<span className="c-authentication__feedback"><i className="icon-alert-outline"></i>{this.props.meState.error.password[0]}</span>);
    }
  }

}

Authentication.propTypes = {
  showRegister: React.PropTypes.bool,
  hideRegister: React.PropTypes.func
};

const mapStateToProps = (state, ownProps) => state[config.stateName];

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (identifier, password) => dispatch(actions.auth.login(identifier, password)),
  };
};

const AuthenticationConnect = connect(mapStateToProps, mapDispatchToProps)(Authentication);

export default AuthenticationConnect;
