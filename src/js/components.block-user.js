import React from 'react';

class BlockUser extends React.Component {
  render() {
    return (
      <article className="c-block-user">
        <span className="circle"></span>

        <ul className="c-block-user__data">
          <li className="message-count">9 new messages</li>
          <li>17:31</li>
        </ul>

        <div className="o-flag">
          <div className="c-block-user__image o-flag__img">
            <img src="http://placehold.it/50x50" alt="User name" width="50" height="50"/>
          </div>

          <div className="c-block-user__content o-flag__body">
            <p className="c-block-user__title">Firstname Lastname</p>
            <p className="c-block-user__text">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </article>
    );
  }

  // functions.
}

export default BlockUser;
