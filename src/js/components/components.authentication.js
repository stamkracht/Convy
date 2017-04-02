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

    if (this.props.meState.isConnecting) {
      connectClass = 'state-loading';
    }

    return (
      <section className={authenticationClass}>
        <section className="c-authentication__inner">
          <article className="c-authentication__front">
            <form method="post">
              <div className="c-authentication__fields">
                <label>
                  {/* <span className="c-authentication__feedback"><i className="icon-alert-outline"></i>Woops! Your email address is invalid.</span> */}
                  <input ref={(input => this.email = input)} type="email" name="email" placeholder="email" required/>
                </label>

                <label>
                  {/* <span className="c-authentication__feedback">Incorrect email or password. Let's try again.</span> */}
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

  connect(e) {
    e.preventDefault();
    this.props.login(this.email.value, this.password.value);
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
