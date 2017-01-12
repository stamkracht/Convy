import React from 'react';

class Authentication extends React.Component {
  render() {
    return (
      <section className="c-authentication c-authentication--vertical">
        <section className="c-authentication__inner">
          <article className="c-authentication__front">
            <form>
              <div className="c-authentication__fields">
                <label>
                  {/* <span className="c-authentication__feedback"><i className="icon-alert-outline"></i>Woops! Your email address is invalid.</span> */}
                  <input type="email" name="email" placeholder="email" tabindex="1" required/>
                </label>

                <label>
                  {/* <span className="c-authentication__feedback">Incorrect email or password. Let's try again.</span> */}
                  <input type="password" name="password" placeholder="password" tabindex="2" required/>
                </label>
              </div>
              <div className="c-authentication__submit">
                <button tabindex="3">Connect</button>
              </div>
            </form>
          </article>

          <article className="c-authentication__back">
            <form>
              <div className="c-authentication__fields">
                <label>
                  {/* <span className="c-authentication__feedback">Woops! Your email address is invalid.</span> */}
                  <input type="email" name="email" placeholder="email" tabindex="1" required/>
                </label>

                <label>
                  {/* <span className="c-authentication__feedback">Your password is too short. Let's not make it too easy.</span> */}
                  <input type="password" name="password" placeholder="password" tabindex="2" required/>
                </label>
              </div>
              <div className="c-authentication__submit">
                <button tabindex="3">
                  <span className="js-register-close">
                    <i className="icon-arrow-back"></i>
                  </span>
                  Register
                </button>
              </div>
            </form>
          </article>
        </section>
      </section>
    );
  }

  // functions.
}

export default Authentication;
